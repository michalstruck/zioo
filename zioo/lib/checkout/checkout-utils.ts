import { products } from "@/lib/products";
import { SHIPPING_METHOD } from "@/lib/consts";
import { calculateShippingCost } from "../shipping";

const productMap = new Map(products.map((p) => [p.id, p]));

/**
 * @param path path with file extension
 * @returns absolute URL to image
 */
const getPublicImageUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/images/${path}`;

export class CheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutValidationError";
  }
}

export function buildCheckoutLineItems(
  items: Array<{
    product: { id: string };
    bundleId: string;
    quantity: number;
  }>,
  shippingMethod: keyof typeof SHIPPING_METHOD,
): { lineItems: any[]; subtotal: number } {
  const lineItems: any[] = [];
  let subtotal = 0;

  for (const item of items) {
    const product = productMap.get(item.product.id as any);
    if (!product) {
      throw new CheckoutValidationError(`Unknown product: ${item.product.id}`);
    }

    const bundle = product.bundles.find((b) => b.id === item.bundleId);
    if (!bundle) {
      throw new CheckoutValidationError(
        `Unknown bundle: ${item.bundleId} for product: ${item.product.id}`,
      );
    }

    if (
      typeof item.quantity !== "number" ||
      isNaN(item.quantity) ||
      item.quantity <= 0
    ) {
      throw new CheckoutValidationError(
        `Invalid quantity for product: ${item.product.id}`,
      );
    }

    subtotal += Math.round(bundle.price * item.quantity * 100) / 100;

    lineItems.push({
      price_data: {
        currency: "pln",
        product_data: {
          name:
            `${product.name} ${
              product.primaryTerpene ? `(${product.primaryTerpene})` : ""
            }`.trim() + ` ${bundle.size} szt.`,
          images: [
            // TODO actual images
            getPublicImageUrl("clear_mind_blend.png"),
            getPublicImageUrl("clear_mind_blend.png"),
          ],
        },
        unit_amount: Math.round(bundle.price * 100),
      },
      quantity: item.quantity,
      metadata: {
        zioo_product_id: product.id,
        zioo_bundle_id: bundle.id,
      },
    });
  }

  const shippingCost = calculateShippingCost(shippingMethod, subtotal);

  if (shippingCost > 0) {
    lineItems.push({
      price_data: {
        currency: "pln",
        product_data: {
          name: `Dostawa: ${
            shippingMethod === SHIPPING_METHOD.inpostLocker
              ? "Paczkomat 24/7"
              : "Kurier InPost"
          }`,
        },
        unit_amount: Math.round(shippingCost * 100),
      },
      quantity: 1,
    });
  } else {
    lineItems.push({
      price_data: {
        currency: "pln",
        product_data: {
          name: `Darmowa dostawa: ${
            shippingMethod === SHIPPING_METHOD.inpostLocker
              ? "Paczkomat 24/7"
              : "Kurier InPost"
          }`,
        },
        unit_amount: 0,
      },
      quantity: 1,
    });
  }

  return { lineItems, subtotal };
}
