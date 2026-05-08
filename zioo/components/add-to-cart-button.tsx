"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product, ProductBundle } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function AddToCartButton({
  product,
  bundle,
  isListing,
}: {
  product: Product;
  bundle?: ProductBundle;
  isListing?: boolean;
}) {
  const { addToCart, setIsCartOpen } = useCart();
  const router = useRouter();

  const targetBundle = bundle || product.bundles[0];
  const hasMultipleBundles = product.bundles.length > 1;

  if (isListing && hasMultipleBundles) {
    return (
      <Button
        id="add-to-cart-button-listing"
        className="w-full text-base px-2 text-wrap whitespace-pre"
        size="lg"
        onClick={() => router.push(`/store/product/${product.id}`)}
      >
        <ShoppingCart className="size-5 flex-nowrap" />
        <span className="text-wrap whitespace-pre-wrap text-base">
          <span className="text-nowrap">Wybierz od</span>{" "}
          <span className="text-nowrap">{formatPrice(targetBundle.price)}</span>
        </span>
      </Button>
    );
  }

  return (
    <Button
      id="add-to-cart-button"
      className="w-full text-base px-2 text-wrap whitespace-pre"
      size="lg"
      onClick={() => {
        addToCart(product, targetBundle.id);
        setIsCartOpen(true);
      }}
    >
      <ShoppingCart className="size-5" />
      <span className="text-wrap whitespace-pre-wrap">
        <span className="text-nowrap">Do koszyka</span>{" "}
        <span className="text-nowrap">{formatPrice(targetBundle.price)}</span>
      </span>
    </Button>
  );
}
