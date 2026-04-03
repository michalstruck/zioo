# Epic: Checkout Flow — Pełny e2e

> Architektura: **Stripe Embedded Checkout + InPost Geowidget** → 2 zewnętrzne drop-in komponenty.
> Guest Checkout

## Kontekst

1. **Koszty wysyłki** — InPost Paczkomat 13.99 PLN, Kurier 16.99 PLN. Stałe kwoty.
2. **Darmowa wysyłka** — próg od 99zl
3. **Wysyłka** — tylko InPost
4. **Email transakcyjny** — Resend
5. **Konto Stripe** — setup completed

---

## Feature 4: Stripe Embedded Checkout (drop-in)

### Kontekst

Stripe Embedded Checkout = gotowy iframe z formularzem płatności. Stripe sam renderuje: wybór metody (BLIK / karty / Apple Pay / Google Pay), dane karty, 3D Secure, obsługę błędów. **Zero custom payment UI.**

### Zadania

- [x] `bun add stripe @stripe/stripe-js @stripe/react-stripe-js`
- [x] Env: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` w `.env.local`
- [x] Server Action `createCheckoutSession`:
  - `line_items` — produkty z koszyka (nazwa, cena, ilość)
  - Shipping cost jako osobny `line_item` lub `shipping_options`
  - `metadata` — dane kontaktowe, wybrany paczkomat/adres kuriera
  - `success_url` → `/checkout/success?session_id={CHECKOUT_SESSION_ID}`
  - `cancel_url` → `/checkout`
  - `mode: 'payment'`
- [x] Komponent `<EmbeddedCheckout />` — renderuje Stripe iframe po kliknięciu "Przejdź do płatności"
- [x] **Ceny walidowane server-side** (nigdy nie ufać klientowi)
- [x] Włącz w Stripe Dashboard: BLIK, P24, Apple Pay, Google Pay, karty
- [x] Wyczyść koszyk po udanej płatności (redirect na success)

---
