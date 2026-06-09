# Epic: QR Label → Product Mapping & Redirect

## Context

Every zioo package has a QR code linking to `zioo.pl/?label={productId}`. We need a system that maps these label IDs to specific products and redirects users to a dedicated product description page. Labels correspond to exactly one `ProductId` from `lib/products.ts`.

This is a physical-product traceability feature. The label IDs are assigned during production. The mapping must be reliable since QR codes on packages are permanent.

## Features & Tasks

- Include all 7 products (fresh, chill, focus, sleep, chill-terpene, focus-terpene, sleep-terpene). Discovery pack (`zestaw-startowy`) does NOT have a QR label — it's an online-only bundle.

### Feature 1: QR Redirect Middleware

- **Task 1: Implement Redirect from `/?label={id}`**
  - Use Next.js `middleware.ts` (root level) or a `rewrites`/`redirects` config in `next.config.ts` to handle `/?label={id}`.
  - On match: redirect (HTTP 302) to `/produkt/{productId}` (the new product description page route — see frontend tasks).
  - On unknown label ID: redirect to `/store` as a fallback with no error — the user still lands somewhere useful.
  - **Important:** this must be a server-side redirect, not client-side. The QR code should resolve to the final URL immediately. Use middleware for this since query-param-based redirects can't be done via `next.config.ts` redirects.

## Verification

- Visiting `zioo.pl/?label=fresh-01` (example) should 302 → `/produkt/fresh`.
- Visiting `zioo.pl/?label=nonexistent` should 302 → `/store`.
- Visiting `zioo.pl/` (no label param) should behave as today — render the homepage.
