import { Button } from "@/components/ui/button";
import { AnimatedHeroCards } from "@/components/animated-hero-cards";
import { Leaf, ArrowRight, Package, Truck, CreditCard } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Product, PRODUCT_ID, products } from "@/lib/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import * as React from "react";

function formatAnswer(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line
        .split(/(\*\*.*?\*\*)/)
        .map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <b key={j}>{part.slice(2, -2)}</b>
          ) : (
            part
          ),
        )}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

const cleanupAnswer = (text: string) => text.replace(/\*\*/g, "");

const FAQ_ITEMS = [
  {
    q: "Czy to jest legalne?",
    a: "Tak, w 100%. Nasze mieszanki to zioła z legalnym **ekstraktem terpenowym z konopi**. Żaden składnik nie podlega żadnym ograniczeniom prawnym w Polsce. **Brak** THC, CBD i substancji uzależniających.",
  },
  {
    q: "Czym różni się linia Terpene od Natural?",
    a: "Linia **Natural** to starannie dobrane i dopracowane mieszanki ziół. Linia **Terpene** została wzbogacona o naturalny ekstrakt terpenowy z konopi: **Girl Scout Cookies**, **Lemon Skunk** lub **Purple Punch**. Efekt: intensywniejszy aromat i **efekt entourage**. Skład bazowych ziół w obu liniach jest identyczny.",
  },
  {
    q: "Dlaczego saszetka ma 0.5g?",
    a: "Znasz to uczucie kiedy używasz ziół, a następnego dnia są **zwietrzałe** i **wysuszone**? 0.5g to **idealna porcja** na pojedynczą sesję. Nie musisz odmierzać, nie musisz martwić się, że susz zwietrzeje w dużym opakowaniu. Otwierasz, używasz, gotowe. **Zawsze świeże, zawsze dobre**.",
  },
  {
    q: "Jak szybko dostanę zamówienie?",
    a: "Wysyłamy w ciągu **24 godzin** od złożenia zamówienia, przez InPost. Możesz wybrać paczkomat lub kuriera. **Zamawiasz dziś - masz jutro**.",
  },
  {
    q: "Ile kosztuje dostawa?",
    a: "Zawsze 13 zł. **Darmowa od 34,99 zł** - czyli przy dwóch opakowaniach 5szt.",
  },
  {
    q: "Dlaczego zioo, a nie cokolwiek innego?",
    a: "Bo nic innego w Polsce **nie istnieje** w tej formie. Saszetki 0.5g zamiast sypkiego suszu, który zwietrzeje po tygodniu. **Dopracowane mieszanki** zamiast losowego zestawu ziół z apteki. **Profil terpenowy** z konopi, którego nie ma na polskim rynku. Skomponowane od zera, nie złożone z przypadku.",
  },
  {
    q: "Jak używać mieszanki do aromatyzacji?",
    a: "Mieszanki zioo przeznaczone są **wyłącznie do aromatyzacji** - możesz użyć ich w dyfuzorze, kominku aromatycznym lub innym urządzeniu do aromatyzacji. **Nie są** produktem spożywczym ani leczniczym. Przechowuj w suchym i zacienionym miejscu, z dala od dzieci.",
  },
];

const showcaseIds = [
  PRODUCT_ID.fresh,
  PRODUCT_ID.focusTerpene,
  PRODUCT_ID.chillTerpene,
  PRODUCT_ID.sleep,
] as const;

