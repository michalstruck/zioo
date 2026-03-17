import { ProductCard, RetroProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export function DefaultStore() {
  return (
    <main className="bg-background">
      <section
        id="storefront"
        className="px-5 py-[var(--space-2xl)] md:px-12 md:py-[var(--space-3xl)] lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-2 w-fit rounded-lg border-2 border-black bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-[var(--shadow-sm)]">
              Mieszanka do aromatyzacji
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Nasze mieszanki
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function RetroStore() {
  return (
    <main className="bg-background relative overflow-hidden min-h-[80vh]">
      {/* Lava Lamp Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-secondary/30 mix-blend-multiply blur-3xl animate-[blob_18s_infinite_alternate] drop-shadow-xl" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-accent/40 mix-blend-multiply blur-3xl animate-[blob_20s_infinite_alternate-reverse_2s] drop-shadow-xl" />
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-[50%_50%_70%_30%/30%_50%_50%_70%] bg-primary/20 mix-blend-multiply blur-3xl animate-[blob_25s_infinite_alternate_4s] drop-shadow-xl" />
      </div>

      <section
        id="storefront"
        className="relative z-10 px-5 py-[var(--space-2xl)] md:px-12 md:py-[var(--space-3xl)] lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <p className="mx-auto md:mx-0 mb-4 w-fit rounded-[2rem] border-2 border-border bg-accent px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-sm text-accent-foreground transform -rotate-2">
              ☀️ Mieszanki botaniczne
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl text-primary drop-shadow-[3px_3px_0px_#000]">
              Pełen relaks.<br className="md:hidden" /> <span className="italic text-foreground">Wybierz swój vibe.</span>
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 pb-10">
            {products.map((product) => (
              <RetroProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
