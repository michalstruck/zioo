"use client";

import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
  const { cartCount, items } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cartCount === 0) {
      const timer = setTimeout(() => {
        if (cartCount === 0) {
          router.push("/store");
        }
      }, 1);
      return () => clearTimeout(timer);
    }
  }, [cartCount, router]);

  if (cartCount === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full border border-primary/10 bg-white shadow-sm">
          <ShoppingCart className="size-8 text-primary/30" strokeWidth={1.5} />
        </div>
        <p className="text-xl font-heading font-medium text-secondary">
          Koszyk jest pusty
        </p>
        <p className="text-sm text-secondary/80 font-sans">
          Nie dodano żadnych produktów do zamówienia.
        </p>
        <Button onClick={() => router.push("/store")} className="mt-4">
          Wróć do sklepu
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl pb-24 mx-auto">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          Kasa
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dokończ składanie zamówienia.
        </p>
      </div>
      <CheckoutForm items={items} />
    </div>
  );
}
