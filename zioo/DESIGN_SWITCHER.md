# Design Switcher

Conditional UI design toggling for A/B testing. Currently supports `default` and `retro-surfer`.

## How it works

1. **Server** (`layout.tsx`) reads the `design` cookie → passes `initialDesign` to `<Providers>`.
2. **Client** (`DesignProvider` in `lib/design-context.tsx`) stores the theme in React state, persists changes to the cookie.
3. **Pages** use a thin client switcher component (e.g. `HomeDesignSwitcher`) that reads `useDesign()` and renders the matching component tree.

## Dev toggle

In development (`NODE_ENV === "development"`), a floating toggle appears bottom-left. Click a theme name to switch. The choice persists via cookie.

## Adding a new design

1. Add the theme name to the `DesignTheme` union in `lib/design-context.tsx`.
2. Add it to `VALID_THEMES` in `layout.tsx` and `THEMES` in the dev toggle.
3. Create a variant component (e.g. `RetroHome`) and register it in the page's switcher.

## Component splitting decision

| Approach | When to use |
|---|---|
| **Full component split** (`<RetroHome />` vs `<DefaultHome />`) | Different layout, structure, or content between designs. |
| **CSS class approach** (same component + `.theme-retro` wrapper) | Same structure, only visual styling differs (colors, fonts, spacing). |

Default recommendation: **full split at the page level**, CSS-class approach for shared primitives (buttons, cards) when only visual tweaks are needed.
