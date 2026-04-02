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

## Month 2-3: Optimize & Scale

### 12. Analyze & Decide

> **Owner:** CMO + Performance Lead
> **Skills:** `analytics-tracking`, `page-cro`
> **Deliverable:** Month 1 Performance Report + strategic decision on what to scale

**Brief:**

This is the most important brief in the entire roadmap. Without disciplined analysis, you'll waste Month 2's budget repeating Month 1's mistakes. The goal is ONE clear answer: **"Where does the next 1000 PLN go?"**

**Weekly review cadence (start from Week 1 of paid):**

| Day     | Action                                           | Owner                  |
| ------- | ------------------------------------------------ | ---------------------- |
| Monday  | Pull GA4 + Meta + Google Ads data                | Performance Lead       |
| Monday  | Update tracking spreadsheet with weekly numbers  | Performance Lead       |
| Tuesday | Review with CMO — flag problems, propose changes | CMO + Performance Lead |
| Friday  | Implement changes (pause/scale/swap creatives)   | Performance Lead       |

**Monthly performance report template:**

```markdown
# Month [X] Performance Report — Zioo

## Executive Summary

[2-3 sentences: how did the month go? Are we on track?]

## Key Metrics

| Metric                | Target   | Actual | Status   |
| --------------------- | -------- | ------ | -------- |
| Website sessions      | 500+     | \_\_\_ | 🟢/🟡/🔴 |
| Conversion rate       | 2%+      | \_\_\_ | 🟢/🟡/🔴 |
| Total orders          | 10+      | \_\_\_ | 🟢/🟡/🔴 |
| Average order value   | 35+ PLN  | \_\_\_ | 🟢/🟡/🔴 |
| CPA (Meta)            | < 60 PLN | \_\_\_ | 🟢/🟡/🔴 |
| CPA (Google)          | < 60 PLN | \_\_\_ | 🟢/🟡/🔴 |
| ROAS (blended)        | > 1.5    | \_\_\_ | 🟢/🟡/🔴 |
| IG followers          | 200+     | \_\_\_ | 🟢/🟡/🔴 |
| TikTok followers      | 100+     | \_\_\_ | 🟢/🟡/🔴 |
| Organic reach (total) | 5000+    | \_\_\_ | 🟢/🟡/🔴 |
| Email list size       | 50+      | \_\_\_ | 🟢/🟡/🔴 |
| Community members     | 20+      | \_\_\_ | 🟢/🟡/🔴 |

## Channel Breakdown

### Meta Ads

- Spend: \_\_\_ PLN
- Purchases: \_\_\_
- CPA: \_\_\_ PLN
- Best ad set: \_\_\_
- Best creative: \_\_\_
- Action: [Scale / Pause / Test new creative]

### Google Search

- Spend: \_\_\_ PLN
- Clicks: \_\_\_
- Conversions: \_\_\_
- CPA: \_\_\_ PLN
- Best keywords: \_\_\_
- Action: [Scale / Pause / Add keywords]

### Organic Social

- Posts published: \_\_\_
- Best post (reach): \_\_\_
- Best post (engagement): \_\_\_
- Follower growth: \_\_\_

### Micro-Seeding

- People seeded: \_\_\_
- Organic posts generated: \_\_\_
- Conversions from seedees: \_\_\_

## What Worked

[3-5 bullet points]

## What Didn't Work

[3-5 bullet points]

## Decisions for Month 2

[Specific actions with budget allocation]
```

**Decision matrix — where does the next budget go?**

| Scenario                               | Decision                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------ |
| Meta CPA < 40 PLN, Google CPA > 60 PLN | Scale Meta, pause Google. Move 80% of budget to winning Meta ad set.                 |
| Google CPA < 40 PLN, Meta CPA > 60 PLN | Scale Google, pause Meta. Add more keywords and budget.                              |
| Both < 50 PLN                          | Keep both. Increase budget 20% on the lower-CPA channel.                             |
| Both > 60 PLN                          | Pause both. Problem is the landing page or offer, not the ads. Run `page-cro` skill. |
| Organic > Paid in conversions          | Double down on organic. Add more content. Defer paid to Month 3.                     |

