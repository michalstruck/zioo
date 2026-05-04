import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import OrderConfirmationEmail from "@/components/emails/order-confirmation";
import NewOrderAlertEmail from "@/components/emails/new-order-alert";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    if (!endpointSecret) {
      throw new Error("STRIPE_WEBHOOK_SECRET is not set");
    }
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      let session = event.data.object as Stripe.Checkout.Session;

      // Ensure we have line_items if not included in the payload
      if (!session.line_items) {
        session = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ["line_items"],
        });
      }

      // Downstream processing: Send transactional emails via Resend
      console.log(`Payment confirmed for session: ${session.id}`);

      const formattedLineItems = session.line_items?.data.map((item) => ({
        description: item.description || "Produkt",
        quantity: item.quantity || 1,
        amountTotal: new Intl.NumberFormat("pl-PL", {
          style: "currency",
          currency: item.currency || "PLN",
        }).format((item.amount_total || 0) / 100),
      })) || [];

      const orderTotal = new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: session.currency || "PLN",
      }).format((session.amount_total || 0) / 100);

      const customerName = session.customer_details?.name || "Kliencie";
      const customerEmail = session.customer_details?.email || "";
      const shippingDetails = session.shipping_details?.address || {};

      const sellerEmail = process.env.SELLER_EMAIL;

      if (!sellerEmail) {
        console.error("SELLER_EMAIL is not set in environment variables.");
      }

      const orderId = session.id;

      // 1. Send Order Confirmation Email to Customer
      if (customerEmail) {
        try {
          await resend.emails.send({
            from: "zioo <hello@zioo.pl>",
            to: customerEmail,
            subject: "Potwierdzenie zamówienia zioo.",
            react: OrderConfirmationEmail({
              customerName,
              orderTotal,
              lineItems: formattedLineItems,
            }),
          });
          console.log(`Sent order confirmation email to ${customerEmail}`);
        } catch (error) {
          console.error("Error sending customer email:", error);
        }
      }

      // 2. Send New Order Alert to Seller
      if (sellerEmail) {
        try {
          await resend.emails.send({
            from: "zioo <hello@zioo.pl>",
            to: [sellerEmail],
            subject: `Nowe zamówienie zioo - ${orderTotal}`,
            react: NewOrderAlertEmail({
              orderId,
              customerName: customerName || "Brak danych",
              customerEmail: customerEmail || "Brak danych",
              orderTotal,
              shippingDetails: {
                line1: shippingDetails.line1 || undefined,
                line2: shippingDetails.line2 || undefined,
                city: shippingDetails.city || undefined,
                postalCode: shippingDetails.postal_code || undefined,
                country: shippingDetails.country || undefined,
              },
              lineItems: formattedLineItems,
            }),
          });
          console.log(`Sent new order alert email to ${sellerEmail}`);
        } catch (error) {
          console.error("Error sending seller alert email:", error);
        }
      }
    } else {
      console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err: any) {
    // Swallow downstream errors to ensure we return 200 to Stripe
    // and prevent Stripe from retrying continuously due to timeouts.
    console.error(`Error processing webhook event ${event.id}:`, err);
  }

  return new NextResponse("OK", { status: 200 });
}
