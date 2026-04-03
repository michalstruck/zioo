import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ProductDetails } from "@/components/product-details";
import { InterceptedModal } from "./modal";

export default async function InterceptedProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <InterceptedModal>
      <ProductDetails product={product} />
    </InterceptedModal>
  );
}
