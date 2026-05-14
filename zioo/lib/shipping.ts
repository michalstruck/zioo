import {
  FREE_SHIPPING_THRESHOLD,
  PACZKOMAT_SHIPPING_COST,
  COURIER_SHIPPING_COST,
  SHIPPING_METHOD,
} from "./consts";

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
