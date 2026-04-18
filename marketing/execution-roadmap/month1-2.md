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

## Month 1-2: First Paid Tests (1500 PLN)

> **Total budget:** 1500 PLN across Meta + Google + Retargeting
> **Goal:** Find ONE audience-message combination that produces CPA < 60 PLN. Not scale. Not profit. Learn.
> **Pre-requisites:** Analytics tracking live (Brief 3e), website live with checkout (Brief 3c), at least 5 organic posts published (Brief 5)

### 9. Meta Ads (~800 PLN)

> **Owner:** Performance Lead
> **Skills:** `paid-ads`, `ad-creative`
> **Deliverable:** 3 ad sets running, weekly performance reports, winning creative identified

**Brief:**

This is NOT a brand awareness campaign. This is a surgical test to find product-market fit signal in paid channels. Every złoty must produce data.

**Campaign architecture:**

```
Campaign: Zioo — Conversions — Purchase
├── Ad Set 1: Wellness (budget: ~270 PLN / ~9 PLN/day)
│   ├── Audience: Interests → wellness, zdrowy styl życia, yoga, medytacja
│   ├── Age: 18-30, Poland, Polish language
│   └── Placements: Instagram Feed + Stories (manual)
│
├── Ad Set 2: Streetwear/Culture (budget: ~270 PLN / ~9 PLN/day)
│   ├── Audience: Interests → streetwear, hip-hop, skate, vinyl, muzyka alternatywna
│   ├── Age: 18-30, Poland, Polish language
│   └── Placements: Instagram Feed + Stories (manual)
│
└── Ad Set 3: Broad (budget: ~260 PLN / ~9 PLN/day)
    ├── Audience: No interest targeting — 18-30, Poland only
    ├── Let Meta's algorithm find the right people
    └── Placements: Advantage+ (let Meta decide)
```

**Creative strategy (use `ad-creative` skill to generate):**

Don't produce new content. Re-use the top organic content from Brief #5 as ads. The organic algorithm already told you what resonates.

| Ad # | Source                          | Format | Primary text (Polish)                                                                  | Headline           | CTA      |
| ---- | ------------------------------- | ------ | -------------------------------------------------------------------------------------- | ------------------ | -------- |
| Ad 1 | Best-performing Reel (unboxing) | Video  | "Mieszanki ziołowe z terpenami z konopi. Naturalna kompozycja botaniczna."             | "Odkryj Zioo"      | Shop Now |
| Ad 2 | Lifestyle flat-lay photo        | Image  | "Chill — mieszanka na wieczorny relaks. Dziewanna, malina, pokrzywa, lawenda, melisa." | "Zamów swój blend" | Shop Now |
| Ad 3 | Brewing Reel                    | Video  | "Herbata z czegoś nowego. Spróbuj mieszanki z terpenami."                              | "Sprawdź"          | Shop Now |

**Ad copy rules:**

- All copy in Polish
- Apply `COPY_DICTIONARY.md` — zero banned terms, zero health claims
- Primary text: max 125 characters (before "more" truncation on mobile)
- No mention of smoking, combustion, inhalation, or any form of consumption other than tea/aromatherapy
- Run all text through `humanizer` — ads must feel like a friend's recommendation, not a brand pitch

**Creative specs:**

- Video: 9:16 vertical, under 30 seconds, subtitles burned in
- Image: 1:1 or 9:16, high-res (min 1080px), no text overlay exceeding 20% of image area
- Thumbnail: first frame must be visually compelling (drives CTR in feed)

**Optimization routine:**

| When    | Action                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------- |
| Day 1-3 | Let ads run without changes. Collect data. Don't panic.                                              |
| Day 4   | Check CTR per ad set. If CTR < 1%, creative issue — swap creative.                                   |
| Day 7   | First real check. Compare CPA across ad sets.                                                        |
| Day 7+  | Pause any ad set with CPA > 60 PLN (after 500+ impressions). Reallocate budget to winner.            |
| Day 14  | Pause any ad set with CPA > 50 PLN. At this point you need clear signal.                             |
| Day 21  | If no ad set is profitable at CPA < 40 PLN, pause everything. Re-evaluate creative and landing page. |
| Day 30  | Write performance report (see reporting template below).                                             |

