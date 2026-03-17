import Link from "next/link";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  const retroLinkClasses = "text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors duration-200 [.theme-retro-surfer_&]:lowercase [.theme-retro-surfer_&]:text-base [.theme-retro-surfer_&]:font-bold [.theme-retro-surfer_&]:tracking-normal [.theme-retro-surfer_&]:px-5 [.theme-retro-surfer_&]:py-1.5 [.theme-retro-surfer_&]:rounded-[60%_40%_50%_50%/50%_40%_60%_50%] [.theme-retro-surfer_&]:border-2 [.theme-retro-surfer_&]:border-border [.theme-retro-surfer_&]:bg-accent/30 [.theme-retro-surfer_&]:hover:bg-primary [.theme-retro-surfer_&]:hover:text-primary-foreground [.theme-retro-surfer_&]:hover:-translate-y-1 [.theme-retro-surfer_&]:hover:rotate-2 [.theme-retro-surfer_&]:transition-all [.theme-retro-surfer_&]:shadow-sm";

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-4 border-border bg-background px-5 md:h-20 md:px-12 lg:px-20 transition-colors duration-300 [.theme-retro-surfer_&]:border-b-0 [.theme-retro-surfer_&]:bg-secondary/40 relative">
      <div className="absolute top-full left-0 w-full overflow-hidden hidden [.theme-retro-surfer_&]:block z-10 leading-none h-4">
        <svg className="w-full h-full text-secondary opacity-40 translate-y-[-1px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="var(--color-border)" className="opacity-10"></path>
        </svg>
      </div>

      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl hover:text-primary transition-colors duration-150 [.theme-retro-surfer_&]:italic [.theme-retro-surfer_&]:text-primary [.theme-retro-surfer_&]:drop-shadow-[2px_2px_0px_#000]"
        >
          Zioo.
        </Link>
        <nav className="hidden gap-6 sm:flex md:gap-8">
          <Link href="/" className={retroLinkClasses}>
            About
          </Link>
          <Link href="/store" className={retroLinkClasses}>
            Store
          </Link>
          <Link href="/blog" className={retroLinkClasses}>
            Blog
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <CartDrawer />
      </div>
    </header>
  );
}
