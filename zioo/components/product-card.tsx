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
		<Card className="flex flex-col transition-all duration-150 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
			{/* Terpene hero strip */}
			<div
				className="mx-4 flex items-center justify-between rounded-lg border-2 border-black px-4 py-3"
				style={{ backgroundColor: product.color }}
			>
				<span className="text-xs font-bold uppercase tracking-wider text-black/60">
					Terpen
				</span>
				<span className="text-right text-2xl font-bold leading-none tracking-tight text-black md:text-3xl">
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
						<li
							key={ingredient.herb}
							className="flex items-center gap-3"
						>
							<span className="text-xl font-bold tabular-nums leading-none">
								{ingredient.pct}%
							</span>
							<div className="flex-1">
								<div className="mb-1 flex items-center justify-between">
									<span className="text-sm font-medium">
										{ingredient.herb}
									</span>
								</div>
								<div className="h-2 w-full rounded-full border border-black/20 bg-muted">
									<div
										className="h-full rounded-full border-r border-black/30"
										style={{
											width: `${ingredient.pct}%`,
											backgroundColor: product.color,
										}}
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