**What to measure beyond conversions:**

- Which blend sells best? (May inform which to feature in ads)
- What's the split between regular vs. terpene-infused? (Pricing and positioning signal)
- Where do customers come from geographically? (May inform future targeting)
- What time of day do purchases happen? (May inform ad scheduling)
- Which product page has the highest bounce rate? (Fix that page first)

**Deliverables:**

- [ ] Weekly tracking spreadsheet maintained
- [ ] Month 1 Performance Report delivered to CEO
- [ ] Clear decision on Month 2 budget allocation
- [ ] Landing page improvements identified (if conversion rate < 2%)
- [ ] Winning audience/creative combinations documented

---

### 13. Retention Flows

> **Owner:** Copywriter (copy) + Senior Software Engineer (implementation)
> **Skills:** `email-sequence`, `referral-program`, `humanizer`, `copy-editing`
> **Deliverable:** Post-purchase email sequence live, referral mechanics defined

**Brief:**

A customer who buys once is worth X. A customer who buys three times is worth 3X but costs nearly 0 to acquire again. Retention is where the actual profit lives, especially when your acquisition budget is 1500 PLN.

**Tool choice: Brevo (formerly Sendinblue) over Mailchimp.**

Rationale: Brevo's free tier gives 300 emails/day (unlimited contacts). Mailchimp limits to 500 contacts on free. For a new brand expecting slow growth, Brevo is more generous. Both support automation flows.

If already using another tool, that's fine — the email content is platform-agnostic.

**Post-purchase email sequence:**

| #   | Timing                 | Subject line (Polish)                             | Content                                                                                                                                                                                 | Goal                                  |
| --- | ---------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 1   | Immediately            | "Zamówienie potwierdzone ✓"                       | Order confirmation with details, delivery timeline, "Wysyłka w 24h z InPost". Keep it transactional but warm.                                                                           | Reduce anxiety, set expectations      |
| 2   | Day 1 (after shipment) | "Twój blend jest w drodze 📦"                     | Shipping notification with InPost tracking link. Add: "Co zrobisz ze swoim blendem? Herbata? Aromatyzacja? Daj znać!"                                                                   | Build anticipation, open conversation |
| 3   | Day 5                  | "Jak smakuje [blend name]?"                       | Check-in. Ask for feedback (reply-to or quick poll). Include a tip: "Najlepszy efekt? Zalej 80°C wodą i odczekaj 5 minut." Link to blog post about terpenes.                            | Engage, educate, get feedback         |
| 4   | Day 14                 | "Spróbowałeś [current blend]? Sprawdź pozostałe." | Cross-sell. If they bought Czill, suggest Fokus or Fresz. "Każdy blend to inna historia." Show other blends with links.                                                                 | Increase basket, drive repeat         |
| 5   | Day 30                 | "Czas na doładowanie? 🌿"                         | Repeat purchase nudge. "Twój blend pewnie się kończy. Zamów ponownie — wiesz już co lubisz." Optional: include a small incentive (10% off next order, or free blend sample with order). | Drive repeat purchase                 |
| 6   | Day 45                 | "Mamy coś nowego w Zioo"                          | Product update or new blend announcement (if applicable). If no new product, share a blog post or behind-the-scenes story.                                                              | Stay top of mind                      |

**Email design rules:**

- Plain-ish design. Not heavy HTML newsletters. Text-forward, like a friend's email.
- Brand colors for subtle accents only (sage green `#6B7F6A` highlights, not full-color headers)
- Sender name: "Zioo" or "Michał z Zioo" (personal feels better for small brands)
- Reply-to: a real monitored inbox (kontakt@zioo.pl)
- All copy in Polish, run through `humanizer`
- Apply `COPY_DICTIONARY.md` — zero banned terms
- Mobile-first design (70%+ of opens will be mobile)
- Unsubscribe link in every email (legal requirement under RODO)

