import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata = {
  title: "Zioo — Sklep",
  description: "Nasze mieszanki do aromatyzacji. Sprawdź ofertę Zioo.",
};

export default function Store() {
  return (
    <main className="bg-blend-color bg-background relative min-h-screen">
      {/* Organic Background */}
      <div
        className="absolute inset-x-0 top-0 h-full z-0 opacity-30 mix-blend-multiply pointer-events-none bg-center transition-all duration-1000"
        style={{
          backgroundImage: "url('/floral-bg.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
        }}
      />
      {/* Gradient transition masking the bottom edge of the image */}
      <div className="absolute inset-x-0 bottom-0 h-[10vh] z-0 bg-linear-to-t from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[10vh] z-0 bg-linear-to-b from-background to-transparent pointer-events-none" />

      <section
        id="storefront"
        className="relative z-10 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl font-heading font-medium tracking-tight text-secondary md:text-5xl lg:text-6xl">
              Nasze mieszanki ziołowe
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
