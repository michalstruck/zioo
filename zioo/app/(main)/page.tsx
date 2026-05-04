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

const FAQ_ITEMS = [
  {
    q: "Czy to jest legalne?",
    a: "Tak, w 100%. Nasze mieszanki to zioła z legalnym ekstraktem terpenowym z konopi. Żaden składnik nie podlega żadnym ograniczeniom prawnym w Polsce. Brak THC, CBD i substancji uzależniających.",
  },
  {
    q: "Czym różni się linia Terpene od Natural?",
    a: "Linia Natural to czysta botanika - samo zioło. Linia Terpene zawiera dodatkowo ekstrakt terpenowy z konkretnego szczepu konopi: Girl Scout Cookies, Lemon Skunk lub Purple Punch. Efekt: intensywniejszy aromat i działanie efektu entourage. Skład ziołowy w obu liniach jest identyczny.",
  },
  {
    q: "Jak szybko dostanę zamówienie?",
    a: "Wysyłamy w ciągu 24 godzin od złożenia zamówienia, przez InPost. Możesz wybrać paczkomat lub kuriera. Zamawiasz dziś - masz jutro.",
  },
  {
    q: "Ile kosztuje dostawa?",
    a: "13 zł flat. Darmowa od 34,99 zł - czyli przy dwóch opakowaniach 5-pack. Większość klientów i tak przekracza próg naturalnie.",
  },
  {
    q: "Dlaczego zioo, a nie cokolwiek innego?",
    a: "Bo nic innego w Polsce nie istnieje w tej formie. Mood-based blending, profil terpenowy z konopi, estetyczne opakowanie, szybka dostawa - w jednym miejscu. Skomponowane od zera, nie sklejone z losowych ziół.",
  },
  {
    q: "Jak używać mieszanki do aromatyzacji?",
    a: "Mieszanki zioo przeznaczone są wyłącznie do aromatyzacji - możesz użyć ich w dyfuzorze, kominku aromatycznym lub innym urządzeniu do aromatyzacji. Nie są produktem spożywczym ani leczniczym. Przechowuj w suchym i zacienionym miejscu, z dala od dzieci.",
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
              acceptedAnswer: { "@type": "Answer", text: a },
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
          className="absolute inset-0 z-0 opacity-25 mix-blend-multiply pointer-events-none bg-cover bg-center"
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
        {/* Radial warmth in the upper-left to draw eye toward copy */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(196,132,100,0.12), transparent)",
          }}
        />
        {/* Gradient transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 z-0 bg-linear-to-t from-background to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <p className="w-fit rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
              Mieszanka do aromatyzacji
            </p>

            <h1 className="text-5xl font-heading font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {/* COPY: main headline */}
              Zioła z profilem terpenowym.
              <span className="block text-secondary italic">
                Pierwsze w Polsce.
              </span>
            </h1>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Cztery mieszanki do aromatyzacji - relaks, skupienie, orzeźwienie
              i spokojny sen. Z legalnym profilem terpenowym z konopi lub bez.
              Twoje, w 24h z InPost.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="px-8" id="cta-hero-primary">
                Wybierz swój blend
                <ArrowRight
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5"
                id="cta-hero-secondary"
              >
                Zacznij od Zestawu Startowego
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
              Zioła. Bez dodatków.
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
          <h2 className="text-3xl font-heading font-medium tracking-tight text-secondary md:text-4xl lg:text-5xl">
            {/* COPY: problem headline */}
            Szukałeś czegoś innego. Po prostu brakowało opcji.
          </h2>
          <div className="text-lg font-medium text-foreground/70 space-y-6">
            <p>
              Zioła z apteki wyglądają jak zmielona trawa i smakują podobnie.
              Nikt ich nie zaprojektował pod konkretny moment - kupujesz losowo
              i liczysz na cud.
            </p>
            <p>
              Terpeny z konopi są od dawna dostępne jako ekstrakt. Tylko nikt
              jeszcze nie połączył ich z ziołami w jedną gotową kompozycję. Do
              teraz.
            </p>
          </div>
          <p className="pt-4 text-xl font-heading font-medium text-primary">
            {/* COPY: pain-to-solution bridge */}
            zioo to mieszanki do aromatyzacji zaprojektowane od zera pod
            konkretne nastroje - z wyboru, nie z przypadku.
          </p>
        </div>
      </section>

      {/* ─── PRODUKTY ─────────────────────────────────────── */}
      <section
        id="produkty"
        className="border-t border-border/20 bg-muted/10 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-3xl font-heading font-medium tracking-tight text-secondary md:text-5xl lg:text-6xl">
              {/* COPY: product showcase headline */}
              Znajdź swój moment
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              {/* COPY: product showcase subtext */} Każdy blend to inna okazja.
              Terpene lub Natural - wybór należy do Ciebie.
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
            <h2 className="text-3xl font-heading font-medium tracking-tight text-secondary md:text-4xl lg:text-5xl">
              {/* COPY: terpene section headline */}
              Co to są terpeny i dlaczego zmieniają wszystko
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              {/* COPY: terpene intro */}
              Terpeny to związki aromatyczne naturalnie obecne w roślinach - w
              tym w konopiach. <br />
              Każdy szczep konopi ma inny profil terpenowy: inny aromat, inne
              działanie. W linii Terpene infuzujemy nasze mieszanki legalnym
              ekstraktem terpenowym z konkretnych szczepów. <br />
              Efekt entourage to synergia ziół z terpenemami - więcej niż suma
              składników.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Czill Terpene */}
            {chillTerpene && (
              <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4">
                <div
                  className="w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: chillTerpene.terpeneStyle?.primary,
                    color: chillTerpene.terpeneStyle?.text,
                  }}
                >
                  Chill
                </div>
                <div>
                  <h3 className="text-xl font-heading font-medium text-secondary">
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
                <div
                  className="w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: focusTerpene.terpeneStyle?.primary,
                    color: focusTerpene.terpeneStyle?.text,
                  }}
                >
                  Focus
                </div>
                <div>
                  <h3 className="text-xl font-heading font-medium text-secondary">
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
                <div
                  className="w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: sleepTerpene.terpeneStyle?.primary,
                    color: sleepTerpene.terpeneStyle?.text,
                  }}
                >
                  Sleep
                </div>
                <div>
                  <h3 className="text-xl font-heading font-medium text-secondary">
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

          <div className="mt-10 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              {/* COPY: terpene section CTA */}
              Chcesz poczuć różnicę? Zestaw Startowy zawiera zarówno linie
              Natural, jak i Terpene.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section
        id="faq"
        className="border-t border-border/20 bg-muted/10 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-heading font-medium tracking-tight text-secondary md:text-4xl lg:text-5xl">
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
                  {item.a}
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
          <h2 className="text-4xl font-heading font-medium tracking-tight text-secondary md:text-5xl lg:text-6xl">
            {/* COPY: final CTA recap */}
            Mieszanki do aromatyzacji zaprojektowane pod konkretne momenty.
            Zioła, legalny profil terpenowy, dostawa w 24h.
          </h2>
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button size="lg" className="px-8" id="cta-final-primary">
              {/* COPY: final CTA button text */}
              Wybierz swój blend
              <ArrowRight
                data-icon="inline-end"
                className="size-4 transition-transform duration-300 ease-out hover:translate-x-1"
              />
            </Button>
            <p className="text-sm font-medium text-foreground/60">
              {/* COPY: final CTA secondary note */}
              Nie wiesz od czego zacząć? Zamów Zestaw Startowy - wszystkie
              warianty Natural i Terpene w jednym zestawie, od 24,99 zł.
            </p>
            <p className="text-xs text-foreground/50 mt-2">
              {/* COPY: delivery reminder */}
              Zamówienie dziś = dostawa jutro.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
