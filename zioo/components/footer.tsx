import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-black bg-accent px-6 py-8 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Zioo</h2>
          <p className="mt-4 max-w-md text-sm font-medium tracking-tight md:text-base">
            Produkty Zioo to wyłącznie{" "}
            <span className="font-bold underline decoration-black decoration-2 underline-offset-2">
              herbaty ziołowe
            </span>{" "}
            i{" "}
            <span className="font-bold underline decoration-black decoration-2 underline-offset-2">
              mieszanki do aromatyzacji
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center text-sm font-bold uppercase tracking-wider md:flex-row md:text-left">
          <Link
            href="/regulamin"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            Regulamin
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            Polityka
          </Link>
          <Link
            href="/kontakt"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-black pt-8 text-xs font-bold uppercase md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Zioo. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
