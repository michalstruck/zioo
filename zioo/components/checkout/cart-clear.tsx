"use client";

import { useCart } from "@/lib/cart-context";
import { useEffect, useRef } from "react";

/** Clears the cart once on mount after a successful checkout. */
export function CartClear() {
  const { clearCart } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    if (!cleared.current) {
      clearCart();
      cleared.current = true;
    }
  }, [clearCart]);

  return null;
}
