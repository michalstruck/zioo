import { NextResponse } from "next/server";
import Stripe from "stripe";
import { BUNDLE_ID, PRODUCT_ID } from "@/lib/products";
import { SHIPPING_METHOD } from "@/lib/consts";
import z from "zod";
import {
  buildCheckoutLineItems,
  CheckoutValidationError,
} from "@/lib/checkout/checkout-utils";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

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

    let lineItems: any[];
    try {
      const result = buildCheckoutLineItems(items, customer.shippingMethod);
      lineItems = result.lineItems;
    } catch (error) {
      if (error instanceof CheckoutValidationError) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      throw error;
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
