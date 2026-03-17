# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Zioo
**Generated:** 2026-03-16 23:07:23
**Category:** E-commerce

---

## Global Rules

### Color Palette

| Role       | Hex       | CSS Variable         |
| ---------- | --------- | -------------------- |
| Primary    | `#F97316` | `--color-primary`    |
| Secondary  | `#2DD4BF` | `--color-secondary`  |
| Accent     | `#FEF08A` | `--color-accent`     |
| Background | `#FAFAFA` | `--color-background` |
| Text       | `#000000` | `--color-text`       |
| Border     | `#000000` | `--color-border`     |

**Color Notes:** Sun-bleached brights with stark contrasts. Washed-out teal, sunset orange, pale yellow, and solid black for grounding.

### Typography

- **Heading Font:** Space Grotesk
- **Body Font:** Space Grotesk
- **Mood:** neo brutalism, pop art, loud, bold, heavy, stickers, mechanical, high contrast, cream, gen-z
- **Google Fonts:** [Space Grotesk + Space Grotesk](https://fonts.google.com/share?selection.family=Space+Grotesk:wght@700)

**CSS Import:**

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
```

### Spacing Variables

| Token         | Value             | Usage                     |
| ------------- | ----------------- | ------------------------- |
| `--space-xs`  | `4px` / `0.25rem` | Tight gaps                |
| `--space-sm`  | `8px` / `0.5rem`  | Icon gaps, inline spacing |
| `--space-md`  | `16px` / `1rem`   | Standard padding          |
| `--space-lg`  | `24px` / `1.5rem` | Section padding           |
| `--space-xl`  | `32px` / `2rem`   | Large gaps                |
| `--space-2xl` | `48px` / `3rem`   | Section margins           |
| `--space-3xl` | `64px` / `4rem`   | Hero padding              |

### Shadow Depths

| Level         | Value                             | Usage                       |
| ------------- | --------------------------------- | --------------------------- |
| `--shadow-sm` | `2px 2px 0px 0px rgba(0,0,0,1)`   | Buttons, small inputs       |
| `--shadow-md` | `4px 4px 0px 0px rgba(0,0,0,1)`   | Cards, standard components  |
| `--shadow-lg` | `8px 8px 0px 0px rgba(0,0,0,1)`   | Modals, dropdowns           |
| `--shadow-xl` | `12px 12px 0px 0px rgba(0,0,0,1)` | Hero images, featured cards |

---

## Component Specs & Technology Stack

**UI Framework:** `shadcn/ui`
**Icons:** `lucide-react` (Use exclusively)
**Styling:** Tailwind CSS

### General Styling Directives (Neo-Brutalist)

- **Borders:** Thick solid black (`border-2 border-black` or `border-4 border-black` for emphasis).
- **Shadows:** Hard black shadows (e.g., `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`).
- **Transitions:** Snappy, instantaneous or very short `duration-150` with slight translate for press effects.

### shadcn/ui Component Modifications

**Buttons (`components/ui/button.tsx`)**

- Modify default variants to include thick borders and hard shadows.
- _Primary:_ `bg-primary text-primary-foreground border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all`
- _Secondary:_ `bg-secondary text-secondary-foreground border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all`

**Cards (`components/ui/card.tsx`)**

- Apply uniform `border-2 border-black` and `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`.
- Background should typically be `bg-card` (often white or pale yellow).
- Rounded corners should be minimal to emphasize the brutalist feel, but can be slightly rounded (e.g., `rounded-xl`) if a "sticker" look is intended.

**Inputs (`components/ui/input.tsx`)**

- `border-2 border-black rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`

**Icons (`lucide-react`)**

- Always use `strokeWidth={2.5}` or `strokeWidth={3}` to match the heavy typography and thick borders.

---

## Style Guidelines

**Style:** Vibrant & Block-based

**Keywords:** Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic

**Best For:** Startups, creative agencies, gaming, social media, youth-focused, entertainment, consumer

**Key Effects:** Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms

### Page Pattern

**Pattern Name:** Feature-Rich Showcase

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Flat design without depth
- ❌ Text-heavy pages

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
