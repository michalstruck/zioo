import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});

const productMap = new Map(products.map((p) => [p.id, p]));

export async function POST(req: Request) {
  try {
    const { items, customer } = await req.json();
    // TODO add explicit loop that validates items from client

    // Server-side price validation — never trust client prices
    const lineItems = [];
    for (const item of items) {
      const product = productMap.get(item.product.id);
      if (!product) {
        return NextResponse.json(
          { error: `Unknown product: ${item.product.id}` },
          { status: 400 },
        );
      }
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: product.name,
            description: product.primaryTerpene,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      });
    }

    // Compute subtotal from canonical server prices
    const subtotal = items.reduce((acc: number, item: any) => {
      const product = productMap.get(item.product.id);
      return acc + (product?.price ?? 0) * item.quantity;
    }, 0);
    const isFreeShipping = subtotal >= 99;

    let shippingCost = 0;
    if (!isFreeShipping) {
      shippingCost = customer.shippingMethod === "inpost" ? 13.99 : 16.99;
    }

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `Dostawa: ${customer.shippingMethod === "inpost" ? "Paczkomat 24/7" : "Kurier InPost"}`,
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    // Determine return URL
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      line_items: lineItems,
      mode: "payment",
      return_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: customer.email,
      metadata: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone || "",
        shippingMethod: customer.shippingMethod,
        pointName: customer.pointName || "",
        pointAddress: customer.pointAddress || "",
        street: customer.street || "",
        zip: customer.zip || "",
        city: customer.city || "",
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
