import { Button } from "@/components/ui/button";
import {
  DeepUnwindIllustration,
  SocialSparkIllustration,
  ClearMindIllustration,
} from "@/components/hero-illustration";
import { Leaf, Smile, Droplets, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden px-5 pt-12 pb-16 md:px-12 md:pt-20 md:pb-24 lg:px-20"
      >
        {/* Decorative accent block — top-right */}
        <div
          className="pointer-events-none absolute -top-6 right-8 hidden size-28 rotate-12 rounded-xl border-4 border-black bg-accent md:block"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <p className="w-fit rounded-lg border-2 border-black bg-secondary px-3 py-1 text-sm font-bold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Herbata ziołowa z terpenami
            </p>

            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Poczuj
              <span className="block text-primary">się lepiej.</span>
            </h1>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              Trzy mieszanki botaniczne z&nbsp;naturalnym profilem terpenowym.
              Żaden dym, zero sztucznych dodatków. Zaparzone zioła
              i&nbsp;spokój.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="text-base">
                Poznaj mieszanki
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Jak to działa?
              </Button>
            </div>
          </div>

          {/* Illustrations column */}
          <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-xl border-2 border-black bg-card shadow-[var(--shadow-xl)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
                <DeepUnwindIllustration />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider pt-3">
                Deep Unwind
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 pt-8 md:pt-12">
              <div className="rounded-xl border-2 border-black bg-card p-3 shadow-[var(--shadow-xl)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
                <SocialSparkIllustration />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider pt-3">
                Social Spark
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="rounded-xl border-2 border-black bg-card p-3 shadow-[var(--shadow-xl)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
                <ClearMindIllustration />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider pt-3">
                Clear Mind
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────── */}
      <section
        id="value-proposition"
        className="border-y-4 border-black bg-accent/30 px-5 py-[var(--space-2xl)] md:px-12 md:py-[var(--space-3xl)] lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight md:mb-14 md:text-4xl lg:text-5xl">
            Czemu Zioo?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {/* 1 — Lepszy nastrój */}
            <div className="group flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-primary shadow-[var(--shadow-sm)] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-md)]">
                <Smile
                  className="size-7 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Lepszy nastrój, bez kompromisów
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Profile terpenowe dobrane pod konkretny efekt. Chcesz się
                  wyciszyć albo rozkręcić towarzystwo — dobierz mieszankę.
                </p>
              </div>
            </div>

            {/* 2 — Bez niepokoju */}
            <div className="group flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-secondary shadow-[var(--shadow-sm)] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-md)]">
                <Leaf
                  className="size-7 text-secondary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Zero niepokoju
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Naturalne zioła bez syntetycznych domieszek. Damiana,
                  dziewanna, melisa, mięta — każdy składnik ma sens.
                </p>
              </div>
            </div>

            {/* 3 — Czysty smak */}
            <div className="group flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-accent shadow-[var(--shadow-sm)] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-md)]">
                <Droplets
                  className="size-7 text-accent-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Smak, nie chemia
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/70">
                  Herbata ziołowa z&nbsp;prawdziwym aromatem. Terpeny
                  z&nbsp;roślin — bez substancji zmieniających świadomość.
                </p>
              </div>
            </div>

            {/* 4 — Transparentne składy */}
            <div className="group flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-card shadow-[var(--shadow-sm)] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-md)]">
                <ShieldCheck
                  className="size-7 text-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
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
