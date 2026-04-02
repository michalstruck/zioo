# Execution Roadmap

Derived from [CMO_STRATEGY.md](file:///Users/michalstruck/Repositories/zioo/marketing/CMO_STRATEGY.md). Ordered by dependency — top items unblock everything below them.

## Roles

| Role                           | Responsibility                                                            |
| ------------------------------ | ------------------------------------------------------------------------- |
| **CMO**                        | Strategic direction, campaign roadmaps, KPIs, briefs (this doc)           |
| **Brand Manager**              | Packaging, brand identity, visual direction, label design                 |
| **Copywriter / Product Owner** | All Polish copy — product descriptions, landing page, blog posts, ad text |
| **Performance Lead**           | Ad account setup, campaign execution, tracking, budget management         |
| **Senior Software Engineer**   | Website changes, checkout, analytics integration, SEO implementation      |
| **Designer**                   | Label artwork, social media templates, ad creatives                       |

## Skills Reference

Available marketing agent skills that should be invoked at appropriate stages:

| Skill                       | Use for                                                      |
| --------------------------- | ------------------------------------------------------------ |
| `copywriting`               | Landing page copy, product descriptions, hero section        |
| `copy-editing`              | Polish and tighten all copy before publishing                |
| `humanizer`                 | Ensure copy feels natural, not AI-generated                  |
| `social-content`            | TikTok/Instagram content planning, calendar, hooks           |
| `ad-creative`               | Generating Meta/Google ad headlines and descriptions         |
| `paid-ads`                  | Campaign structure, targeting, bid strategy, optimization    |
| `analytics-tracking`        | GA4/GTM setup, event tracking plan, conversion tracking      |
| `seo-audit`                 | Technical SEO audit of the storefront                        |
| `ai-seo`                    | Optimize for AI search engines (ChatGPT, Perplexity, Gemini) |
| `schema-markup`             | Structured data for products, FAQ, organization              |
| `page-cro`                  | Conversion rate optimization for landing page and storefront |
| `launch-strategy`           | Phased launch execution (ORB framework)                      |
| `content-strategy`          | Blog topic clusters and editorial planning                   |
| `referral-program`          | Referral program design for Phase 3                          |
| `email-sequence`            | Post-purchase email flows                                    |
| `product-marketing-context` | Create the shared context doc all skills read                |
| `pricing-strategy`          | Validate pricing structure and bundling                      |

---

## Week 1-2: Foundation (Pre-Launch Blockers)

### 0. Product Marketing Context

> **Owner:** CMO
> **Skills:** `product-marketing-context`
> **Deliverable:** `.agents/product-marketing-context.md`

**Brief:** Create the shared product-marketing context file that ALL other owners reference before asking questions. This saves time on every subsequent task. It should contain:

- Product description (herbal blends, terpene-infused line)
- Target audience (Gen Z wellness, cannabis-adjacent)
- Value proposition and differentiators
- Competitor landscape (if known)
- Brand voice guidelines (punchy, surfer-chill, bold, Polish language)
- Regulatory constraints (link to `COPY_DICTIONARY.md`)
- Current tech stack (Next.js, Stripe, InPost)

---

### 1. Packaging & Label Design

> **Owner:** Brand Manager + Designer
> **Deliverable:** Print-ready label files (2x per blend: front + back)

**Brief:**

**Physical specs:**

- Bag: 8×8cm green mylar, 2-3g per unit
- Labels: printed, applied on both sides (front + back), fully colored both sides on transparent background

**Front label must contain:**

- Blend name (Fresz / Czill / Fokus / Slep)
- Optional: minimalist mood icon (leaf, moon, etc.)
- Keep it clean and minimal

**Back label must contain:**

- Zioo logo
- Blend name
- Full ingredient list in Polish, no percentages (e.g., "Dziewanna, Malina, Pokrzywa, Lawenda, Melisa")
- Net weight (e.g., "2g netto")
- Product descriptor: "Mieszanka do aromatyzacji / Herbata ziołowa"
- For terpene line: terpene profile name (e.g., "Profil terpenowy: Girl Scout Cookies")
- QR code linking to the product page on zioo.pl
- Batch/lot number area (can be a blank field for handwriting or sticker)

**What MUST NOT appear on labels:**

- Any term from `COPY_DICTIONARY.md` banned list
- Health claims
- Dosage instructions
- Any reference to combustion, smoking, or inhalation

**Design direction:**

- Clinical Naturalism aesthetic — clean, botanical, premium
- Primary type: Public Sans
- Accent type: Fraunces
- Color palette:

| Hex       | Role                              |
| --------- | --------------------------------- |
| `#FBF9F4` | Background - Antique Paper        |
| `#FFFFFF` | Surface - Sterile White           |
| `#6B7F6A` | Primary - Desaturated Sage        |
| `#A27FE2` | Accent - Lilac                    |
| `#C48464` | Secondary - Terracotta / Clay     |
| `#121625` | Copy, foreground - Soft Ink Black |
| `#E2E2D5` | Borders - Linen                   |

- Must feel premium despite being a sticker label, not custom-printed

**Deliverables:**

- [ ] Design mockup for CEO review
- [ ] Print-ready files (PDF or AI) at exact label dimensions
- [ ] Font files and color codes documented

---

### 2. Product Photography

> **Owner:** Brand Manager (art direction) + CEO/Photographer
> **Deliverable:** 8-12 photos per blend + 5-10 lifestyle shots

**Brief:**

This is the single most important asset for everything downstream (website, ads, social). Bad photos kill conversions. Good photos sell the product.

**Shot list per blend (Fresz, Czill, Fokus, Slep — regular + terpene = up to 8 variants):**

| Shot type           | Description                                                      | Qty per blend |
| ------------------- | ---------------------------------------------------------------- | ------------- |
| Packshot (front)    | Mylar with label, clean white/neutral bg                         | 1             |
| Packshot (back)     | Label visible, clean bg                                          | 1             |
| Loose herb          | Herbs spilled artistically on surface (marble, wood, dark slate) | 1-2           |
| Scale shot          | Product in hand, or next to common object for size reference     | 1             |
| Lifestyle - relaxed | Product on desk, nightstand, coffee table with tea/diffuser      | 2-3           |

**Lifestyle scenes (shared across blends):**

| Scene         | Props                                           | Mood              |
| ------------- | ----------------------------------------------- | ----------------- |
| Evening chill | Candle, book, soft light, ceramic cup           | Warm, calm        |
| Desk setup    | Laptop, plant, Zioo blend, minimalist workspace | Focused, creative |
| Outdoor       | Blanket, nature, daylight, thermos              | Free, fresh       |
| Social        | Two people, patio/balcony, city background      | Community, vibe   |

**Technical requirements:**

- Camera: phone is fine if lighting is good, DSLR preferred
- Minimum resolution: 2000px on longest side
- File format: JPG at max quality, keep RAWs
- Lighting: natural daylight or softbox, no harsh shadows
- Background: clean, consistent per scene type
- Editing: minimal — correct white balance, don't over-saturate

**What MUST NOT appear in photos:**

- Rolling papers, filters, lighters, ashtrays, or anything combustion-related
- Smoke, vapor, or anything that implies inhalation
- Any competitor products

**What SHOULD appear:**

- Teacups, diffusers, infusers — reinforces official positioning
- Raw herbs and botanicals — natural, premium feel
- Plants, greenery — Clinical Naturalism aesthetic

---

### 3. Website Completion

> **Owner:** Senior Software Engineer (implementation) + Copywriter (copy) + Performance Lead (tracking)
> **Skills:** `copywriting`, `copy-editing`, `humanizer`, `page-cro`, `seo-audit`, `ai-seo`, `schema-markup`, `analytics-tracking`

**This breaks down into 5 sub-briefs:**

#### 3a. Product Descriptions

> **Owner:** Copywriter / Product Owner
> **Skills:** `copywriting`, `humanizer`, `copy-editing`

**Brief per product page:**

Each blend needs a Polish-language product description. Structure:

1. **Headline** (blend name + one-liner benefit) — max 8 words
2. **Subheadline** — 1 sentence expanding on the mood/use case
3. **Ingredient list** — with percentages, presented cleanly
4. **Terpene profile section** (infused line only) — terpene name, aroma description, expected "efekt entourage" benefit
5. **Usage suggestions** — "Idealne jako herbata ziołowa lub mieszanka do aromatyzacji." Keep it light, compliant, dual-positioned.
6. **CTA** — "Dodaj do koszyka" (Add to cart)

**Tone:** Punchy, direct, surfer-chill. Not clinical. Not corporate. Not AI-sounding (use `humanizer` skill before publishing).

**STRICT:** Apply `COPY_DICTIONARY.md` rules. Zero banned terms. Run `copy-editing` skill on final drafts.

**Deliverable:** 8 product descriptions (4 blends × 2 lines: regular + terpene infused)

#### 3b. Landing Page Copy

> **Owner:** Copywriter / Product Owner
> **Skills:** `copywriting`, `page-cro`, `humanizer`

**Brief:**

The landing page copy must convert cold visitors into buyers. All in Polish. Follow the `copywriting` skill's page structure framework:

- **Hero:** Headline + subheadline + primary CTA ("Zamów teraz" or "Odkryj smaki")
- **Social proof block:** (skip for launch if no testimonials yet — add "Darmowa dostawa od X PLN" or "Wysyłka w 24h z InPost" as trust signals)
- **Problem/Pain block:** Why people look for herbal alternatives (health, taste, non-addictive)
- **Product showcase:** Cards linking to each blend
- **Terpene education section:** Short, visual, punchy explanation of what sets the infused line apart
- **FAQ:** 4-6 common questions, regulatory-safe answers
- **Final CTA:** Recap value, repeat CTA

**CTA copy rules:**

- Primary: action verb + what they get → "Zamów swój blend" / "Sprawdź nasze mieszanki"
- Never use generic "Kliknij tutaj" or "Dowiedz się więcej"

**Run `page-cro` skill** on the final page to catch conversion killers before launch.

#### 3c. Checkout Experience

> **Owner:** Senior Software Engineer
> **Skills:** `analytics-tracking` (for checkout event tracking)

**Brief:**

- Integrate Stripe (Apple Pay, Google Pay, BLIK, card)
- Minimize form fields: name, email, shipping address, payment. No account creation required.
- Show InPost delivery: "Wysyłka w 24h" prominently at checkout
- Shipping cost visible before checkout (or free over threshold)
- Order confirmation page + email
- Track: `checkout_started`, `payment_completed`, `order_confirmed` events

#### 3d. SEO & AI Search Optimization

> **Owner:** Senior Software Engineer (implementation) + Copywriter (content)
> **Skills:** `seo-audit`, `ai-seo`, `schema-markup`

**Brief:**

**Technical SEO (run `seo-audit` skill first):**

- Meta titles and descriptions for every page (in Polish)
- Semantic HTML (single `<h1>` per page, proper heading hierarchy)
- OG tags and Twitter cards for social sharing
- Image alt text for all product photos (descriptive, Polish)
- Sitemap.xml and robots.txt (allow all AI bots: GPTBot, PerplexityBot, ClaudeBot, Google-Extended)
- Page speed < 3 seconds on mobile

**Schema markup (use `schema-markup` skill):**

- `Product` schema on each product page (name, price, availability, description)
- `Organization` schema on homepage
- `FAQPage` schema on FAQ sections
- `BreadcrumbList` for navigation

**AI Search Optimization (use `ai-seo` skill):**

- Structure content in extractable blocks (definition blocks, FAQ blocks)
- Lead each section with a direct answer
- Keep key passages 40-60 words (optimal for snippet extraction)
- Include specific stats and citations where possible
- Don't gate content

#### 3e. Analytics & Tracking Setup

> **Owner:** Performance Lead + Senior Software Engineer
> **Skills:** `analytics-tracking`

**Brief:**

**Setup (before any traffic or ad spend):**

- GA4 property + data stream for zioo.pl
- GTM container installed
- Meta Pixel installed (for Meta ad retargeting)
- Google Ads conversion tag (if running Google Ads)

**Event tracking plan:**

| Event               | Trigger              | Properties                            |
| ------------------- | -------------------- | ------------------------------------- |
| `page_view`         | Every page load      | page_title, page_location             |
| `product_viewed`    | Product page loaded  | product_name, product_category, price |
| `add_to_cart`       | Add to cart clicked  | product_name, quantity, value         |
| `checkout_started`  | Checkout page loaded | cart_value, item_count                |
| `payment_completed` | Stripe success       | order_value, payment_method, items    |
| `cta_clicked`       | Any CTA button       | button_text, location                 |

**UTM strategy:**

- All paid traffic tagged: `utm_source=meta/google`, `utm_medium=cpc`, `utm_campaign=[campaign_name]`
- All social links tagged: `utm_source=instagram/tiktok`, `utm_medium=organic`
- Document all UTMs in a shared spreadsheet

**Conversions to mark in GA4:**

- `payment_completed` (primary)
- `add_to_cart` (secondary)
- `checkout_started` (secondary)

---
