import { redirect } from "next/navigation";
import Stripe from "stripe";
import Link from "next/link";
import { CheckCircle2, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartClear } from "@/components/checkout/cart-clear";
import { formatPrice } from "@/lib/utils";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/store");
  }

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items"],
    });
  } catch {
    redirect("/store");
  }

  if (session.payment_status !== "paid") {
    redirect("/store");
  }

  const lineItems = session.line_items?.data ?? [];
  const shippingMethod = session.metadata?.shippingMethod;
  const email = session.customer_email ?? session.customer_details?.email;

  // Separate product items from shipping line item
  const productItems = lineItems.filter(
    (item) => !item.description?.startsWith("Dostawa:"),
  );
  const shippingItem = lineItems.find((item) =>
    item.description?.startsWith("Dostawa:"),
  );

  const shippingLabel =
    shippingMethod === "inpost" ? "Paczkomat 24/7" : "Kurier InPost";

  return (
    <div className="container max-w-2xl py-12 md:py-24 mx-auto flex flex-col items-center px-4">
      <CartClear />

      {/* Success icon */}
      <div className="size-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="size-10" />
      </div>

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2 text-center">
        Dziękujemy za zamówienie! 🎉
      </h1>

      {email && (
        <p className="text-muted-foreground mb-8 text-center">
          Potwierdzenie wysłane na{" "}
          <span className="font-medium text-secondary">{email}</span>
        </p>
      )}

      {/* Order summary card */}
      <div className="w-full rounded-2xl border border-primary/10 bg-white shadow-sm p-6 mb-8">
        <h2 className="font-heading text-lg font-semibold text-secondary mb-4">
          Podsumowanie zamówienia
        </h2>

        {/* Products */}
        <div className="space-y-3 mb-4">
          {productItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <Package className="size-4 text-muted-foreground/60 shrink-0" />
                <span className="text-secondary">
                  {item.description}
                  {(item.quantity ?? 1) > 1 && (
                    <span className="text-muted-foreground ml-1">
                      × {item.quantity}
                    </span>
                  )}
                </span>
              </div>
              <span className="font-medium text-secondary tabular-nums">
                {formatPrice((item.amount_total ?? 0) / 100)}
              </span>
            </div>
          ))}
        </div>

        <hr className="border-primary/10 my-4" />

        {/* Shipping */}
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center gap-2">
            <Truck className="size-4 text-muted-foreground/60 shrink-0" />
            <span className="text-muted-foreground">{shippingLabel}</span>
          </div>
          <span className="font-medium text-secondary tabular-nums">
            {shippingItem
              ? formatPrice((shippingItem.amount_total ?? 0) / 100)
              : "Darmowa"}
          </span>
        </div>

        <hr className="border-primary/10 my-4" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="font-heading font-semibold text-secondary">
            Łącznie
          </span>
          <span className="font-heading text-xl font-bold text-secondary tabular-nums">
            {formatPrice((session.amount_total ?? 0) / 100)}
          </span>
        </div>
      </div>

      <Link href="/store">
        <Button size="lg" className="rounded-full shadow-md font-bold px-8">
          Wróć do sklepu
        </Button>
      </Link>
    </div>
  );
}
