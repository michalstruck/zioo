## 🏛️ Aesthetic Definition & Vibe

**Clinical Naturalism** is a blend of **1970s health journal aesthetics** with **modern clinical precision**, now enhanced with **Organic Design** principles to emphasize wellness and human connection.

- **Vibe:** Clean but warm, scientific but organic, trustworthy.
- **Organic Shapes:** Replace rigid lines with fluid, asymmetric curves. Use "living" shapes for decorative elements.
- **Natural Textures:** Incorporate paper grain, linen, and subtle organic noise to add depth and realism.
- **Minimalism:** Prioritize whitespace and essential elements; "organic design works best with minimalism."
- **Inspiration:** Vintage apothecary labels, botanical encyclopedias, high-end skincare packaging.
- **Key Characteristics:** Generous whitespace, "flowing" retro typography, organic shapes, and a desaturated "nature-first" palette.

---

## 🎨 Color Palette: The Apothecary Palette

These map directly to your `globals.css` CSS variables for `shadcn/ui`.

| Hex       | Role                       | shadcn mapping                |
| --------- | -------------------------- | ----------------------------- |
| `#FBF9F4` | Antique Paper / Background | `--background`                |
| `#FFFFFF` | Sterile White / Surface    | `--card`, `--popover`         |
| `#6B7F6A` | Desaturated Sage           | `--primary`                   |
| `#A27FE2` | Lilac                      | `--secondary`, `--foreground` |
| `#C48464` | Terracotta / Clay          | `--accent`                    |
| `#1A1F1A` | Ink Black (Soft)           | `--foreground`                |
| `#E2E2D5` | Linen                      | `--border`, `--input`         |

---

## 🔡 Typography: Flowing & Precision

### Heading Font: **Fraunces** (Soft Serif)

- **Vibe:** "Flowing fonts" — Retro, editorial, human, flowing terminals.
- **Usage:** Hero headlines, section titles.
- **Styling:** `font-weight: 500-600`, `letter-spacing: -0.02em`.
- **shadcn implementation:** Map to `--font-heading`.

### Body Font: **Public Sans** (Modernist Sans)

- **Vibe:** Clinical, functional, highly legible, "no-nonsense" information.
- **Usage:** Body copy, labels, technical specs.
- **Styling:** `line-height: 1.6`, `font-weight: 400`.
- **shadcn implementation:** Map to `--font-sans`.

---

## 🏗️ shadcn/ui Component Guidelines

### Buttons (`Button`)

- **Variant Link/Ghost:** Use for navigation to maintain "clean" aesthetic.
- **Variant Default/Outline:** Always use `rounded-full` (Pill shape) to contrast the serif typography.
- **Animation:** Use `duration-500` and `ease-out-expo` (cubic-bezier) for soft transitions.

### Cards (`Card`)

- **Border:** Use `border-border/30` or `border-none`.
- **Shadow:** Use `shadow-md` or `shadow-lg` with a soft, natural blur.
- **Shape:** Standardize on `rounded-[24px]`. Optionally use asymmetric radii for featured cards: `rounded-[30%_70%_70%_30%/50%_40%_60%_50%]`.
- **Texture:** Apply a subtle paper grain background (`bg-paper-texture`).

### Inputs (`Input` / `Select`)

- **Focus Ring:** Use `--primary` with low opacity.
- **Background:** Prefer `--bg-clinical` (white) to make form fields feel sterile and precise.

---

## 🌿 Lucide Iconography

- **Stroke Width:** Standardize on `1.5px` (thin) to match the clinical feel.
- **Color:** Always use `--primary` or `--secondary`. Avoid using brand-black for icons as it feels too "harsh".
- **Interaction:** Icons inside buttons should have a subtle translate-y transition on hover.

---

## ✨ Interactions & Motion

- **Entry:** Gentle fade-ins and subtle upwards drifts (`400ms`).
- **Hover:** Soft color shifts (e.g., Sage to Forest) or subtle elevation change.
- **Feedback:** Fluid, non-mechanical transitions. Avoid "snappy" or "bounce" effects.

---

## 🚫 Anti-Patterns (Avoid)

- **No Neo-Brutalism:** NO thick black borders or hard/flat shadows.
- **No Neon Colors:** Avoid bright cyans, oranges, or magentas.
- **No Bubbly/Generic SaaS UI:** Avoid the blue/white "tech" look.
- **No Cluttered Text:** Every block of text should breathe.