**Email copy tone:**

- Short sentences. No walls of text.
- Conversational. Like a message from someone who genuinely cares about herbs.
- No corporate "Dear Customer" energy. Use "Cześć!" or "Hej!" or just start with the content.
- CTAs as buttons: "Zamów ponownie" / "Sprawdź nowe blendy" / "Daj nam znać"

**Segmentation (for later, once list > 100):**

- By blend purchased → personalized cross-sell
- By number of purchases → loyalty tier messaging
- By recency → win-back for 60+ day inactive

---

**Referral program:**

> **Owner:** CMO (design) + Senior Software Engineer (implementation)
> **Skills:** `referral-program`

**Mechanic:**

```
Existing customer shares a unique referral link →
Friend clicks link and makes a purchase →
Both get a reward
```

**Reward structure:**

| Who                          | Reward                                             | Why this amount                                                                  |
| ---------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| Referrer (existing customer) | Free blend sample (2-3g) added to their next order | Near-zero cost (~10gr), tangible, encourages repeat purchase                     |
| Referred friend              | 10% off first order                                | Low enough to not destroy margins, meaningful enough to tip a buyer on the fence |

**Implementation options (cheapest first):**

1. **Manual (Week 1):** Generate unique discount codes in Stripe/store. Give each customer their own code. Track in spreadsheet. No dev work needed. Does not scale past 50 referrers.

2. **Semi-automated (Month 2):** Use Brevo or store's built-in referral feature. Auto-generate codes, auto-track. Requires some setup.

3. **Dedicated tool (Month 3+):** If referrals show traction, use a tool like ReferralCandy, Stamped.io, or similar. Monthly cost ~$50-100 — only worth it at scale.

**Start with option 1.** Don't over-engineer this. If 5 people refer friends in Month 1, it's a success. Build the system when there's demand, not before.

**Referral messaging:**

In post-purchase email #5 (Day 30), add:

```
Podoba Ci się Zioo? Poleć nas znajomemu.
Oboje dostajecie coś ekstra:
🌿 Ty: darmowa próbka blenda do następnego zamówienia
💰 Twój znajomy: 10% zniżki na pierwsze zamówienie
Twój kod polecający: [UNIQUE_CODE]
Wyślij ten link: zioo.pl/?ref=[UNIQUE_CODE]
```

**On zioo.pl:** Add a small "Poleć znajomemu" section in the footer or on the order confirmation page.

**Tracking:**

- Track referral codes in the same spreadsheet as micro-seeding (Brief #7) or a dedicated tab
- Columns: referrer name, referrer email, code, # of uses, # of conversions, rewards sent

**Success metrics:**

- 10%+ of customers share their referral code (from email open data)
- 5%+ of shared codes result in a purchase
- Track: is the referred customer's LTV comparable to a directly acquired customer?

**Deliverables:**

- [ ] Brevo account created and configured
- [ ] 6-email post-purchase sequence built and tested
- [ ] Email templates designed (mobile-first, plain-ish)
- [ ] All email copy written in Polish and reviewed with `humanizer`
- [ ] All copy checked against `COPY_DICTIONARY.md`
- [ ] Referral codes generated (manual, 20-50 unique codes to start)
- [ ] Referral messaging added to email #5
- [ ] "Poleć znajomemu" section added to site footer or order confirmation
- [ ] Tracking spreadsheet ready

---

## Priority Call

> **If I had to pick the two things to do TODAY:**
>
> 1. Create `product-marketing-context.md` (15 min, unblocks every skill)
> 2. Start on label design (unblocks photos → unblocks website → unblocks ads → unblocks everything)
