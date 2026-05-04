# 02 — Landing Page Structure

**Role:** Senior Software Engineer  
**Depends on:** `01-landing-page-copy.md` must be approved before hardcoding copy  
**File to edit:** `zioo/app/(main)/page.tsx`  
**Design system:** `zioo/design-system/` — use existing tokens, spacing vars, and Tailwind classes already in the project. Do not invent new classes.

---

## Why this task exists

The current landing page (`app/(main)/page.tsx`) only has **2 sections**: Hero + Value Proposition ("Czemu zioo?"). The approved copy brief (`01-landing-page-copy.md`) requires **7 sections**. The structure must be in place — with correct semantics, IDs, and component slots — before the copywriter's output can be dropped in.

Additionally, the existing copy contains **banned regulatory terms** that must be removed while the scaffolding is being built.

---

## Immediate Fixes — Banned Copy (do now, no copy brief needed)

These violations exist in the **current** `page.tsx` and must be fixed regardless of the copy brief status.

| Location | Current text | Problem | Fix |
|---|---|---|---|
| `line 42` — badge above h1 | `"Herbata ziołowa z terpenami"` | `herbata ziołowa` is a banned product descriptor per `COPY_DICTIONARY.md` | Replace with `"Mieszanka do aromatyzacji"` |
| `line 52` — subheadline | `"zaparzone zioła, napar i spokój"` | `napar` implies drinking/food consumption — banned | Remove `napar`, replace with compliant phrasing (e.g. `"aromatyzacja i spokój"`) |
| `line 133` — value prop card 3 | `"Herbata ziołowa z prawdziwym aromatem."` | `Herbata ziołowa` is banned | Replace with `"Mieszanka ziołowa z prawdziwym aromatem."` or similar compliant phrasing |

Read `COPY_DICTIONARY.md` before making these changes. It takes precedence over everything.

---

## Section Scaffolding to Add

Build the following sections **after** the existing Value Proposition section, in this exact order. Use placeholder copy — the copywriter will fill in the actual text from `01-landing-page-copy.md`. Mark every placeholder with a `{/* COPY: ... */}` comment so they are easy to find and replace.

---

### Section: Trust Signals Bar

```
id="trust-signals"
```

- A horizontal strip sitting directly below the Hero (visually between Hero and Value Prop, or immediately after — your call based on visual flow)
- Contains 3–4 pill/badge elements in a flex row, centered, wrapping on mobile
- Each pill: icon + short text label
- Icons to use (lucide-react): `Package` (delivery), `Truck` (InPost), `CreditCard` (payment), `Leaf` (botanical)
- Placeholder texts:
  - `{/* COPY: trust signal 1 */}` → "Wysyłka w 24h z InPost"
  - `{/* COPY: trust signal 2 */}` → "Darmowa dostawa od 34,99 zł"
  - `{/* COPY: trust signal 3 */}` → "Płatność BLIK, Apple Pay, Google Pay"
  - `{/* COPY: trust signal 4 — optional */}` → "100% beznikotynowe"
- Style: subtle, not a banner — think small pill-shaped badges with border, muted bg

---

### Section: Problem / Pain

```
id="problem"
```

- Clean, text-focused section — no cards, no grid
- Structure:
  - `<h2>` — short punchy section headline `{/* COPY: problem headline */}`
  - 2–3 short paragraph/list items naming the pain points `{/* COPY: pain point 1/2/3 */}`
  - Transition sentence `{/* COPY: pain-to-solution bridge */}`
- No images needed here — copy carries it
- Background: slightly different from neighbors (use `bg-muted/30` or similar) to create visual rhythm

---

### Section: Product Showcase

```
id="produkty"
```

**This section already has the infrastructure — use it.**

The store page (`/store`) renders a product grid using `<ProductCard>` from `components/product-card.tsx`. The `ProductCard` component is complete and working.

**Task:** Pull a curated subset of products from `lib/products.ts` and render them directly on the landing page in a 2×2 or 4-column grid.

- Import product data from `lib/products.ts`
- Filter to show **one card per blend** (prefer the 5-pack SKU as the default shown) — so 4 cards: Fresz, Czill, Fokus, Slep
- Reuse `<ProductCard product={p} />` — do not build a new card component
- Section structure:
  - `<h2>` — `{/* COPY: product showcase headline */}` (e.g. "Znajdź swój moment")
  - Optional short subtext `{/* COPY: product showcase subtext */}`
  - 2×2 grid on mobile, 4-col on desktop
- Each card already links to `/store/product/[id]` — no changes needed to `ProductCard`

**Check `lib/products.ts`** to confirm the product IDs and structure before writing the filter logic.

---

### Section: Terpene Education

```
id="terpeny"
```

