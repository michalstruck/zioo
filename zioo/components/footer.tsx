import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-border bg-accent px-6 py-8 md:px-12 md:py-12 relative z-20 [.theme-retro-surfer_&]:border-t-[3px] [.theme-retro-surfer_&]:border-dashed [.theme-retro-surfer_&]:bg-secondary/30 [.theme-retro-surfer_&]:rounded-t-[40px_60px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold uppercase tracking-tight [.theme-retro-surfer_&]:italic [.theme-retro-surfer_&]:text-primary">Zioo</h2>
          <p className="mt-4 max-w-md text-sm font-medium tracking-tight md:text-base text-accent-foreground [.theme-retro-surfer_&]:text-foreground/80">
            Produkty Zioo to wyłącznie{" "}
            <span className="font-bold underline decoration-border decoration-2 underline-offset-2 [.theme-retro-surfer_&]:decoration-primary/50">
              herbaty ziołowe
            </span>{" "}
            i{" "}
            <span className="font-bold underline decoration-border decoration-2 underline-offset-2 [.theme-retro-surfer_&]:decoration-primary/50">
              mieszanki do aromatyzacji
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center text-sm font-bold uppercase tracking-wider md:flex-row md:text-left [.theme-retro-surfer_&]:lowercase [.theme-retro-surfer_&]:font-medium [.theme-retro-surfer_&]:tracking-normal">
          <Link
            href="/regulamin"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4 [.theme-retro-surfer_&]:no-underline [.theme-retro-surfer_&]:hover:no-underline [.theme-retro-surfer_&]:px-5 [.theme-retro-surfer_&]:py-1.5 [.theme-retro-surfer_&]:rounded-full [.theme-retro-surfer_&]:border-2 [.theme-retro-surfer_&]:border-border [.theme-retro-surfer_&]:bg-accent/40 [.theme-retro-surfer_&]:hover:bg-primary [.theme-retro-surfer_&]:hover:text-primary-foreground [.theme-retro-surfer_&]:shadow-[2px_2px_0px_#000] [.theme-retro-surfer_&]:hover:-rotate-2 [.theme-retro-surfer_&]:transition-all"
          >
            Regulamin
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4 [.theme-retro-surfer_&]:no-underline [.theme-retro-surfer_&]:hover:no-underline [.theme-retro-surfer_&]:px-5 [.theme-retro-surfer_&]:py-1.5 [.theme-retro-surfer_&]:rounded-[40%_60%_70%_30%/40%_50%_60%_50%] [.theme-retro-surfer_&]:border-2 [.theme-retro-surfer_&]:border-border [.theme-retro-surfer_&]:bg-accent/40 [.theme-retro-surfer_&]:hover:bg-primary [.theme-retro-surfer_&]:hover:text-primary-foreground [.theme-retro-surfer_&]:shadow-[2px_2px_0px_#000] [.theme-retro-surfer_&]:hover:rotate-2 [.theme-retro-surfer_&]:transition-all"
          >
            Polityka
          </Link>
          <Link
            href="/kontakt"
            className="transition-transform hover:-translate-y-1 hover:underline hover:decoration-2 hover:underline-offset-4 [.theme-retro-surfer_&]:no-underline [.theme-retro-surfer_&]:hover:no-underline [.theme-retro-surfer_&]:px-5 [.theme-retro-surfer_&]:py-1.5 [.theme-retro-surfer_&]:rounded-full [.theme-retro-surfer_&]:border-2 [.theme-retro-surfer_&]:border-border [.theme-retro-surfer_&]:bg-accent/40 [.theme-retro-surfer_&]:hover:bg-primary [.theme-retro-surfer_&]:hover:text-primary-foreground [.theme-retro-surfer_&]:shadow-[2px_2px_0px_#000] [.theme-retro-surfer_&]:hover:-rotate-3 [.theme-retro-surfer_&]:transition-all"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-border pt-8 text-xs font-bold uppercase md:flex-row text-accent-foreground [.theme-retro-surfer_&]:border-dashed [.theme-retro-surfer_&]:border-border/30 [.theme-retro-surfer_&]:text-foreground/60 [.theme-retro-surfer_&]:lowercase [.theme-retro-surfer_&]:tracking-normal">
        <p>
          &copy; {new Date().getFullYear()} Zioo. Wszelkie prawa zastrzeżone. ✌️
        </p>
      </div>
    </footer>
  );
}
