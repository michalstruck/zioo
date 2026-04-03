"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function CartDrawer() {
  const {
    items,
    cartCount,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const path = usePathname();

  const subtotal = items.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0,
  );

  // show only on store page when empty
  if (cartCount === 0 && path !== "/store") return null;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      {/* Header-integrated trigger */}
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="relative w-8 sm:w-auto"
          aria-label={`Koszyk (${cartCount})`}
        >
          <ShoppingCart className="size-4" />
          <span className="hidden sm:inline font-sans text-xs uppercase tracking-widest font-bold">
            Koszyk
          </span>
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full border border-white/20 bg-secondary text-white p-0 text-[10px] font-bold shadow-md transition-organic group-hover:scale-110">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col bg-background border-l border-border/10 p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border/5 px-6 py-6">
          <SheetTitle className="text-3xl font-heading font-medium tracking-tight text-secondary">
            Koszyk
            {cartCount > 0 && (
              <span className="ml-3 text-sm font-sans font-normal text-muted-foreground/60 italic lowercase">
                — {cartCount} sztuk
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Cart items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex size-20 items-center justify-center rounded-full border border-primary/10 bg-white shadow-sm">
              <ShoppingCart
                className="size-8 text-primary/30"
                strokeWidth={1.5}
              />
            </div>
            <p className="text-xl font-heading font-medium text-secondary">
              Twój koszyk jest pusty
            </p>
            <p className="text-sm text-secondary/80 font-sans">
              Wybierz jedną z naszych botanicznych mieszanek, aby zacząć.
            </p>
          </div>
        ) : (
          <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex items-center gap-4 rounded-2xl border border-border/20 bg-white p-4 shadow-sm transition-organic hover:shadow-md"
              >
                {/* Color swatch - Botanical Icon placeholder */}
                <div
                  className="size-12 shrink-0 rounded-full border border-black/5 flex items-center justify-center"
                  style={{
                    backgroundColor: `${product.color}15`,
                  }}
                >
                  <div
                    className="size-3 rounded-full"
                    style={{ backgroundColor: product.color }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="truncate text-base font-heading font-medium text-secondary">
                    {product.name}
                  </p>
                  <p className="text-xs font-sans text-primary/60 italic">
                    {product.primaryTerpene}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm font-heading font-bold text-secondary px-1">
                    {formatPrice(product.price * quantity)}
                  </span>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1 bg-muted/30 rounded-full p-1 border border-border/5">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="rounded-full size-7 hover:bg-white"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label={`Zmniejsz ilość ${product.name}`}
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="w-6 text-center text-xs font-bold font-mono">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="rounded-full size-7 hover:bg-white"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label={`Zwiększ ilość ${product.name}`}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="rounded-full size-8 text-destructive/40 hover:text-destructive hover:bg-destructive/5"
                  onClick={() => removeFromCart(product.id)}
                  aria-label={`Usuń ${product.name}`}
                >
                  <Trash2 className="size-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}

        {/* Footer with checkout button */}
        {items.length > 0 && (
          <SheetFooter className="border-t border-border/10 p-6 bg-white flex-col sm:flex-col sm:space-x-0 gap-4">
            <div className="flex w-full items-center justify-between px-2">
              <span className="text-sm font-sans uppercase tracking-widest font-bold text-secondary/80">
                Wartość zamówienia
              </span>
              <span className="text-2xl font-heading font-black text-secondary whitespace-nowrap">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Button size="lg" className="text-lg shadow-md">
              Do kasy
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
