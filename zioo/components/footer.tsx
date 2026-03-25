import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/20 bg-white px-6 py-12 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-4xl font-heading font-medium tracking-tight text-secondary">
            Zioo
          </h2>
          <p className="text-lg font-sans leading-relaxed text-secondary/70">
            Produkty Zioo to wyłącznie{" "}
            <span className="italic text-accent font-heading">
              herbaty ziołowe
            </span>{" "}
            i&nbsp;
            <span className="italic text-accent font-heading">
              mieszanki do aromatyzacji
            </span>
            . Łączymy tradycyjną wiedzę botaniczną z&nbsp;nowoczesną precyzją.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm font-sans md:grid-cols-1">
          <Link
            href="/regulamin"
            className="text-secondary/60 transition-organic hover:text-primary hover:translate-x-1"
          >
            Regulamin
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="text-secondary/60 transition-organic hover:text-primary hover:translate-x-1"
          >
            Polityka
          </Link>
          <Link
            href="/kontakt"
            className="text-secondary/60 transition-organic hover:text-primary hover:translate-x-1"
          >
            Kontakt
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-border/10 pt-8 text-[10px] font-bold uppercase tracking-widest text-secondary/30 md:flex-row md:mt-24">
        <p>
          &copy; {new Date().getFullYear()} Zioo. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex gap-4">
          <span>Apothecary Quality</span>
          <span>•</span>
          <span>Botanical Precision</span>
        </div>
      </div>
    </footer>
  );
}
