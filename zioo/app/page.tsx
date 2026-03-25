import { Button } from "@/components/ui/button";
import { AnimatedHeroCards } from "@/components/animated-hero-cards";
import { Leaf, Smile, Droplets, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden px-5 pt-12 pb-16 md:px-12 md:pt-20 md:pb-24 lg:px-20"
      >
        {/* Organic Background */}
        <div
          className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: "url('/dark-moss-bg.png')" }}
        />
        {/* Gradient transition to next section, avoiding tailwind opacity shorthands per instructions */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-0 bg-linear-to-t from-background to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <p className="w-fit rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
              Herbata ziołowa z terpenami
            </p>

            <h1 className="text-5xl font-heading font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Poczuj
              <span className="block text-secondary italic">się lepiej.</span>
            </h1>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Trzy mieszanki botaniczne z&nbsp;naturalnym profilem terpenowym.
              Żaden dym, zero sztucznych dodatków. Zaparzone zioła
              i&nbsp;spokój.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="px-8">
                Poznaj mieszanki
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5"
              >
                Jak to działa?
              </Button>
            </div>
          </div>

          {/* Illustrations column */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <AnimatedHeroCards />
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────── */}
      <section
        id="value-proposition"
        className="border-y border-border/20 bg-muted/30 px-5 py-(--space-2xl) md:px-12 md:py-(--space-3xl) lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-heading font-medium tracking-tight text-secondary md:mb-14 md:text-5xl lg:text-6xl">
            Czemu Zioo?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {/* 1 — Lepszy nastrój */}
            <div className="group flex gap-6">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white shadow-sm transition-organic group-hover:-translate-y-px group-hover:shadow-md">
                <Smile className="size-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-secondary">
                  Lepszy nastrój, bez kompromisów
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Profile terpenowe dobrane pod konkretny efekt. Chcesz się
                  wyciszyć albo rozkręcić towarzystwo — dobierz mieszankę.
                </p>
              </div>
            </div>

            {/* 2 — Bez niepokoju */}
            <div className="group flex gap-6">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-secondary/10 bg-white shadow-sm transition-organic group-hover:-translate-y-px group-hover:shadow-md">
                <Leaf className="size-8 text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-secondary">
                  Zero niepokoju
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Naturalne zioła bez syntetycznych domieszek. Damiana,
                  dziewanna, melisa, mięta — każdy składnik ma sens.
                </p>
              </div>
            </div>

            {/* 3 — Czysty smak */}
            <div className="group flex gap-6">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-accent/10 bg-white shadow-sm transition-organic group-hover:-translate-y-px group-hover:shadow-md">
                <Droplets className="size-8 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-secondary">
                  Smak, nie chemia
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Herbata ziołowa z&nbsp;prawdziwym aromatem. Terpeny
                  z&nbsp;roślin — bez substancji zmieniających świadomość.
                </p>
              </div>
            </div>

            {/* 4 — Transparentne składy */}
            <div className="group flex gap-6">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-organic group-hover:-translate-y-px group-hover:shadow-md">
                <ShieldCheck
                  className="size-8 text-secondary/60"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-secondary">
                  Skład na wierzchu
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Pełna lista ziół z&nbsp;procentowym udziałem, profil terpenowy
                  i&nbsp;nic więcej. Mieszanka do aromatyzacji — wiesz co
                  dostajesz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
