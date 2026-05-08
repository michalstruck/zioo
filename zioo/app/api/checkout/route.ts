import { NextResponse } from "next/server";
import Stripe from "stripe";
import { BUNDLE_ID, PRODUCT_ID, products } from "@/lib/products";
import { calculateShippingCost, SHIPPING_METHOD } from "@/lib/consts";
import z from "zod";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

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
  email: z.email("Email jest wymagany"),
  // it's optional, but if present it should be a valid phone number
  phone: z.string().optional(),
  shippingMethod: z.enum(["inpostLocker", "inpostCourier"]),
  // inpostLocker
  pointName: z.string().optional(),
  pointAddress: z.string().optional(),
  // inpostCourier
  street: z.string().optional(),
  zip: z.string().optional(),
  city: z.string().optional(),
});

const productSchema = z.object({
  id: z.enum(Object.values(PRODUCT_ID)),
  bundleId: z.enum(Object.values(BUNDLE_ID)),
  quantity: z.number().positive(),
});

export async function POST(req: Request) {
  try {
    const { items, customer } = await req.json();
    // TODO add explicit loop that validates items from client
    // const parsedItems = z.array(productSchema).parse(items);

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
      // TODO - use stripe built in Products to handle this - this will create mess in the future
      lineItems.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `${product.name} ${
              product.primaryTerpene ? `(${product.primaryTerpene})` : ""
            } ${bundle.size} szt.`,
            images: [
              // TODO actual images
              "https://localhost:3000/clear_mind_blend.png",
              "https://localhost:3000/clear_mind_blend.png",
            ],
          },
          unit_amount: Math.round(bundle.price * 100),
        },
        quantity: item.quantity,
        metadata: {
          zioo_product_id: product.id,
          zioo_bundle_id: bundle.id,
        },
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
            name: `Dostawa: ${customer.shippingMethod === "inpostLocker" ? "Paczkomat 24/7" : "Kurier InPost"}`,
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
            name: `Darmowa dostawa: ${customer.shippingMethod === "inpostLocker" ? "Paczkomat 24/7" : "Kurier InPost"}`,
          },
          unit_amount: 0,
        },
        quantity: 1,
      });
    }

    // Determine return URL
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const metadata = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone || "",
      shippingMethod: customer.shippingMethod,
      pointName: customer.pointName || "",
      pointAddress: customer.pointAddress || "",
      street: customer.street || "",
      zip: customer.zip || "",
      city: customer.city || "",
    };

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      line_items: lineItems,
      mode: "payment",
      return_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: customer.email,
      payment_intent_data: {
        metadata,
      },
      metadata,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
