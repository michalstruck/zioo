# Product Context
Shopping must be fast and frictionless. Big visual emphasis on product composition and terpenes. Since there is no backend, all product data is stored locally.
**CRITICAL: All UI implementations MUST strictly adhere to the guidelines defined in `.impeccable.md`. Rely on the core shadcn/ui components instantiated in step 01.**

*   **Epic: Micro-Storefront Experience**
    *   **Feature: Hardcoded Product Data**
        *   [ ] Task: Define the schema for products on the frontend (id, name, blend_profile, primary_terpene).
        *   [ ] Task: Hardcode data for "Deep Unwind" (20% Damiana, 45% Dziewanna Liść, 20% Malina Liść, 15% Melisa, Terpene: Purple Punch).
        *   [ ] Task: Hardcode data for "Social Spark" (10% Róża Kwiat, 45% Dziewanna, 10% Lawenda Kwiat, 25% Prawoślaz Liść, 10% Rumianek Kwiat, Terpene: GSC).
        *   [ ] Task: Hardcode data for "Clear Mind" (15% Mięta, 40% Dziewanna, 20% Pokrzywa, 25% Malina Liść, Terpene: Lemon Skunk).
    *   **Feature: Product Grid & Cards**
        *   [ ] Task: Implement the storefront layout grid respecting the large block-based section gap tokens from `.impeccable.md`. Use `@frontend-design` for distinct grid composition.
        *   [ ] Task: Build display cards for the three distinct blends using the bespoke neo-brutalist shadcn Card component (border-2, hard shadows).
        *   [ ] Task: Render punchy stats on the cards. Feature composition percentages prominently.
        *   [ ] Task: Highlight terpene profiles using massive typography (Space Grotesk). Use `@colorize` if accent colors are needed.
        *   [ ] Task: Add an action button (shadcn/ui neo-brutalist Button) to add the product to the cart.
    *   **Feature: Cart Drawer**
        *   [ ] Task: Create a sliding drawer component for the cart state using large shadows (`shadow-lg`). Use `@delight` for snappier 150-300ms visual transitions.
        *   [ ] Task: Display items stored in the cart with quantity adjustment controls. Verify focus states and cursor indications per `.impeccable.md`.
        *   [ ] Task: Render an oversized "Checkout" button to drive zero-friction conversions using the full color shift hover rules.
