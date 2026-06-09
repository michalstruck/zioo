import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PRODUCT_ID } from "./lib/products";

const VALID_PRODUCT_IDS = Object.values(PRODUCT_ID);

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  // We only intercept requests to the root path '/' that have the 'label' query parameter.
  if (searchParams.has("label") && pathname === "/") {
    const label = searchParams.get("label") || "";
    let matchedProductId: string | null = null;
    for (const productId of VALID_PRODUCT_IDS) {
      if (productId === PRODUCT_ID.discoveryPack) {
        continue;
      }
      if (label === productId) {
        matchedProductId = productId;
        break;
      }
    }

    if (matchedProductId) {
      // 302 Redirect to the dedicated product education page
      const redirectUrl = new URL(`/produkt/${matchedProductId}`, request.url);
      return NextResponse.redirect(redirectUrl, 302);
    } else {
      // 302 Redirect to the fallback store page for unknown labels
      const redirectUrl = new URL("/store", request.url);
      return NextResponse.redirect(redirectUrl, 302);
    }
  }

  return NextResponse.next();
}

// Only match the root route '/'
export const config = {
  matcher: "/",
};
