# Checkout Research Findings

## Rekomendacja: architektura minimalnej integracji

### Combo: **Stripe Embedded Checkout + InPost Geowidget**

MVP bez poczty polskiej

Tylko **2 zewnętrzne komponenty**. Żadnych ręcznych formularzy płatności.

```
Koszyk (Cart Drawer)
  → "Do kasy" → /checkout
     → [Nasz formularz]:
        • Imię, Nazwisko, Email, Telefon (opcjonalny)
        • Wybór: Paczkomat vs Kurier
        • [InPost Geowidget] ← drop-in mapa do wyboru paczkomatu
        • Podsumowanie (produkty + wysyłka)
     → "Zapłać" →
        • Server Action: tworzy Stripe Checkout Session
        • [Stripe Embedded Checkout] ← drop-in iframe z BLIK/karty/Apple Pay/Google Pay
  → /checkout/success
     ← Stripe webhook potwierdza płatność
     ← Email z potwierdzeniem (Resend)
```

### Co piszemy ręcznie (minimum):

| Element                         | Szacunek                      |
| ------------------------------- | ----------------------------- |
| Formularz kontaktowy + adres    | ~1 komponent React            |
| Radio: Paczkomat/Kurier         | ~20 linii JSX                 |
| Embed InPost Geowidget          | ~30 linii (script + listener) |
| Stripe Session (Server Action)  | ~25 linii                     |
| Stripe Embedded Checkout widget | ~15 linii                     |
| Webhook + email                 | ~50 linii                     |
| Success page                    | ~1 komponent                  |

---

## 4. User Login — Guest Checkout ✅

**Guest Checkout (bez rejestracji).** Zgodne z architekturą (brak backendu/DB). Konwersja najwyższa. Stripe zbiera email w swoim Embedded Checkout. User panel → przyszła iteracja.

---

## 5. Misc

1. **Email transakcyjny** — Resend (najprostszy, darmowy plan 100 emaili/dzień)
2. **Etykiety wysyłkowe** — na start ręcznie w InPost Manager
