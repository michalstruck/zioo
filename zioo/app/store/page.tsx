import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata = {
  title: "Zioo — Sklep",
  description: "Nasze mieszanki do aromatyzacji. Sprawdź ofertę Zioo.",
};

export default function Store() {
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
