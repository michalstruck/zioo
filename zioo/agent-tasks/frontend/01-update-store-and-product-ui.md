# Epic: Dynamic Product Bundles - Frontend & UI

## Context
Following the data model pivot to bundle sizes, the UI needs to be updated. The listing page should show base products, and the product details page should allow selecting the desired bundle (3-pack, 5-pack, or 7-pack).
This epic details the changes required to the frontend components and cart logic to support this pivot. Ensure that the design context in `design-system/zioo` is strictly followed.

## Features & Tasks

### Feature 1: Update Product Cards & Store Page
- **Task 1: Simplify Store Listing**
  - Modify `components/product-card.tsx` and `app/(main)/store/page.tsx` to iterate only over base products.
  - Display the starting price (e.g., "od 6.99 PLN" / "from 6.99 PLN") instead of a static price if multiple bundles exist.
- **Task 2: Update Add-to-Cart from Listing (If Applicable)**
  - If users can add to cart directly from the listing, either default to the 3-pack or prompt them to select a size (redirecting to the product page is often best).

### Feature 3: Revamp Product Details Page
- **Task 1: Bundle Selection UI**
  - On `app/(main)/store/product/[id]/page.tsx` (and the modal equivalent `app/(main)/store/@modal/(.)product/[id]/page.tsx`), introduce a UI element (e.g., toggle buttons, radio group, or pill selectors) to choose the bundle size (3-pack, 5-pack, etc.).
  - Follow the existing design system (`design-system/zioo`) to ensure the size selector is clean, minimalist, and accessible. Use the `page-cro` skill to ensure optimal conversion and UX.
- **Task 2: Dynamic Price Update**
  - When the user selects a different bundle size, dynamically update the displayed price on the page.

### Feature 4: Update Cart Context and Add-to-Cart Button
- **Task 1: Modify `addToCart` Payload**
  - Update `lib/cart-context.tsx` and `components/add-to-cart-button.tsx` so that `addToCart` accepts the base product AND the selected `bundleSize`.
  - Ensure the cart groups identical products with the same bundle size together, but separates different sizes of the same product.
- **Task 2: Cart UI Enhancements**
  - Update the Cart slide-out/modal to display the selected bundle size next to the product name.
  - Ensure the price displayed in the cart correctly reflects the selected bundle's price.
