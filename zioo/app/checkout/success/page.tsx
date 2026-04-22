import { redirect } from "next/navigation";
import Stripe from "stripe";
import Link from "next/link";
import { CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartClear } from "@/components/checkout/cart-clear";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { products } from "@/lib/products";

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

  // TODO very fragile code
  const shippingItem = lineItems.find((item) =>
    item.description?.startsWith("Dostawa:"),
  );

  const shippingLabel =
    shippingMethod === "inpostLocker" ? "Paczkomat 24/7" : "Kurier InPost";

  return (
    <div className="container max-w-2xl mx-auto flex flex-col items-center px-4 mb-24">
      <CartClear />

      {/* Success icon */}
      <div className="size-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="size-10" />
      </div>

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center">
        Dziękujemy za zamówienie! <br /> 🎉
      </h1>

      {email && (
        <p className="text-foreground mb-10 text-center md:text-lg text-md">
          Potwierdzenie wysłane na{" "}
          <span className="font-medium text-secondary">{email}</span>
        </p>
      )}

      {/* Order summary card */}
      <div className="w-full rounded-2xl border border-primary/10 bg-white shadow-sm p-6 mb-8">
        <h2 className="font-heading text-lg font-semibold text-secondary mb-4">
          Podsumowanie
        </h2>

        {/* Products */}
        <div className="space-y-3 mb-4">
          <ul
            className="space-y-4 mb-6 ps-0.5"
            style={{ paddingInlineStart: "0.125rem" }}
          >
            {productItems.map((item) => {
              const productId = item.metadata?.zioo_product_id;
              const bundleId = item.metadata?.zioo_bundle_id;

              const product = products.find((p) => p.id === productId);
              if (!product) return null;

              const bundle = product.bundles.find((b) => b.id === bundleId);
              if (!bundle) return null;

              return (
                <li
                  key={`${productId}-${bundleId}`}
                  className="flex items-center gap-4"
                >
                  <div className="hidden xs:flex size-12 overflow-hidden rounded-full border border-black/5 items-center justify-center bg-muted/20">
                    <Image
                      src={product.images?.[0]}
                      alt={product.name}
                      width={128}
                      height={128}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="truncate text-base font-heading font-medium text-secondary"
                      style={
                        product.terpeneStyle?.primary
                          ? { color: product.terpeneStyle.primary }
                          : {}
                      }
                    >
                      {product.name}
                    </p>
                    <p
                      className="text-xs font-sans text-primary/60 italic text-wrap whitespace-pre-wrap"
                      style={
                        product.terpeneStyle?.primary
                          ? { color: product.terpeneStyle.primary }
                          : {}
                      }
                    >
                      {product.primaryTerpene}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity} &times; {bundle.size} szt.
                    </p>
                  </div>
                  <div className="font-semibold text-sm whitespace-nowrap">
                    {formatPrice(bundle.price * (item?.quantity ?? 0))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <hr className="border-primary/30 my-2" />

        {/* Shipping */}
        <div className="grid grid-cols-4 items-center justify-between text-sm mb-3">
          <div className="col-span-2 flex gap-2 items-end">
            <Truck className="size-6 text-muted-foreground/60" />
            <span className="text-muted-foreground">{shippingLabel}</span>
          </div>
          {shippingItem ? (
            <span className="col-span-2 justify-self-end font-medium text-base text-secondary">
              {formatPrice((shippingItem.amount_total ?? 0) / 100)}
            </span>
          ) : (
            <span className="col-span-2 justify-self-end font-medium text-base text-green-600">
              Darmowa
            </span>
          )}
        </div>

        <hr className="border-primary/30 my-2" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-secondary">
            Razem (PLN)
          </span>
          <span className="font-heading text-xl font-bold text-secondary tabular-nums">
            {formatPrice((session.amount_total ?? 0) / 100)}
          </span>
        </div>
      </div>

      <Link href="/store">
        <Button size="lg" className="px-8">
          Wróć do sklepu
        </Button>
      </Link>
    </div>
  );
}
