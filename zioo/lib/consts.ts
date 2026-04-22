export const FREE_SHIPPING_THRESHOLD = 34.99;
export const PACZKOMAT_SHIPPING_COST = 13.99;
export const COURIER_SHIPPING_COST = 16.99;
export const SHIPPING_METHOD = {
  inpostLocker: "inpostLocker",
  inpostCourier: "inpostCourier",
} as const;

export const SHIPPING_COST: Record<
  (typeof SHIPPING_METHOD)[keyof typeof SHIPPING_METHOD],
  number
> = {
  [SHIPPING_METHOD.inpostLocker]: PACZKOMAT_SHIPPING_COST,
  [SHIPPING_METHOD.inpostCourier]: COURIER_SHIPPING_COST,
};

export const getIsFreeShipping = (subtotal: number): boolean =>
  subtotal >= FREE_SHIPPING_THRESHOLD;

function assertUnreachable(x: never): never {
  throw new Error("Unreachable switch condition");
}

/** returns number with 2 decimals */
export const calculateShippingCost = (
  shippingMethod: keyof typeof SHIPPING_METHOD,
  subtotal: number,
): number => {
  if (getIsFreeShipping(subtotal)) {
    return 0;
  }
  switch (shippingMethod) {
    case "inpostLocker":
      return PACZKOMAT_SHIPPING_COST;
    case "inpostCourier":
      return COURIER_SHIPPING_COST;
    default: {
      return assertUnreachable(shippingMethod);
    }
  }
};