- Goal: explain what terpenes are, short and visual
- Structure:
  - `<h2>` — `{/* COPY: terpene section headline */}`
  - Short intro paragraph (1–2 sentences) — `{/* COPY: terpene intro */}`
  - 3 terpene profile cards — one per infused blend:
    - Card: blend name + terpene profile name + aroma/feel description
    - Data per card:
      | Blend | Terpene profile | Component placeholder |
      |---|---|---|
      | Czill | Girl Scout Cookies | `{/* COPY: GSC description */}` |
      | Fokus | Lemon Skunk | `{/* COPY: Lemon Skunk description */}` |
      | Slep | Purple Punch | `{/* COPY: Purple Punch description */}` |
    - Style: small cards in a 3-col row (stack on mobile), minimal, with terpene accent color from `product.terpeneStyle.primary` pulled from `lib/products.ts`
  - Closing micro-CTA (optional) — `{/* COPY: terpene section CTA */}`

---

### Section: FAQ

```
id="faq"
```

- Use an **accordion** component — check `components/ui/` for an existing Shadcn accordion (it's in the project via `components.json`)
- 6 accordion items — placeholder Q&A pairs:
  ```tsx
  {/* COPY: FAQ items — replace placeholder Q&A with copy from 01-landing-page-copy.md */}
  ```
- Placeholder structure (build as data array, not hardcoded JSX):
  ```ts
  const FAQ_ITEMS = [
    { q: "PLACEHOLDER Q1", a: "PLACEHOLDER A1" },
    { q: "PLACEHOLDER Q2", a: "PLACEHOLDER A2" },
    // ... 6 total
  ]
  ```
- Section structure:
  - `<h2>` — `{/* COPY: FAQ section headline */}` (e.g. "Masz pytania?")
  - Accordion rendered from `FAQ_ITEMS`
- **Add `FAQPage` JSON-LD schema** inside this section (or in a `<script>` tag in the page head via `generateMetadata`/inline):
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }}
  />
  ```
- This schema must be present even with placeholder copy — it will be updated when real copy is dropped in.

---

### Section: Final CTA

```
id="cta-final"
```

- Mirror the Hero visually — creates a sense of closure
- Structure:
  - Short value recap text — `{/* COPY: final CTA recap */}`
  - Primary CTA button — `{/* COPY: final CTA button text */}`
  - Optional secondary note — `{/* COPY: final CTA secondary note */}` (e.g. Zestaw Startowy nudge)
  - Optional trust signal reminder — `{/* COPY: delivery reminder */}` (e.g. "Zamówienie dziś = dostawa jutro")
- CTA button must have: `id="cta-final-primary"` for GTM tracking
- Use the existing `<Button size="lg">` component

---

## CTA Button ID Requirements (all CTAs on page)

Every CTA button on the page needs a unique `id` for GTM event tracking. Apply these now:

| CTA location | Required `id` |
|---|---|
| Hero primary CTA | `id="cta-hero-primary"` |
| Hero secondary CTA | `id="cta-hero-secondary"` |
| Final CTA primary | `id="cta-final-primary"` |
| Each product card "See blend" link | `id="product-card-{blend-name}"` (e.g. `id="product-card-czill"`) |

---

## Section Order in `page.tsx`

Final section order should be:

```
<main>
  <section id="hero" />           ← exists, fix banned copy
  <section id="trust-signals" />  ← NEW
  <section id="value-proposition" /> ← exists, fix banned copy in card 3
  <section id="problem" />        ← NEW
  <section id="produkty" />       ← NEW, uses existing ProductCard
  <section id="terpeny" />        ← NEW
  <section id="faq" />            ← NEW, with FAQPage schema
  <section id="cta-final" />      ← NEW
</main>
```

---

## Structural Requirements

- Each `<section>` must have its `id` attribute — required for in-page anchor navigation and GTM scroll depth tracking
- Each `<h2>` must follow the single-`<h1>` rule — the hero already has the only `<h1>` on the page. Every other section heading is `<h2>`.
- No inline styles except where strictly required (follow existing patterns in the file)
- All new sections use existing design tokens — no new colors, no new font sizes outside the scale

---

## What NOT to do

- ❌ Do not write final Polish copy — use `{/* COPY: ... */}` placeholders only
- ❌ Do not create new components for things `ProductCard` already handles
- ❌ Do not add a new card component for the product showcase — reuse `<ProductCard>`
- ❌ Do not hardcode product data — import from `lib/products.ts`
- ❌ Do not add navigation links (no `href` on CTA buttons yet — they can be `#` until copy is confirmed)

---

## Deliverable

Updated `zioo/app/(main)/page.tsx` with:

- [x] Banned copy fixed (3 violations listed above)
- [x] `id="trust-signals"` section with 3–4 placeholder pills
- [x] `id="problem"` section with placeholder h2 + 3 pain point slots
- [x] `id="produkty"` section rendering 4 `<ProductCard>` components from `lib/products.ts`
- [x] `id="terpeny"` section with 3 terpene profile cards
- [x] `id="faq"` section with accordion + `FAQPage` JSON-LD schema (placeholder content)
- [x] `id="cta-final"` section with button `id="cta-final-primary"`
- [x] All CTA buttons have `id` attributes per the table above
- [x] No banned terminology anywhere on page (scan full file before committing)
