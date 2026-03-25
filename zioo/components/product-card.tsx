import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const isTerpene = !!product.terpeneStyle;

  return (
    <Card
      className={`flex flex-col group p-4 overflow-hidden relative transition-all duration-500`}
    >
      {/* Crooked Label for Terpene products */}
      {product.terpeneStyle && (
        <div
          className="absolute -right-12 top-8 z-20 w-48 py-2 text-center transform rotate-45 shadow-lg select-none pointer-events-none"
          style={{
            backgroundColor: product.terpeneStyle.primary,
            color: product.terpeneStyle.text,
          }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            Terpene Infused
          </span>
        </div>
      )}

      <Link
        href={`/store/product/${product.id}`}
        className="block overflow-hidden relative group/link rounded-xl mt-4 mx-4 mb-2"
      >
        {product.images?.[0] ? (
          <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-muted relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover/link:scale-105"
            />
            {isTerpene && (
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity" />
            )}
          </div>
        ) : (
          <div className="aspect-4/3 w-full bg-muted rounded-xl" />
        )}
      </Link>

      <CardHeader className="space-y-1">
        <Link href={`/store/product/${product.id}`} className="block">
          <CardTitle
            className="text-3xl font-heading group-hover:text-primary transition-colors"
            style={isTerpene ? { color: product.terpeneStyle?.primary } : {}}
          >
            {product.name}
          </CardTitle>
          <p className="text-xs font-sans text-muted-foreground tracking-wide uppercase mt-1">
            {product.tagline}
          </p>
        </Link>

        {/* Hero display for Terpene */}
        {isTerpene && (
          <div
            className="mt-2 flex flex-col items-start "
            style={{
              borderColor: product.terpeneStyle?.primary,
            }}
          >
            <span
              className="text-xs font-black uppercase tracking-widest opacity-80"
              style={{ color: product.terpeneStyle?.primary }}
            >
              Profil Terpenowy
            </span>
            <span
              className="text-2xl font-heading font-black tracking-tight"
              style={{ color: product.terpeneStyle?.primary }}
            >
              {product.primaryTerpene}
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 mb-6">
        <p
          className="mb-4 text-md font-heading font-bold italic uppercase tracking-widest"
          style={
            isTerpene
              ? { color: product.terpeneStyle?.primary }
              : { color: "var(--primary)" }
          }
        >
          Receptura
        </p>
        <ul className="space-y-3">
          {product.blendProfile.map((ingredient) => (
            <li key={ingredient.herb} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-mono heading text-secondary/90">
                  {ingredient.herb}
                </span>
                <span className="text-xs font-heading font-bold opacity-70">
                  {ingredient.pct}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted/30 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${ingredient.pct}%`,
                    backgroundColor: isTerpene
                      ? product.terpeneStyle?.secondary
                      : "var(--secondary)",
                    opacity: 0.8,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-t border-border p-6 bg-muted">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
