import { CartItem } from "./cart-context";

export const LOCAL_STORAGE_KEY = "zioo-cart";

/**
 * LocalStorage wrapper to use for simple state persistence
 *
 * keep in mind JSON.parse/stringify is happening on every get/set
 *
 * */
export const LocalStorageCart = {
  get: () => {
    if (typeof window === "undefined") {
      return null;
    }
    console.debug("Getting cart from local storage");
    return JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]",
    ) as CartItem[];
  },
  set: (cart: CartItem[]) => {
    if (typeof window === "undefined") {
      return;
    }
    console.debug("Setting cart in local storage");
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  },
  clear: () => {
    if (typeof window === "undefined") {
      return;
    }
    console.debug("Clearing cart from local storage");
    return localStorage.removeItem(LOCAL_STORAGE_KEY);
  },
};
