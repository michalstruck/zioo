"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart-context";
import { DesignProvider, type DesignTheme } from "@/lib/design-context";

export function Providers({
	initialDesign,
	children,
}: {
	initialDesign?: DesignTheme;
	children: ReactNode;
}) {
	return (
		<DesignProvider initialDesign={initialDesign}>
			<CartProvider>{children}</CartProvider>
		</DesignProvider>
	);
}
