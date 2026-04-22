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

## Feature 6: Webhook + email potwierdzenia

### Kontekst

Stripe webhook powiadamia o udanej płatności. Wysyłamy email do klienta + do nas. Brak bazy danych — zamówienia śledzone w panelu Stripe.

### Zadania

- [ ] API Route: `app/api/webhooks/stripe/route.ts`
- [ ] Weryfikacja podpisu (`stripe.webhooks.constructEvent`)
- [ ] Event `checkout.session.completed`:
  - [ ] Wyślij email potwierdzenia do klienta (Resend / Nodemailer)
  - [ ] Wyślij email z detalami zamówienia do sprzedawcy (wewnętrzny)
- [ ] Email template: prosty, responsywny, z logo zioo, po polsku
- [ ] Stripe CLI do testowania webhooków lokalnie (`stripe listen --forward-to`)
- [ ] Fallback: jeśli email się nie wyśle → loguj błąd (nie blokuj flow)

---
