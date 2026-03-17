import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col transition-all duration-150 hover:-translate-y-1 hover:shadow-xl">
      {/* Terpene hero strip */}
      <div className="mx-4 flex items-center justify-between rounded-lg border-2 border-border px-4 py-3 bg-secondary">
        <span className="text-xs font-bold uppercase tracking-wider text-secondary-foreground/60">
          Terpen
        </span>
        <span className="text-right text-2xl font-bold leading-none tracking-tight text-secondary-foreground md:text-3xl">
          {product.primaryTerpene}
        </span>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight md:text-3xl">
          {product.name}
        </CardTitle>
        <p className="text-sm font-medium text-muted-foreground">
          {product.tagline} · Mieszanka do aromatyzacji
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground/50">
          Skład
        </p>
        <ul className="space-y-2">
          {product.blendProfile.map((ingredient) => (
            <li key={ingredient.herb} className="flex items-center gap-3">
              <span className="text-xl font-bold tabular-nums leading-none">
                {ingredient.pct}%
              </span>
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">{ingredient.herb}</span>
                </div>
                <div className="h-2 w-full rounded-full border border-border/20 bg-muted">
                  <div
                    className="h-full rounded-full border-r border-border/30 bg-secondary"
                    style={{ width: `${ingredient.pct}%` }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-t-2">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}

export function RetroProductCard({ product }: { product: Product }) {
  return (
    <Card
      className="group flex flex-col relative transition-all duration-300 hover:shadow-xl overflow-hidden animate-in fade-in "
      style={{
        borderRadius: "45% 55% 70% 30% / 30% 30% 70% 70%",
        borderWidth: "3px",
        scale: 1.05,
      }}
    >
      <div className="scale-[0.75]">
        {/* Circular "Price" Sticker */}
        <div className="absolute -top-3 -right-3 z-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border-[3px] border-border bg-accent text-center shadow-md transition-transform group-hover:scale-110">
          <span className="font-sans text-xl font-black leading-none text-accent-foreground tracking-tighter">
            NOWE!
          </span>
        </div>

        {/* Terpene hero strip with wavy shape */}
        <div className="mx-4 -mt-4 flex items-center justify-between rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-border px-5 py-4 bg-secondary shadow-sm transition-transform group-hover:-translate-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">
            ✨ Terpen
          </span>
          <span className="text-right text-2xl font-bold italic leading-none tracking-tight text-secondary-foreground md:text-3xl">
            {product.primaryTerpene}
          </span>
        </div>

        <CardHeader className="pb-4 pt-6">
          <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl text-primary drop-shadow-[2px_2px_0px_#000]">
            {product.name}
          </CardTitle>
          <p className="text-base font-medium text-muted-foreground italic">
            {product.tagline} · Mieszanka
          </p>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/70">
            Skład botaniczny 🌱
          </p>
          <ul className="space-y-3">
            {product.blendProfile.map((ingredient) => (
              <li key={ingredient.herb} className="flex items-center gap-4">
                <span className="text-2xl font-bold tabular-nums leading-none text-primary drop-shadow-[1px_1px_0px_#000]">
                  {ingredient.pct}%
                </span>
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-base font-medium font-sans">
                      {ingredient.herb}
                    </span>
                  </div>
                  {/* Wavy pseudo progress bar */}
                  <div className="h-3 w-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-border bg-muted/50 overflow-hidden relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-secondary border-r-2 border-border transition-all duration-1000 ease-out"
                      style={{ width: `${ingredient.pct}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-6 pb-6 mt-4 border-t-[3px] border-dashed border-border bg-accent/30 relative">
          <div className="absolute -top-[1.5px] left-0 w-full h-[3px] bg-border" />
          <AddToCartButton product={product} />
        </CardFooter>
      </div>
    </Card>
  );
}
