import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";
import { calculateShippingCost, SHIPPING_METHOD } from "@/lib/consts";
import z from "zod";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});

const productMap = new Map(products.map((p) => [p.id, p]));

// todo validation and customer type
type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shippingMethod: keyof typeof SHIPPING_METHOD;
  pointName?: string;
  pointAddress?: string;
  street?: string;
  zip?: string;
  city?: string;
};

const customerSchema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.string().email("Email jest wymagany"),
  phone: z.string().min(1, "Numer telefonu jest wymagany"),
  shippingMethod: z.enum(["locker", "courier"]),
  // locker
  pointName: z.string().optional(),
  pointAddress: z.string().optional(),
  // courier
  street: z.string().optional(),
  zip: z.string().optional(),
  city: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const { items, customer } = await req.json();
    // TODO add explicit loop that validates items from client

    const parsedCustomer = customerSchema.safeParse(customer);

    if (!parsedCustomer.success) {
      return NextResponse.json(
        {
          error: "Invalid customer data",
          details: parsedCustomer.error.message,
        },
        { status: 400 },
      );
    }

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

      const bundle = product.bundles.find((b) => b.id === item.bundleId);
      if (!bundle) {
        return NextResponse.json(
          {
            error: `Unknown bundle: ${item.bundleId} for product: ${item.product.id}`,
          },
          { status: 400 },
        );
      }

      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `${product.name} (${bundle.id})`,
            description: product.primaryTerpene,
          },
          unit_amount: Math.round(bundle.price * 100),
        },
        quantity: item.quantity,
      });
    }

    // Compute subtotal from canonical server prices
    const subtotal = items.reduce((acc: number, item: any) => {
      const product = productMap.get(item.product.id);
      // todo: undefined handling
      const bundle = product?.bundles.find((b) => b.id === item.bundleId);
      return acc + (bundle?.price ?? 0) * item.quantity;
    }, 0);

    const shippingCost = calculateShippingCost(
      customer.shippingMethod,
      subtotal,
    );

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `Dostawa: ${customer.shippingMethod === "locker" ? "Paczkomat 24/7" : "Kurier InPost"}`,
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    } else {
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `Darmowa dostawa: ${customer.shippingMethod === "locker" ? "Paczkomat 24/7" : "Kurier InPost"}`,
          },
          unit_amount: 0,
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
