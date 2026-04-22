import Stripe from "stripe";
import { sendCustomerEmail, sendSellerEmail } from "@/lib/emails";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const sessionId = (event.data.object as Stripe.Checkout.Session).id;

    // Retrieve with line_items expanded (not included in webhook payload)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    console.log(`[webhook] Processing order ${sessionId}`);

    // Fire both emails in parallel — never block on failure
    const results = await Promise.allSettled([
      sendCustomerEmail(session),
      sendSellerEmail(session),
    ]);

    for (const result of results) {
      if (result.status === "rejected") {
        console.error("[webhook] Email send failed:", result.reason);
      }
    }
  }

  return Response.json({ received: true });
}
