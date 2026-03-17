# Product Context
Checkout must be stress-free. It targets the Polish market, relying on local established solutions.
**CRITICAL: All UI implementations MUST strictly adhere to the guidelines defined in `.impeccable.md`. Rely on the core shadcn/ui Input components instantiated in step 01. Note: Payments will be Stripe-based.**

*   **Epic: Checkout Experience**
    *   **Feature: Information & Methods**
        *   [ ] Task: Build the primary checkout view for user information collection. Use neo-brutalist inputs with distinct outlines and visible selection paths described in `.impeccable.md`.
        *   [ ] Task: Implement Stripe integration. Render the payment gateway forms natively via the brand's sharp borders. Use `@harden` for edge-case and robust error management.
    *   **Feature: Finalization & Safety**
        *   [ ] Task: Ensure the cart state is locked during processing. Add 150-300ms visual transitions (per `.impeccable.md`) for loading blocks. Use `@optimize` for smoother rendering.
        *   [ ] Task: Display explicit legal text confirming aromatization use in the footer. Use `@clarify` for better UX copy clarity.
