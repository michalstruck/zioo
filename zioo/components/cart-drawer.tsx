"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
	const { items, cartCount, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

	return (
		<Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
			{/* Header-integrated trigger */}
			<SheetTrigger asChild>
				<Button
					variant="default"
					size="lg"
					className="relative flex items-center gap-2 border-2 border-black font-bold uppercase transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
					aria-label={`Koszyk (${cartCount})`}
				>
					<ShoppingCart className="size-5" />
					<span className="hidden sm:inline">Koszyk</span>
					{cartCount > 0 && (
						<Badge className="absolute -top-3 -right-3 flex size-6 items-center justify-center rounded-full border-2 border-black bg-primary text-primary-foreground p-0 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-150 group-hover:scale-110">
							{cartCount}
						</Badge>
					)}
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="flex flex-col">
				<SheetHeader className="border-b-2 border-black pb-4">
					<SheetTitle className="text-2xl font-bold tracking-tight">
						Koszyk
						{cartCount > 0 && (
							<span className="ml-2 text-muted-foreground">
								({cartCount})
							</span>
						)}
					</SheetTitle>
				</SheetHeader>

				{/* Cart items */}
				{items.length === 0 ? (
					<div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
						<div className="flex size-16 items-center justify-center rounded-xl border-2 border-black bg-muted shadow-[var(--shadow-sm)]">
							<ShoppingCart className="size-8 text-muted-foreground" />
						</div>
						<p className="text-lg font-bold">Pusto tutaj</p>
						<p className="text-sm text-muted-foreground">
							Dodaj mieszankę, żeby zacząć
						</p>
					</div>
				) : (
					<ul className="flex-1 space-y-3 overflow-y-auto px-4">
						{items.map(({ product, quantity }) => (
							<li
								key={product.id}
								className="flex items-center gap-3 rounded-xl border-2 border-black bg-card p-3 shadow-[var(--shadow-sm)]"
							>
								{/* Color swatch */}
								<div
									className="size-10 shrink-0 rounded-lg border-2 border-black"
									style={{
										backgroundColor: product.color,
									}}
								/>

								<div className="flex-1 min-w-0">
									<p className="truncate text-sm font-bold">
										{product.name}
									</p>
									<p className="text-xs text-muted-foreground">
										{product.primaryTerpene}
									</p>
								</div>

								{/* Quantity controls */}
								<div className="flex items-center gap-1">
									<Button
										variant="outline"
										size="icon-xs"
										onClick={() =>
											updateQuantity(
												product.id,
												quantity - 1,
											)
										}
										aria-label={`Zmniejsz ilość ${product.name}`}
									>
										<Minus />
									</Button>
									<span className="w-8 text-center text-sm font-bold tabular-nums">
										{quantity}
									</span>
									<Button
										variant="outline"
										size="icon-xs"
										onClick={() =>
											updateQuantity(
												product.id,
												quantity + 1,
											)
										}
										aria-label={`Zwiększ ilość ${product.name}`}
									>
										<Plus />
									</Button>
								</div>

								<Button
									variant="ghost"
									size="icon-xs"
									onClick={() =>
										removeFromCart(product.id)
									}
									aria-label={`Usuń ${product.name}`}
								>
									<Trash2 className="text-destructive" />
								</Button>
							</li>
						))}
					</ul>
				)}

				{/* Footer with checkout button */}
				{items.length > 0 && (
					<SheetFooter className="border-t-2 border-black p-4">
						<Button
							size="lg"
							className="h-14 w-full text-lg font-bold"
						>
							Zamów
						</Button>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	);
}
