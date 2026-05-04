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
      className={`justify-between group/card relative transition-all duration-500 pt-0`}
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
            Z terpenami
          </span>
        </div>
      )}
      <Link
        href={`/store/product/${product.id}`}
        className="block overflow-hidden relative"
        id={`product-card-${product.id}`}
      >
        {product.images?.[0] ? (
          <div className="aspect-4/3 w-full overflow-hidden bg-muted relative">
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
          <div className="aspect-4/3 w-full bg-muted rounded-md" />
        )}
      </Link>

      <CardHeader className="space-y-1">
        <Link href={`/store/product/${product.id}`} className="block">
          <div className="flex justify-between items-start gap-4">
            <CardTitle
              className="text-3xl font-heading group-hover:text-primary transition-colors"
              style={isTerpene ? { color: product.terpeneStyle?.primary } : {}}
            >
              {product.name}
            </CardTitle>
          </div>
          <p className="text-xs font-sans text-muted-foreground tracking-wide uppercase mt-1">
            {product.tagline}
          </p>

          {/* Hero display for Terpene */}
          {
            <div
              className="mt-2 flex flex-col items-start "
              style={{
                borderColor: product.terpeneStyle?.primary,
                opacity: isTerpene ? 1 : 0,
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
                {/* TODO: remove placeholder because i didn't want to spend time styling */}
                {product.primaryTerpene ?? "placeholder"}
              </span>
            </div>
          }
        </Link>
      </CardHeader>
      <CardFooter className="border-none pt-0">
        <AddToCartButton product={product} isListing />
      </CardFooter>
    </Card>
  );
}
