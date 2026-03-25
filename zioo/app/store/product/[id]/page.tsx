import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ProductDetails } from "@/components/product-details";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen py-32 px-5 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="mb-10 text-sm text-muted-foreground font-mono">
        <Link href="/store" className="hover:text-primary transition-colors">&larr; Wróć do sklepu</Link>
      </div>
      <ProductDetails product={product} />
    </main>
  );
}
