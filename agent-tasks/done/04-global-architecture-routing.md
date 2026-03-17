# Product Context
The vision now requires a clear separation between storytelling (Landing Page) and commerce (Storefront). We need global navigation to tie these separate pages together and improve cart discoverability.

**CRITICAL: All UI implementations MUST strictly adhere to the guidelines defined in `.impeccable.md`. Use `@frontend-design` for layout and routing patterns.**

*   **Epic: Global Architecture & Navigation**
    *   **Feature: Application Routing & Page Separation**
        *   [x] Task: Implement client-side routing (e.g., Next.js App Router or Vite React Router based on the existing setup).
        *   [x] Task: Move the previously built Landing Page (Hero + Value Props) to the index route (`/`). Ensure it is strictly for storytelling.
        *   [x] Task: Move the Product Grid and Storefront components to a dedicated store route (`/store`). Keep it minimalistic and focused on conversion.
    *   **Feature: Persistent Header Navigation**
        *   [x] Task: Build a persistent, minimalistic header component. Ensure it uses the stark `.impeccable.md` aesthetic (e.g., solid border bottom).
        *   [x] Task: Add loud, legible navigation links (Space Grotesk) to "About" (`/`), "Store" (`/store`), and "Blog" (`/blog`).
    *   **Feature: Cart Visibility Enhancement**
        *   [x] Task: Overhaul cart visibility by integrating a prominent cart indicator directly into the new persistent header. The cart state (item count, total) must be immediately apparent at all times. Use `@bolder` and `@delight` to ensure it's unmissable and reacts snappily to state changes.

---

### Implementation Report: Global Architecture & Navigation

1. **Summary** 
   Separated the landing page and storefront into distinct routes (`/` and `/store`). Developed a global `<Header>` component with persistent navigation links (`/`, `/store`, `/blog`) and integrated the cart drawer trigger to provide immediate cart visibility across all pages. Added a stub page for `/blog`. Left existing configurations like `package.json` and Next.js setup untouched.
2. **Assumptions**
   Assumed the Next.js App Router setup should be retained. Assumed the `CartDrawer` logic can be nested within the global `Header` while maintaining client-side interactivity (`"use client"`). Assumed the blog page only required a basic placeholder for now.
3. **Implementation**
   - Refactored `app/page.tsx` to solely include the Hero and Value Proposition sections.
   - Created `app/store/page.tsx` to house the Product Grid and `ProductCard` components.
   - Built `components/header.tsx` with bold Space Grotesk links and a bottom border matching `.impeccable.md`.
   - Updated `components/cart-drawer.tsx` to use a header-integrated button instead of a floating FAB, and included it in the `Header`.
   - Updated `app/layout.tsx` to wrap pages with the `Header` for persistent visibility.
4. **Validation**
   Verified route isolation by visually inspecting the split between `/` and `/store`. Ensured global visibility of the `<Header>` across routes. Validated that `<CartDrawer>` safely opens from the new header and correctly displays reactive cart state (`cartCount`). No new Next.js routing errors were introduced.
