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
import Link from "next/link";
import Image from "next/image";

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

  const subtotal = items.reduce((acc, { product, bundleId, quantity }) => {
    const bundle =
      product.bundles.find((b) => b.id === bundleId) || product.bundles[0];
    return acc + bundle.price * quantity;
  }, 0);

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
          <ul className=" space-y-4 overflow-y-auto px-6 py-6">
            {items.map(({ product, bundleId, quantity }) => {
              const bundle =
                product.bundles.find((b) => b.id === bundleId) ||
                product.bundles[0];
              return (
                <li
                  key={`${product.id}-${bundleId}`}
                  className="flex items-center gap-4 p-2 rounded-sm border border-border/20 bg-white  shadow-sm transition-organic hover:shadow-md"
                >
                  <div className="hidden sm:flex size-12 md:size-24 overflow-hidden rounded-full border border-black/5 items-center justify-center bg-muted/20">
                    <Image
                      src={product.images?.[0]}
                      alt={product.name}
                      width={128}
                      height={128}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="truncate text-base font-heading font-medium text-secondary">
                      {product.name}
                    </p>
                    <p className="text-xs font-sans text-primary/80 font-bold mb-1">
                      {bundle.size}-pack
                    </p>
                    <p className="text-xs font-sans text-primary/60 italic text-wrap whitespace-pre-wrap">
                      {product.primaryTerpene}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 mr-4">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-muted/50 rounded-full border border-border/5">
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="hover:bg-primary/30 bg-primary/20"
                        onClick={() =>
                          updateQuantity(product.id, bundleId, quantity - 1)
                        }
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
                        className="hover:bg-primary/30 bg-primary/20"
                        onClick={() =>
                          updateQuantity(product.id, bundleId, quantity + 1)
                        }
                        aria-label={`Zwiększ ilość ${product.name}`}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                    <span className="text-sm font-heading font-bold text-secondary text-nowrap">
                      {formatPrice(bundle.price * quantity)}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon-xs"
                    className="text-destructive/60 hover:text-destructive hover:bg-destructive/10 self-start"
                    onClick={() => removeFromCart(product.id, bundleId)}
                    aria-label={`Usuń ${product.name}`}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </li>
              );
            })}
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
            <Button size="lg" className="text-lg shadow-md" asChild>
              <Link href="/checkout" prefetch>
                Do kasy
              </Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
