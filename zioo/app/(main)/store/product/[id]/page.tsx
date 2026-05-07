import { notFound } from "next/navigation";
import { Product, products } from "@/lib/products";
import { ProductDetails } from "@/components/product-details";
import Link from "next/link";
import type { Metadata } from "next";

const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Produkt nieznaleziony | zioo",
      description: "Nie znaleziono produktu w sklepie zioo.",
    };
  }

  return {
    title: `${product.name} | zioo - mieszanki ziołowe premium`,
    description:
      product.subheadline ||
      `Odkryj blend ${product.name} od zioo. Mieszanka ziołowa z profilem terpenowym.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-dvh py-16 px-5 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="mb-10 text-sm text-muted-foreground font-mono">
        <Link href="/store" className="hover:text-primary transition-colors">
          &larr; Wróć do sklepu
        </Link>
      </div>
      <ProductDetails product={product} />
    </main>
  );
}
