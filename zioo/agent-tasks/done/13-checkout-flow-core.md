# Epic: Checkout Flow — Pełny e2e

> Architektura: **Stripe Embedded Checkout + InPost Geowidget** → 2 zewnętrzne drop-in komponenty.

1. **Koszty wysyłki** — InPost Paczkomat 13.99 PLN, Kurier 16.99 PLN. Stałe kwoty.
2. **Darmowa wysyłka** — próg od 99zl
3. **Wysyłka** — tylko InPost
4. **Email transakcyjny** — Resend
5. **Konto Stripe** — setup completed

---

## Feature 1: Rozszerzenie modelu produktu o cenę

### Zadania

- [x] Dodaj helper `formatPrice(price: number): string` — zwraca np. "39,99 zł"
- [x] Zaktualizuj `ProductCard` — wyświetl cenę produktu
- [x] Zaktualizuj `ProductDetails` — wyświetl cenę produktu
- [x] Zaktualizuj `CartDrawer` — wyświetl cenę × ilość per pozycja + subtotal + przycisk "Do kasy"

---
