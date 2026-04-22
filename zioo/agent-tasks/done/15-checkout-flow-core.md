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

## Feature 3: InPost Geowidget (drop-in)

### Kontekst

InPost udostępnia gotowy JavaScript widget (Geowidget) — interaktywna mapa z wyszukiwarką paczkomatów. Embed na stronie checkout. **Zero custom mapy.** Widget emituje event z danymi wybranego paczkomatu.

### Zadania

- [x] Załaduj InPost Geowidget JS (`next/script`)
- [x] Renderuj widget warunkowo (gdy wybrany "Paczkomat")
- [x] Nie deloaduj widgetu przy zmianie sposobu dostawy, lub wybraniu paczkomatu (brak flickeringu)
- [x] Nasłuchuj event `onSelect` → zapisz `name` i `adress_details`
- [x] Wyświetl wybrany paczkomat jako tekst z opcją "Zmień"
- [x] Responsive: widget musi działać na mobile
- [x] Z-index / modal handling: widget nie może być przycięty przez inne elementy

---
