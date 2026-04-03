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

## Feature 2: Strona Checkout (`/checkout`)

### Kontekst

Dedykowana strona checkout. Guest checkout (bez logowania). Cały copy w języku polskim.

Na tej stronie zbieramy TYLKO: dane kontaktowe + wybór wysyłki.
Płatność obsługuje Stripe Embedded Checkout (osobny krok, zero custom UI).

Skill: **signup-flow-cro**, **form-cro** — minimalizacja pól, redukcja friction.

### Zadania

#### 2.1 Routing i struktura

- [ ] Utwórz route `/checkout` — `app/checkout/page.tsx`
- [ ] Utwórz route `/checkout/success` — `app/checkout/success/page.tsx`
- [ ] Guard: redirect na stronę główną jeśli koszyk pusty
- [ ] Minimalistyczny layout: logo + "← Wróć do sklepu" (bez pełnego headera)

#### 2.2 Formularz danych kontaktowych (nasz, nie Stripe'a)

- [ ] Pola: Imię, Nazwisko, Email, Telefon (opcjonalny — wymagany tylko dla kuriera)
- [ ] Walidacja client-side (Zod lub natywna)
- [ ] Poprawne `autocomplete` atrybuty (mobile auto-fill)
- [ ] Mobile-first: duże pola dotykowe

#### 2.3 Wybór metody wysyłki

- [ ] Radio buttons: InPost Paczkomat / Kurier InPost
- [ ] Wyświetl koszt przy każdej opcji (stałe kwoty)
- [ ] **Paczkomat:** Po wybraniu → pokaż InPost Geowidget (mapa) do wyboru paczkomatu
- [ ] Wybrany paczkomat = tekst z adresem + przycisk "Zmień"
- [ ] **Kurier:** Pokaż formularz adresu (Ulica, Kod pocztowy XX-XXX, Miasto)
- [ ] Aktualizuj total po wyborze

#### 2.4 Podsumowanie zamówienia

- [ ] Lista produktów: nazwa × ilość = cena
- [ ] Koszt wysyłki
- [ ] Total
- [ ] Checkbox regulamin + polityka prywatności (wymagany prawnie)
- [ ] Przycisk "Przejdź do płatności" → tworzy Stripe Session i pokazuje Embedded Checkout

#### 2.5 Stylowanie

- [ ] Design zgodny z design systemem Zioo (Clinical Naturalism)
- [ ] Trust signals: ikony bezpieczeństwa, loga metod płatności (BLIK, Visa, MC, Apple Pay)
- [ ] Micro-animacje przy przejściach
- [ ] Responsive — mobile first

---
