import { describe, expect, test } from "bun:test";
import {
  buildCheckoutLineItems,
  CheckoutValidationError,
} from "./checkout-utils";
import {
  PACZKOMAT_SHIPPING_COST,
  COURIER_SHIPPING_COST,
  FREE_SHIPPING_THRESHOLD,
} from "../consts";

describe("buildCheckoutLineItems", () => {
  test("successfully constructs line items for valid products under free shipping threshold", () => {
    // 3-pack of fresh is 9.99. 9.99 * 2 = 19.98 < 34.99
    const { lineItems, subtotal } = buildCheckoutLineItems(
      [
        {
          product: { id: "fresh" },
          bundleId: "3-pack",
          quantity: 2,
        },
      ],
      "inpostLocker",
    );

    expect(subtotal).toBeCloseTo(19.98);
    expect(lineItems.length).toBe(2); // 1 product + 1 shipping

    const productItem = lineItems[0];
    expect(productItem.quantity).toBe(2);
    expect(productItem.price_data?.unit_amount).toBe(999); // 9.99 * 100
    expect(productItem.price_data?.product_data?.name).toContain("fresh");
    expect(productItem.price_data?.product_data?.name).toContain("3 szt.");

    const shippingItem = lineItems[1];
    expect(shippingItem.price_data?.unit_amount).toBe(
      Math.round(PACZKOMAT_SHIPPING_COST * 100),
    );
    expect(shippingItem.price_data?.product_data?.name).toContain("Dostawa");
  });

  test("applies free shipping when subtotal is above or equal to threshold", () => {
    // 5-pack of fresh is 14.99. 14.99 * 3 = 44.97 >= 34.99
    const { lineItems, subtotal } = buildCheckoutLineItems(
      [
        {
          product: { id: "fresh" },
          bundleId: "5-pack",
          quantity: 3,
        },
      ],
      "inpostCourier",
    );

    expect(subtotal).toBeCloseTo(44.97);
    expect(subtotal).toBeGreaterThanOrEqual(FREE_SHIPPING_THRESHOLD);
    expect(lineItems.length).toBe(2); // 1 product + 1 shipping

    const shippingItem = lineItems[1];
    expect(shippingItem.price_data?.unit_amount).toBe(0);
    expect(shippingItem.price_data?.product_data?.name).toContain(
      "Darmowa dostawa: Kurier InPost",
    );
  });

  test("throws error for completely unknown product", () => {
    expect(() => {
      buildCheckoutLineItems(
        [
          {
            product: { id: "non-existent-product" },
            bundleId: "3-pack",
            quantity: 1,
          },
        ],
        "inpostLocker",
      );
    }).toThrow(CheckoutValidationError);
  });

  test("throws error for unknown bundle of a valid product", () => {
    expect(() => {
      buildCheckoutLineItems(
        [
          {
            product: { id: "fresh" },
            bundleId: "invalid-pack",
            quantity: 1,
          },
        ],
        "inpostLocker",
      );
    }).toThrow(CheckoutValidationError);
  });

  test("throws error for missing or invalid quantities", () => {
    expect(() => {
      buildCheckoutLineItems(
        [
          {
            product: { id: "fresh" },
            bundleId: "3-pack",
            quantity: 0,
          },
        ],
        "inpostLocker",
      );
    }).toThrow(CheckoutValidationError);

    expect(() => {
      buildCheckoutLineItems(
        [
          {
            product: { id: "fresh" },
            bundleId: "3-pack",
            quantity: -5,
          },
        ],
        "inpostLocker",
      );
    }).toThrow(CheckoutValidationError);
  });

  test("calculates multiple items correctly", () => {
    const { lineItems, subtotal } = buildCheckoutLineItems(
      [
        {
          product: { id: "fresh" }, // 14.99
          bundleId: "5-pack",
          quantity: 1,
        },
        {
          product: { id: "zestaw-startowy" }, // 24.99
          bundleId: "7-pack",
          quantity: 1,
        },
      ],
      "inpostCourier",
    );

    expect(subtotal).toBeCloseTo(14.99 + 24.99); // 39.98
    expect(lineItems.length).toBe(3); // 2 products + 1 shipping

    const shippingItem = lineItems[2];
    expect(shippingItem.price_data?.unit_amount).toBe(0); // Above threshold
  });
});
