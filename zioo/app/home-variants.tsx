import { Button } from "@/components/ui/button";
import {
  DeepUnwindIllustration,
  SocialSparkIllustration,
  ClearMindIllustration,
} from "@/components/hero-illustration";
import { Leaf, Smile, Droplets, ShieldCheck } from "lucide-react";

export function DefaultHome() {
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

export function RetroHome() {
  const retroButtonPrimary = "text-lg font-black uppercase tracking-wider rounded-[60%_40%_50%_50%/50%_60%_40%_50%] border-[3px] border-border bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 hover:-rotate-2 transition-all h-14 px-8 drop-shadow-sm";
  const retroButtonSecondary = "text-lg font-black uppercase tracking-wider rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-[3px] border-border bg-accent text-accent-foreground shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 hover:rotate-2 transition-all h-14 px-8 drop-shadow-sm";

  return (
    <main className="bg-background relative overflow-hidden">
      {/* Lava Lamp Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[150vh]">
        <div className="absolute top-[-5%] left-[-10%] w-[60vw] h-[60vw] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-secondary/30 mix-blend-multiply blur-3xl animate-[blob_18s_infinite_alternate] drop-shadow-xl" />
        <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-accent/40 mix-blend-multiply blur-3xl animate-[blob_20s_infinite_alternate-reverse_2s] drop-shadow-xl" />
        <div className="absolute top-[60%] left-[10%] w-[70vw] h-[70vw] rounded-[50%_50%_70%_30%/30%_50%_50%_70%] bg-primary/20 mix-blend-multiply blur-3xl animate-[blob_25s_infinite_alternate_4s] drop-shadow-xl" />
      </div>

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative px-5 pt-12 pb-16 md:px-12 md:pt-20 md:pb-24 lg:px-20 z-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <p className="w-fit rounded-[2rem] border-[3px] border-border bg-accent px-5 py-2 text-sm font-black uppercase tracking-widest text-accent-foreground shadow-[3px_3px_0px_0px_#000] -rotate-3 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000] transition-all cursor-default relative overflow-hidden">
              <span className="relative z-10">✨ Herbata ziołowa z terpenami</span>
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] drop-shadow-[4px_4px_0px_#000]">
              Poczuj
              <span className="block text-primary italic lowercase tracking-normal drop-shadow-[2px_2px_0px_#000]">się lepiej.</span>
            </h1>

            <p className="max-w-lg text-xl font-bold leading-relaxed text-foreground md:text-2xl drop-shadow-[1px_1px_0px_#fff]">
              Trzy mieszanki botaniczne z&nbsp;naturalnym profilem terpenowym.
              Żaden dym, zero sztucznych dodatków. Zaparzone zioła
              i&nbsp;spokój. 🌊
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <button className={retroButtonPrimary}>
                Poznaj mieszanki
              </button>
              <button className={retroButtonSecondary}>
                Jak to działa?
              </button>
            </div>
          </div>

          {/* Illustrations column */}
          <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 relative z-10">
            <div className="flex flex-col items-center gap-2 group">
              <div className="rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-[3px] border-border bg-card shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_#000] group-hover:-rotate-6 overflow-hidden animate-[wobble_3s_ease-in-out_infinite_alternate]">
                <DeepUnwindIllustration />
              </div>
              <span className="text-sm font-black uppercase tracking-wider pt-3 text-secondary-foreground bg-secondary/80 px-3 py-1 rounded-full border-2 border-border mt-2 rotate-2 group-hover:-rotate-3 transition-transform">
                Deep Unwind
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 pt-8 md:pt-12 group">
              <div className="rounded-[60%_40%_50%_50%/50%_60%_40%_50%] border-[3px] border-border bg-card p-3 shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_#000] group-hover:rotate-6 overflow-hidden animate-[wobble_3.5s_ease-in-out_infinite_alternate-reverse]">
                <SocialSparkIllustration />
              </div>
              <span className="text-sm font-black uppercase tracking-wider pt-3 text-primary-foreground bg-primary px-3 py-1 rounded-full border-2 border-border mt-2 -rotate-3 group-hover:rotate-2 transition-transform">
                Social Spark
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="rounded-[50%_40%_30%_60%/60%_50%_40%_50%] border-[3px] border-border bg-card p-3 shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_#000] group-hover:-rotate-3 overflow-hidden animate-[wobble_4s_ease-in-out_infinite_alternate]">
                <ClearMindIllustration />
              </div>
              <span className="text-sm font-black uppercase tracking-wider pt-3 text-accent-foreground bg-accent px-3 py-1 rounded-full border-2 border-border mt-2 rotate-1 group-hover:-rotate-2 transition-transform">
                Clear Mind
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────── */}
      <section
        id="value-proposition"
        className="relative z-10 border-t-[3px] border-dashed border-border bg-secondary/20 px-5 py-[var(--space-2xl)] md:px-12 md:py-[var(--space-3xl)] lg:px-20 mt-10 rounded-[60%_40%_50%_50%/5%_5%_0%_0%]"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-5xl font-black tracking-tight md:mb-16 md:text-6xl lg:text-7xl text-center md:text-left drop-shadow-[3px_3px_0px_#000] text-primary italic">
            Czemu Zioo? 🌊
          </h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
            {/* 1 — Lepszy nastrój */}
            <div className="group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-[3px] border-border bg-primary shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#000] group-hover:scale-110 group-hover:-rotate-6">
                <Smile
                  className="size-10 text-primary-foreground drop-shadow-md"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase drop-shadow-[1px_1px_0px_#fff]">
                  Lepszy nastrój, <span className="text-primary italic">bez kompromisów</span>
                </h3>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground drop-shadow-[1px_1px_0px_#fff]">
                  Profile terpenowe dobrane pod konkretny efekt. Chcesz się
                  wyciszyć albo rozkręcić towarzystwo — dobierz mieszankę.
                </p>
              </div>
            </div>

            {/* 2 — Bez niepokoju */}
            <div className="group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-[50%_40%_30%_60%/60%_50%_40%_50%] border-[3px] border-border bg-secondary shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#000] group-hover:scale-110 group-hover:rotate-6">
                <Leaf
                  className="size-10 text-secondary-foreground drop-shadow-md"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase drop-shadow-[1px_1px_0px_#fff]">
                  Zero <span className="text-secondary italic">niepokoju</span>
                </h3>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground drop-shadow-[1px_1px_0px_#fff]">
                  Naturalne zioła bez syntetycznych domieszek. Damiana,
                  dziewanna, melisa, mięta — każdy składnik ma sens.
                </p>
              </div>
            </div>

            {/* 3 — Czysty smak */}
            <div className="group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-[60%_40%_50%_50%/50%_60%_40%_50%] border-[3px] border-border bg-accent shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#000] group-hover:scale-110 group-hover:-rotate-3">
                <Droplets
                  className="size-10 text-accent-foreground drop-shadow-md"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase drop-shadow-[1px_1px_0px_#fff]">
                  Smak, nie <span className="text-accent italic">chemia</span>
                </h3>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground drop-shadow-[1px_1px_0px_#fff]">
                  Herbata ziołowa z&nbsp;prawdziwym aromatem. Terpeny
                  z&nbsp;roślin — bez substancji zmieniających świadomość.
                </p>
              </div>
            </div>

            {/* 4 — Transparentne składy */}
            <div className="group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-[40%_60%_50%_50%/50%_50%_60%_40%] border-[3px] border-border bg-[#FFFBEB] shadow-[4px_4px_0px_0px_#000] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#000] group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck
                  className="size-10 text-primary drop-shadow-md"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase drop-shadow-[1px_1px_0px_#fff]">
                  Skład <span className="italic underline decoration-border underline-offset-4">na wierzchu</span>
                </h3>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground drop-shadow-[1px_1px_0px_#fff]">
                  Pełna lista ziół z&nbsp;procentowym udziałem, profil terpenowy
                  i&nbsp;nic więcej. Mieszanka do aromatyzacji — wiesz co dostajesz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
