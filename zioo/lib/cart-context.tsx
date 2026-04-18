"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "./products";
import { LocalStorageCart } from "./local-storage";

export type CartItem = {
  product: Product;
  bundleId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  addToCart: (product: Product, bundleId: string) => void;
  removeFromCart: (productId: string, bundleId: string) => void;
  updateQuantity: (productId: string, bundleId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setItems(LocalStorageCart.get() ?? []);
  }, []);

  const addToCart = (product: Product, bundleId: string) => {
    setItems((prev) => {
      const isProductInCart = prev.find(
        (i) => i.product.id === product.id && i.bundleId === bundleId
      );
      if (isProductInCart) {
        const newCart = prev.map((i) =>
          i.product.id === product.id && i.bundleId === bundleId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        LocalStorageCart.set(newCart);
        return newCart;
      }

      const newCart = [...prev, { product, bundleId, quantity: 1 }];
      LocalStorageCart.set(newCart);
      return newCart;
    });
  };

  const removeFromCart = (productId: string, bundleId: string) => {
    setItems((prev) => {
      const newCart = prev.filter(
        (i) => !(i.product.id === productId && i.bundleId === bundleId)
      );
      LocalStorageCart.set(newCart);
      return newCart;
    });
  };

  const updateQuantity = (productId: string, bundleId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => {
        const newCart = prev.filter(
          (i) => !(i.product.id === productId && i.bundleId === bundleId)
        );
        LocalStorageCart.set(newCart);
        return newCart;
      });
      return;
    }
    setItems((prev) => {
      const newCart = prev.map((i) =>
        i.product.id === productId && i.bundleId === bundleId
          ? { ...i, quantity }
          : i,
      );
      LocalStorageCart.set(newCart);
      return newCart;
    });
  };

  const clearCart = useCallback(() => {
    setItems([]);
    LocalStorageCart.clear();
  }, []);

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
    }),
    [
      items,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
