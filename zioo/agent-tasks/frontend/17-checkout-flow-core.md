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

## Feature 5: Strona potwierdzenia (`/checkout/success`)

### Kontekst

Po udanej płatności — thank you page. Dane z Stripe Session (server-side fetch).

Skill: **page-cro** — thank-you page jako touchpoint marketingowy.

### Zadania

- [ ] Pobierz Stripe Session server-side (`stripe.checkout.sessions.retrieve`)
- [ ] Wyświetl: "Dziękujemy za zamówienie! 🎉"
- [ ] Podsumowanie: produkty, kwota, metoda wysyłki
- [ ] "Potwierdzenie wysłane na [email]"
- [ ] Link "Wróć do sklepu"
- [ ] Ochrona: nie pozwól na odwiedzenie bez ważnego `session_id`

---
