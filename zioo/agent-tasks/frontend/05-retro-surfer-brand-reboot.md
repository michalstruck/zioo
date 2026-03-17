# Epic: Retro Surfer Brand Reboot

The current "Retro Surfer" implementation is too subtle. We need to "tear down" the existing retro variants and rebuild them with a bold, 70s-inspired aesthetic that radically differs from the default design.

## Technical Requirements
- **Maintain Switcher Architecture:** All changes must only apply when `.theme-retro-surfer` is active.
- **Performance:** Use Next.js optimized fonts and common styling patterns.
- **Copy Compliance:** Strictly follow `COPY_DICTIONARY.md` (herbal tea / aromatization only).

---

## Feature 1: Style & Foundation Reboot
Clear the "too subtle" styles and establish a radical new foundation.

- [ ] **Task 1: Radical Typography Upgrade**
  - Select and import a bold, 70s-style display font (e.g., `Shrikhand` or `Bungee`) using `next/font/google`.
  - Update `layout.tsx` to include this font variable.
  - Update `globals.css` to set `--font-sans` to this new font within `.theme-retro-surfer`.
  - *Skill: frontend-design (typography), ui-ux-pro-max (font-pairing)*

- [ ] **Task 2: "Electric Sunset" Palette Implementation**
  - Update `.theme-retro-surfer` variables in `globals.css`:
    - `--background`: `#FFFBEB` (Warm Cream/Sand)
    - `--primary`: `#F97316` (Vibrant Orange/Sunset)
    - `--secondary`: `#06B6D4` (Electric Cyan/Ocean)
    - `--accent`: `#F472B6` (Hot Pink/Floral)
    - `--shadow-lg`: `12px 12px 0px 0px rgba(0,0,0,1)` (Extreme neo-brutalist shadow)
  - *Skill: colorize, bolder, ui-ux-pro-max (color-systems)*

- [ ] **Task 3: Retro Grain & Texture Layer**
  - Implement a subtle SVG grain/noise filter utility in CSS.
  - Apply this as a fixed overlay or background effect ONLY for the retro theme.
  - *Skill: delight, polish*

---

## Feature 2: Component Overhaul
Rebuild core shared components with the new bold aesthetic.

- [ ] **Task 4: RetroProductCard Re-imagining**
  - Overhaul `RetroProductCard` in `components/product-card.tsx`.
  - Use extreme "blob/wave" `border-radius` (e.g., `30% 70% 70% 30% / 30% 30% 70% 70%`).
  - Add a "Circular Price Tag" sticker (absolute positioned) with a "handwritten" look.
  - Implement a "hover-jiggle" animation using Framer Motion or CSS keyframes.
  - *Skill: bolder, delight, ui-ux-pro-max (animation)*

- [ ] **Task 5: Retro Header & Footer Variants**
  - Overhaul the header/footer behavior for the retro theme.
  - Add a wavy SVG "wave" transition at the bottom of the header.
  - Implement "sticker-style" navigation links (oval borders, hover color shifts).
  - *Skill: bento-grid (for layout if applicable), distill (keep it clean but loud)*

---

## Feature 3: Experience & Polish
Final touches to ensure the "vibe check" succeeds.

- [ ] **Task 6: "Lava Lamp" Background Animation**
  - Update `RetroStore` in `store-variants.tsx`.
  - Add large, slow-moving SVG blobs in the background with varying opacity and the Cyan/Pink palette.
  - *Skill: delight, ui-ux-pro-max (animation)*

- [ ] **Task 7: Visual Audit & Refinement**
  - Compare Default vs. Rebooted Retro on all viewports (Mobile, Tablet, Desktop).
  - Ensure contrast remains high despite the bold colors.
  - *Skill: audit, polish, adapt*
