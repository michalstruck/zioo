# Product Context
Vibe is chill, bold, stress-free. Neo-brutalist pop-art design. Loud typography. High contrast colors.
**CRITICAL: All UI implementations MUST strictly adhere to the guidelines defined in `.impeccable.md`. Use `@ui-ux-pro-max` to ensure structural pop-art fidelity.**

*   **Epic: Design System Core**
    *   **Feature: Global Style Variables**
        *   [ ] Task: Extract exact hex codes (primary `#F97316`, secondary `#2DD4BF`, accent `#FEF08A`, background `#FAFAFA`) from the `.impeccable.md` and define them in the CSS/Tailwind configuration. 
        *   [ ] Task: Integrate "Space Grotesk" from Google Fonts for massive headers as specified in the `.impeccable.md`.
        *   [ ] Task: Integrate "Space Grotesk" for clean, highly legible body copy as specified in the `.impeccable.md`.
    *   **Feature: Base Component Library (shadcn/ui + Lucide)**
        *   [ ] Task: Use `@shadcn` to install and instantiate the Button component. Modify it per `.impeccable.md` to use thick black borders (`border-2 border-black`) and hard shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`) with snappy transitions. Use `@bolder` to amplify the impact.
        *   [ ] Task: Use `@shadcn` to install and instantiate the Card component. Apply the mandatory uniform `border-2 border-black` and `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` matching the "sticker" aesthetic from `.impeccable.md`.
        *   [ ] Task: Use `@shadcn` to install and instantiate the Input component. Ensure focus states use `border-2 border-black` and hard shadows as dictated by the anti-patterns in `.impeccable.md`.