export default function Home() {
  const showcaseProducts = showcaseIds.map((id) =>
    products.find((p) => p.id === id),
  ) as Product[];

  const chillTerpene = products.find((p) => p.id === PRODUCT_ID.chillTerpene);
  const focusTerpene = products.find((p) => p.id === PRODUCT_ID.focusTerpene);
  const sleepTerpene = products.find((p) => p.id === PRODUCT_ID.sleepTerpene);

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: {
                "@type": "Answer",
                text: cleanupAnswer(a),
              },
            })),
          }),
        }}
      />
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden px-5 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28 lg:px-20"
      >
        {/* Primary organic background - full bleed */}
        <div
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/dark-moss-bg.png')" }}
        />
        {/* Secondary organic layer - shifted for parallax depth */}
        <div
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none bg-cover"
          style={{
            backgroundImage: "url('/dark-moss-bg.png')",
            backgroundPosition: "30% 60%",
            transform: "scale(1.3) rotate(180deg)",
          }}
        />
        {/* Gradient transition to next section */}
        <div className="absolute inset-x-0 bottom-0 -mt-6 h-16 z-0 bg-linear-to-t from-background to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <h1 className="">
              {/* COPY: main headline */}
              Zioła z profilem terpenowym.
              <span className="block text-secondary italic">
                Pierwsze w Polsce.
              </span>
            </h1>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Relaks, skupienie, orzeźwienie i spokojny sen. Dostępne z
              naturalnym ekstraktem terpenowym z konopi. Wysyłka w 24h z InPost.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <Button asChild size="lg" id="cta-hero-primary">
                <Link href="/store">
                  Wybierz swój blend
                  <ArrowRight
                    data-icon="inline-end"
                    className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                id="cta-hero-secondary"
              >
                <Link href="/store/product/zestaw-startowy">
                  Zestaw Startowy
                </Link>
              </Button>
            </div>
          </div>

          {/* Illustrations column */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <AnimatedHeroCards />
          </div>
        </div>
      </section>

      {/* ─── TRUST SIGNALS ────────────────────────────────── */}
      <section
        id="trust-signals"
        className="border-b border-border/20 bg-muted/10 py-6"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-20 flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <Truck className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Wysyłka w 24h z InPost
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <Package className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Darmowa dostawa od 34,99 zł
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <CreditCard className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              BLIK, Apple Pay, Google Pay
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <Leaf className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Saszetki 0.5g - zawsze świeże
            </span>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ──────────────────────────────────────── */}
      <section
        id="problem"
        className="px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="">
            {/* COPY: problem headline */}
            Szukałeś czegoś innego. Po prostu brakowało opcji.
          </h2>
          <div className="text-lg pt-3 font-medium text-foreground/70 space-y-6">
            {/* <p>
              Sypki susz w pudełku zwietrzeje po tygodniu. Nikt nie projektował
              tych mieszanek pod konkretny moment.
            </p> */}
            <p>
              Terpeny z konopi są od dawna dostępne jako ekstrakt. Tylko nikt
              nie połączył ich z ziołami w spójną kompozycję, spakowaną tak,
              żeby każda porcja była idealna. Do teraz.
            </p>
          </div>
          <p className="text-2xl font-heading font-semibold text-primary">
            {/* COPY: pain-to-solution bridge */}
            zioo to saszetki 0.5g - porcja idealna na raz. <br /> Zawsze świeże,
            zawsze dobre.
          </p>
        </div>
      </section>

      {/* ─── PRODUKTY ─────────────────────────────────────── */}
      <section
        id="produkty"
        className="border-t border-border/20 bg-muted/10 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="">
              {/* COPY: product showcase headline */}
              Znajdź swój moment
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              {/* COPY: product showcase subtext */} Dobierz pod nastrój. Z
              naturalnym profilem terpenowym z konopi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TERPENY ──────────────────────────────────────── */}
      <section
        id="terpeny"
        className="px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="">
              {/* COPY: terpene section headline */}
              Co to są terpeny?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              {/* COPY: terpene intro */}
              Terpeny to związki aromatyczne <b>naturalnie obecne</b> w
              roślinach, w tym w konopiach. <br />
              Każdy <b>szczep konopi</b> ma inny profil terpenowy: inny aromat,
              inne działanie. W linii Terpene infuzujemy nasze mieszanki{" "}
              <b>naturalnym ekstraktem terpenowym</b> z konkretnych szczepów.{" "}
              <br />
              <b>Efekt entourage</b> to synergia ziół z terpenemami - więcej niż
              suma składników.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Czill Terpene */}
            {chillTerpene && (
              <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4">
                <h3 className="">chill</h3>

                <div>
                  <h3
                    className="text-xl"
                    style={{
                      color: chillTerpene.terpeneStyle?.primary,
                    }}
                  >
                    {chillTerpene.primaryTerpene}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {/* COPY: GSC description */}
                    Ziemisty, słodki, z nutą mięty i wanilii. Jeden z
                    najbardziej rozpoznawalnych szczepów na świecie.
                  </p>
                </div>
              </div>
            )}

            {/* Focus Terpene */}
            {focusTerpene && (
              <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4">
                <h3 className="">focus</h3>
                <div>
                  <h3
                    className="text-xl"
                    style={{
                      color: focusTerpene.terpeneStyle?.primary,
                    }}
                  >
                    {focusTerpene.primaryTerpene}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {/* COPY: Lemon Skunk description */}
                    Intensywnie cytrusowy, z lekką żywiczną głębią. Czysty i
                    orzeźwiający od pierwszego oddechu.
                  </p>
                </div>
              </div>
            )}

            {/* Sleep Terpene */}
            {sleepTerpene && (
              <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4">
                <h3 className="">sleep</h3>
                <div>
                  <h3
                    className="text-xl"
                    style={{
                      color: sleepTerpene.terpeneStyle?.primary,
                    }}
                  >
                    {sleepTerpene.primaryTerpene}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {/* COPY: Purple Punch description */}
                    Owocowy, jagodowy, z delikatną słodyczą. Spokojny profil na
                    wieczór.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-col items-center text-center space-y-4">
            <h3 className="text-2xl font-semibold">Spróbuj wszystkiego</h3>
            <p className="text-foreground/70 max-w-md mx-auto">
              Zestaw Startowy to 7 blendów do przetestowania. Znajdź ten, który
              siądzie Ci najlepiej.
            </p>
            <div className="pt-2">
              <Button size="lg" asChild id="cta-terpenes">
                <Link href="/store/product/zestaw-startowy">
                  Wybieram Zestaw Startowy
                  <ArrowRight
                    data-icon="inline-end"
                    className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section
        id="faq"
        className="border-t border-border/20 bg-muted/10 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center">
            {/* COPY: FAQ section headline */}
            Masz pytania?
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {formatAnswer(item.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────── */}
      <section
        id="cta-final"
        className="border-t border-border/20 bg-background px-5 py-20 md:px-12 md:py-32 lg:px-20 relative overflow-hidden"
      >
        {/* Subtle background flair */}
        <div
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/dark-moss-bg.png')" }}
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center space-y-8">
          <h2 className="">
            {/* COPY: final CTA recap */}
            Zioła, profil terpenowy, dostawa w 24h. Saszetki 0.5g. Zawsze
            świeże, zawsze dobre.
            <span className="block text-secondary italic">
              Znajdź swoje zioo.
            </span>
          </h2>
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button size="lg" asChild id="cta-final-primary">
              <Link href="/store">
                {/* COPY: final CTA button text */}
                Wybierz swój blend
                <ArrowRight
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                />
              </Link>
            </Button>
            <div className="text-sm font-medium text-foreground/60 mt-2">
              <span className="block mb-1">
                Wysyłka w 24h. Darmowa dostawa od 34,99 zł.
              </span>
              {/* COPY: final CTA secondary note */}
              Nie wiesz od czego zacząć? Sprawdź{" "}
              <Link
                href="/store/product/zestaw-startowy"
                className="underline underline-offset-2 hover:text-primary transition-colors"
              >
                Zestaw Startowy
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
