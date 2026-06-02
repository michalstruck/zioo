import { Resend } from "resend";
import type Stripe from "stripe";
import { formatPrice } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "zioo <zamowienia@zioo.pl>";
const SELLER_EMAIL = process.env.SELLER_EMAIL ?? "zamowienia@zioo.pl";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type OrderData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  shippingMethod: "inpostLocker" | "inpostCourier";
  shippingLabel: string;
  shippingAddress: string;
  products: { name: string; quantity: number; total: number }[];
  shippingCost: number;
  orderTotal: number;
  paymentId: string;
};

function extractOrderData(session: Stripe.Checkout.Session): OrderData {
  const meta = session.metadata ?? {};
  const lineItems = session.line_items?.data ?? [];

  const products = lineItems
    .filter((li) => !li.description?.startsWith("Dostawa:"))
    .map((li) => ({
      name: li.description ?? "Produkt",
      quantity: li.quantity ?? 1,
      total: (li.amount_total ?? 0) / 100,
    }));

  const shippingItem = lineItems.find((li) =>
    li.description?.startsWith("Dostawa:"),
  );

  const shippingMethod = (meta.shippingMethod ?? "inpostLocker") as
    | "inpostLocker"
    | "inpostCourier";

  const shippingLabel =
    shippingMethod === "inpostLocker" ? "Paczkomat 24/7" : "Kurier InPost";

  const shippingAddress =
    shippingMethod === "inpostLocker"
      ? `${meta.pointName ?? ""}, ${meta.pointAddress ?? ""}`
      : `${meta.street ?? ""}, ${meta.zip ?? ""} ${meta.city ?? ""}`;

  return {
    email: session.customer_email ?? session.customer_details?.email ?? "",
    firstName: meta.firstName ?? "",
    lastName: meta.lastName ?? "",
    phone: meta.phone ?? "",
    shippingMethod,
    shippingLabel,
    shippingAddress,
    products,
    shippingCost: shippingItem ? (shippingItem.amount_total ?? 0) / 100 : 0,
    orderTotal: (session.amount_total ?? 0) / 100,
    paymentId:
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : (session.payment_intent?.id ?? session.id),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

import { OrderConfirmationEmail } from "@/components/emails/order-confirmation";
import { NewOrderAlertEmail } from "@/components/emails/new-order-alert";

export async function sendCustomerEmail(
  session: Stripe.Checkout.Session,
): Promise<void> {
  const order = extractOrderData(session);
  if (!order.email) {
    console.warn("[email] No customer email — skipping customer email");
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: order.email,
      subject: "Potwierdzenie zamówienia — zioo",
      react: (
        <OrderConfirmationEmail
          customerName={order.firstName}
          orderTotal={formatPrice(order.orderTotal)}
          lineItems={order.products.map((p) => ({
            description: p.name,
            quantity: p.quantity,
          }))}
        />
      ),
    });
    console.log(`[email] Customer confirmation sent to ${order.email}`);
  } catch (err) {
    console.error("[email] Failed to send customer email:", err);
  }
}

export async function sendSellerEmail(
  session: Stripe.Checkout.Session,
): Promise<void> {
  const order = extractOrderData(session);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: SELLER_EMAIL,
      subject: `Nowe zamówienie — ${order.firstName} ${order.lastName}`,
      react: (
        <NewOrderAlertEmail
          orderId={order.paymentId}
          customerName={`${order.firstName} ${order.lastName}`}
          customerEmail={order.email}
          orderTotal={formatPrice(order.orderTotal)}
          shippingDetails={{
            line1: order.shippingAddress,
          }}
          lineItems={order.products.map((p) => ({
            description: p.name,
            quantity: p.quantity,
            amountTotal: formatPrice(p.total),
          }))}
        />
      ),
    });
    console.log(`[email] Seller notification sent to ${SELLER_EMAIL}`);
  } catch (err) {
    console.error("[email] Failed to send seller email:", err);
  }
}
