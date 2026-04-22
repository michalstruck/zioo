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
// Email HTML builders
// ---------------------------------------------------------------------------

function customerEmailHtml(order: OrderData): string {
  const productRows = order.products
    .map(
      (p) => `
      <tr>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0">${p.name}${p.quantity > 1 ? ` × ${p.quantity}` : ""}</td>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;text-align:right;white-space:nowrap">${formatPrice(p.total)}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafaf8;font-family:system-ui,-apple-system,sans-serif;color:#1a1a1a">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px">
    <h1 style="font-size:20px;font-weight:700;margin:0 0 4px">zioo</h1>
    <p style="color:#888;font-size:13px;margin:0 0 32px">Potwierdzenie zamówienia</p>

    <p style="font-size:16px;margin:0 0 24px">Cześć <strong>${order.firstName}</strong>, dziękujemy za zamówienie! 🎉</p>

    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${productRows}
      <tr>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666">${order.shippingLabel}</td>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;text-align:right;white-space:nowrap">${order.shippingCost > 0 ? formatPrice(order.shippingCost) : "Darmowa"}</td>
      </tr>
      <tr>
        <td style="padding:12px 0;font-weight:700;font-size:16px">Razem</td>
        <td style="padding:12px 0;font-weight:700;font-size:16px;text-align:right;white-space:nowrap">${formatPrice(order.orderTotal)}</td>
      </tr>
    </table>

    <div style="margin:24px 0;padding:16px;background:#f5f5f0;border-radius:8px;font-size:13px">
      <strong>Adres dostawy:</strong><br>${order.shippingAddress}
    </div>

    <p style="font-size:13px;color:#888;margin:32px 0 0">Jeśli masz pytania, odpowiedz na tego maila.</p>
  </div>
</body>
</html>`;
}

function sellerEmailHtml(order: OrderData): string {
  const productRows = order.products
    .map(
      (p) =>
        `<tr><td style="padding:4px 8px">${p.name}</td><td style="padding:4px 8px;text-align:center">${p.quantity}</td><td style="padding:4px 8px;text-align:right">${formatPrice(p.total)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;font-family:monospace;font-size:14px;background:#fff;color:#1a1a1a">
  <h2 style="margin:0 0 16px">Nowe zamówienie 🛒</h2>

  <table style="border-collapse:collapse;font-size:13px;margin-bottom:16px">
    <tr><td style="padding:2px 8px;color:#888">Klient:</td><td style="padding:2px 8px">${order.firstName} ${order.lastName}</td></tr>
    <tr><td style="padding:2px 8px;color:#888">Email:</td><td style="padding:2px 8px">${order.email}</td></tr>
    <tr><td style="padding:2px 8px;color:#888">Telefon:</td><td style="padding:2px 8px">${order.phone || "—"}</td></tr>
    <tr><td style="padding:2px 8px;color:#888">Wysyłka:</td><td style="padding:2px 8px">${order.shippingLabel}</td></tr>
    <tr><td style="padding:2px 8px;color:#888">Adres:</td><td style="padding:2px 8px">${order.shippingAddress}</td></tr>
    <tr><td style="padding:2px 8px;color:#888">Payment ID:</td><td style="padding:2px 8px;font-family:monospace">${order.paymentId}</td></tr>
  </table>

  <table style="width:100%;border-collapse:collapse;font-size:13px;border:1px solid #eee">
    <thead><tr style="background:#f5f5f5"><th style="padding:6px 8px;text-align:left">Produkt</th><th style="padding:6px 8px;text-align:center">Ilość</th><th style="padding:6px 8px;text-align:right">Kwota</th></tr></thead>
    <tbody>
      ${productRows}
      <tr><td style="padding:4px 8px;color:#888">Dostawa</td><td></td><td style="padding:4px 8px;text-align:right">${order.shippingCost > 0 ? formatPrice(order.shippingCost) : "Darmowa"}</td></tr>
    </tbody>
    <tfoot><tr style="border-top:2px solid #1a1a1a"><td colspan="2" style="padding:8px;font-weight:700">Razem</td><td style="padding:8px;text-align:right;font-weight:700">${formatPrice(order.orderTotal)}</td></tr></tfoot>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

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
      html: customerEmailHtml(order),
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
      html: sellerEmailHtml(order),
    });
    console.log(`[email] Seller notification sent to ${SELLER_EMAIL}`);
  } catch (err) {
    console.error("[email] Failed to send seller email:", err);
  }
}