**Scaling rules (only if CPA < 40 PLN):**

- Increase winning ad set budget by 20% per day (not more — sudden jumps reset Meta's algorithm)
- Create 1 lookalike audience from purchasers (once you have 50+ purchases — may take a while)
- Duplicate winning creative into a new ad set with slightly broader targeting

**Kill criteria:**

- CPA > 60 PLN after 500 impressions per ad set → pause that ad set
- No purchases after 1500 impressions → creative/landing page problem, not audience problem
- CTR < 0.5% → creative is not stopping the scroll, swap it

**What can go wrong and what to do:**

| Problem                             | Likely cause                             | Fix                                                                                                        |
| ----------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| High CTR but no purchases           | Landing page doesn't convert             | Run `page-cro` skill on zioo.pl                                                                            |
| Low CTR (< 1%)                      | Creative isn't compelling                | Test new creative from organic batch                                                                       |
| High CPA (> 60 PLN) with decent CTR | Wrong audience or price too high         | Test different ad set, check pricing                                                                       |
| Ad rejected by Meta                 | Policy violation (likely herbal product) | Review ad text, remove anything Meta could flag. Appeal if unjustified.                                    |
| Account restricted                  | Meta flags herbal products aggressively  | Don't use the word "konopie" in ad text. Use "botaniczna", "ziołowa" instead. Have a backup account ready. |

**Meta policy note:** Meta is aggressive about herbal/cannabis-adjacent products. Expect possible ad rejections. Mitigation:

- Never use "konopie" or "terpeny z konopi" in META ad copy — use "kompozycja botaniczna" or "mieszanka ziołowa" instead
- No product close-ups that look like cannabis
- Landing page must clearly show it's an herbal tea / aromatherapy product
- If account gets flagged, appeal immediately and have a backup Meta Business account ready

**Before launch checklist:**

- [ ] Meta Business Manager set up with payment method
- [ ] Meta Pixel installed on zioo.pl and verified
- [ ] `purchase` / `payment_completed` custom conversion event created and firing
- [ ] Test purchase completed to verify event fires
- [ ] Landing page loads < 3 sec on mobile (test: Google PageSpeed Insights)
- [ ] UTMs configured: `utm_source=meta&utm_medium=cpc&utm_campaign=zioo_launch_[adset_name]`
- [ ] All ad creatives reviewed vs. `COPY_DICTIONARY.md` (zero banned terms)
- [ ] No smoke/combustion/inhalation visuals in any creative
- [ ] Ad text reviewed for Meta policy compliance (no "konopie" in ad copy)
- [ ] Backup creatives ready in case of rejection

---

### 10. Google Search (~400 PLN)

> **Owner:** Performance Lead
> **Skills:** `paid-ads`
> **Deliverable:** Search campaign live, keyword performance report, negative keyword list maintained

**Brief:**

Google Search captures intent — people actively looking for what you sell. This is your highest-intent channel. The budget is small, so focus only on keywords that signal purchase intent.

**Campaign architecture:**

```
Campaign: Zioo — Search — Poland
├── Ad Group 1: Branded (budget: ~100 PLN)
│   ├── Keywords: "zioo", "zioo zioła", "zioo sklep", "zioo mieszanki"
│   ├── Match type: Exact + Phrase
│   └── Purpose: Capture anyone who's heard of us (from seeding, social, word-of-mouth)
│
├── Ad Group 2: Category Intent (budget: ~200 PLN)
│   ├── Keywords: "mieszanki ziołowe", "zioła na relaks", "mieszanka do aromatyzacji",
│   │   "herbata ziołowa na spokój", "zioła do aromatyzacji"
│   ├── Match type: Phrase + Broad (with careful monitoring)
│   └── Purpose: Capture people searching for what we sell but who don't know Zioo yet
│
└── Ad Group 3: Problem Intent (budget: ~100 PLN)
    ├── Keywords: "naturalny relaks", "zioła na stres", "naturalna alternatywa"
    ├── Match type: Phrase
    └── Purpose: Capture people searching for the problem we solve
```

**Negative keywords (add before launch):**

```
palenie, tytoń, papierosy, vape, vaping, cbd, thc, marihuana,
trawa, joint, blunt, bongo, fajka, e-papieros, nikotyna,
receptura, przepis, hodowla, nasiona, sadzonki, uprawa
```

Update this list weekly based on search terms report.

**Ad copy templates (use `ad-creative` skill for final versions):**

Ad Group 1 (Branded):

```
Headline 1: Zioo — Mieszanki Ziołowe
Headline 2: Kompozycje Botaniczne z Terpenami
Headline 3: Wysyłka w 24h z InPost
Description 1: Naturalne mieszanki ziołowe. 4 unikalne blendy. Zamów online na zioo.pl.
Description 2: Fresh, Chill, Focus, Sleep — odkryj swój ulubiony blend. Bezpieczna płatność BLIK/kartą.
```

Ad Group 2 (Category):

```
Headline 1: Mieszanki Ziołowe — Zioo
Headline 2: Naturalne Kompozycje Botaniczne
Headline 3: Od 19 PLN — Zamów Online
Description 1: Autorskie blendy z dziewanny, maliny, pokrzywy i szałwii. Wzbogacone terpenami. Sprawdź nasze 4 kompozycje.
Description 2: Idealne jako herbata ziołowa lub mieszanka do aromatyzacji. Darmowa dostawa od 34,99 PLN.
```

Ad Group 3 (Problem):

```
Headline 1: Naturalny Relaks z Ziołami
Headline 2: Mieszanki Ziołowe Zioo
Headline 3: Bez Chemii, Bez Uzależnienia
Description 1: Szukasz naturalnej alternatywy? Nasze mieszanki botaniczne pomagają się odprężyć. Zamów na zioo.pl.
Description 2: Kompozycje z dziewanny, pokrzywy i terpnów. Sprawdź 4 unikalne blendy.
```

**Ad copy rules:**

- All copy in Polish
- Zero banned terms from `COPY_DICTIONARY.md`
- No health claims (no "leczy", "pomaga na", "zdrowotny")
- Use "kompozycja botaniczna" and "mieszanka ziołowa" — never "konopie" in ad text
- Include price or "od X PLN" when possible (filters out non-buyers)
- Include delivery USP ("Wysyłka w 24h")

**Bid strategy:**

1. Start with Manual CPC (max CPC: ~2-3 PLN for category/problem, ~1 PLN for branded)
2. After 30+ conversions (may take 2+ months at this budget), switch to Target CPA
3. Target CPA: set to 80% of your observed average CPA

**Quality Score checklist (affects ad position and costs):**

- [ ] Landing page matches ad copy keywords (if ad says "mieszanki ziołowe", landing page headline must include it)
- [ ] Landing page loads < 3 sec on mobile
- [ ] Landing page has clear CTA above the fold
- [ ] Ad copy includes at least 1 keyword per headline
- [ ] Ad extensions set up: sitelinks (blends, contact), callouts ("Wysyłka 24h", "Naturalne składniki"), structured snippets

**Optimization routine:**

| When      | Action                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------- |
| Day 3     | Check search terms report. Add irrelevant queries to negative keywords.                             |
| Weekly    | Review search terms, add negatives, pause low-performing keywords (< 1% CTR after 100+ impressions) |
| Bi-weekly | Compare CPC and CPA across ad groups. Shift budget to best performer.                               |
| Monthly   | Full keyword review. Add new keyword ideas. Pause non-performing ad groups.                         |

**Deliverables:**

- [ ] Google Ads account set up with billing
- [ ] Campaign structured per above
- [ ] Ad extensions configured
- [ ] Negative keyword list added
- [ ] Google Ads conversion tag installed and verified
- [ ] UTMs: `utm_source=google&utm_medium=cpc&utm_campaign=zioo_search_[adgroup]`
- [ ] Search terms reviewed weekly (put in calendar)

---

### 11. Retargeting (~300 PLN)

> **Owner:** Performance Lead
> **Skills:** `paid-ads`, `ad-creative`
> **Deliverable:** Retargeting audiences live, dynamic and static ads running

**Brief:**

Retargeting is the highest-ROI ad spend. These people already visited zioo.pl — they know you exist. They just need a push. With a 300 PLN budget, keep it focused.

**Audience segmentation:**

| Audience        | Definition                                                  | Size estimate  | Priority                      |
| --------------- | ----------------------------------------------------------- | -------------- | ----------------------------- |
| Cart abandoners | Added to cart but didn't purchase (last 14 days)            | Small at first | Highest — closest to purchase |
| Product viewers | Viewed a product page but didn't add to cart (last 14 days) | Medium         | High                          |
| Site visitors   | Visited any page but didn't view a product (last 30 days)   | Largest        | Lower                         |

**Exclude:** Anyone who completed a purchase (use `payment_completed` event). Don't waste budget showing ads to existing customers.

**Campaign setup:**

```
Campaign: Zioo — Retargeting
├── Ad Set 1: Cart Abandoners (budget: ~120 PLN / ~4 PLN/day)
│   ├── Audience: Custom audience — add_to_cart event, last 14 days
│   ├── Exclude: purchase event
│   └── Creative: Product-specific reminder + urgency
│
├── Ad Set 2: Product Viewers (budget: ~120 PLN / ~4 PLN/day)
│   ├── Audience: Custom audience — product_viewed event, last 14 days
│   ├── Exclude: add_to_cart + purchase events
│   └── Creative: Product showcase + social proof (if available)
│
└── Ad Set 3: All Visitors (budget: ~60 PLN / ~2 PLN/day)
    ├── Audience: Custom audience — all website visitors, last 30 days
    ├── Exclude: product_viewed + add_to_cart + purchase events
    └── Creative: Brand story / value proposition
```

**Creative per ad set:**

| Ad Set          | Message (Polish)                                                | Visual                                                                         | CTA           |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------- |
| Cart abandoners | "Twój blend czeka 🌿 Dokończ zamówienie na zioo.pl"             | Product photo from their viewed product (or generic if dynamic isn't possible) | "Zamów teraz" |
| Product viewers | "Chill, Fresh, Focus czy Sleep? Znajdź swój blend."             | Carousel of 4 blend photos                                                     | "Sprawdź"     |
| All visitors    | "Mieszanki ziołowe z terpenami z konopi. Naturalna kompozycja." | Lifestyle photo or best-performing organic video                               | "Odkryj Zioo" |

**Frequency cap:** 3-5 impressions per person per week. More than that feels stalky and annoys people. Small retargeting audiences burn out fast.

**Creative rotation:** Swap creatives every 2 weeks to combat ad fatigue. In retargeting, people see the same ad repeatedly — fresh creative keeps it effective.

**Dynamic product ads (DPA) — optional for later:**
If the product catalog is small (8 products), DPA may not be worth the setup effort now. Revisit when there are 15+ products. For now, static creatives are fine.

**Deliverables:**

- [ ] Custom audiences created in Meta (cart abandoners, product viewers, all visitors)
- [ ] Exclusion audiences set up (purchasers)
- [ ] 3 ad sets live with appropriate creatives
- [ ] Frequency cap configured
- [ ] Creative rotation scheduled (bi-weekly)
- [ ] UTMs: `utm_source=meta&utm_medium=retargeting&utm_campaign=zioo_rt_[audience]`

---
