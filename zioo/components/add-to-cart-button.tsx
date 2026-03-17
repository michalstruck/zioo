"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
	const { addToCart, setIsCartOpen } = useCart();

	return (
		<Button
			className="w-full text-base"
			size="lg"
			onClick={() => {
				addToCart(product);
				setIsCartOpen(true);
			}}
		>
			<ShoppingCart className="size-5" />
			Do koszyka
		</Button>
	);
}
