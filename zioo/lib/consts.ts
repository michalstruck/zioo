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
