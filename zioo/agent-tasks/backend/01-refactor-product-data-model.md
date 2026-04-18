# Epic: Dynamic Product Bundles - Backend & Data Model

## Context
We are pivoting from listing every bundle size as a separate product to grouping them under a single base product. 
Users will select the size (e.g., 3-pack, 5-pack, or a 7-pack Discovery Pack) on the product page.
This epic details the changes required to the base data model and checkout API to support this.

## Features & Tasks

### Feature 1: Refactor `lib/products.ts` Data Model
- **Task 1: Define Bundle Types and Prices**
  - Update the `Product` type to hold base product information and an array or map of available `bundles`.
  - A bundle should define its `size` (e.g., 3, 5, 7), `price`, and possibly a specific `id` or `sku` suffix.
- **Task 2: Merge Existing Products**
  - Consolidate the duplicated 3-pack and 5-pack products into single product entries (e.g., one "Sleep" product, one "Chill" product).
  - Add the "Discovery Pack" containing 7 packs (one of each type) as a unique product or a special bundle option.
- **Task 3: Update Helper Functions**
  - Ensure any helper functions retrieving products or prices by ID are updated to handle the new bundle structure.

### Feature 2: Update Checkout Logic (`app/api/checkout/route.ts`)
- **Task 1: Validate Selected Bundle**
  - The incoming checkout payload will now include a selected `bundleSize` alongside the `productId`. Update server-side validation to verify that the requested bundle exists for the given product.
- **Task 2: Correct Price Calculation**
  - Calculate `unit_amount` for Stripe line items based on the selected bundle's price, not the base product price.
  - Ensure the Subtotal computation accurately references the specific bundle's price.
- **Task 3: Enhance Stripe Line Item Descriptions**
  - Append the bundle size to the Stripe product name (e.g., "Sleep - 5-pack") so that order receipts are descriptive and fulfillment knows what to pack.
