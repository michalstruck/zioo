"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <Button
      className="w-full text-base px-2 text-wrap whitespace-pre"
      size="lg"
      onClick={() => {
        addToCart(product);
        setIsCartOpen(true);
      }}
    >
      <ShoppingCart className="size-5" />
      <span className="text-wrap whitespace-pre-wrap">
        <span className="text-nowrap">Do koszyka</span>{" "}
        <span className="text-nowrap">{formatPrice(product.price)}</span>
      </span>
    </Button>
  );
}
