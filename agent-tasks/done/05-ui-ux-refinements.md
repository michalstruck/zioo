# Product Context
Refining the vibe, typography, and UX based on feedback from the initial landing page and storefront launch.

**CRITICAL: All UI implementations MUST strictly adhere to the guidelines defined in `.impeccable.md`.**

*   **Epic: UI/UX Refinement & Polish**
    *   **Feature: Typography Readability Adjustments**
        *   [ ] Task: Scale down the global massive headers (H1, H2) in the app's styling configuration by ~20-30%. The current font-size is slightly too large to be easily readable; scale it back to improve balance while preserving the brutalist pop-art impact.
        *   [ ] Task: Update the `.impeccable.md` typography guidelines to reflect the newly scaled-down headers.
    *   **Feature: Cart Discoverability & Interactions**
        *   [ ] Task: Implement an auto-open behavior for the Cart Drawer component. When a user clicks "Do koszyka", the side drawer should automatically slide open and stay open for ~300-500ms to give clear immediate feedback, minimizing friction. Use `@delight`.
        *   [ ] Task: Enhance the floating cart toggle button (if continuing to use it) or ensure the newly added header cart badge is styled so it's impossible to miss. Apply hover translations or high-contrast styling per `.impeccable.md`.
