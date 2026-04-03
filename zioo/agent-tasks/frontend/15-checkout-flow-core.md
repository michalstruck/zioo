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

- [ ] Załaduj InPost Geowidget JS (`next/script`)
- [ ] Renderuj widget warunkowo (gdy wybrany "Paczkomat")
- [ ] Nasłuchuj event `onSelect` → zapisz `name` + adres paczkomatu w state
- [ ] Wyświetl wybrany paczkomat jako tekst z opcją "Zmień"
- [ ] Responsive: widget musi działać na mobile
- [ ] Z-index / modal handling: widget nie może być przycięty przez inne elementy

---
