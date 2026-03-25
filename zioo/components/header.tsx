import Link from "next/link";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border/10 bg-white/70 backdrop-blur-md px-5 md:h-20 md:px-12 lg:px-20">
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="text-2xl font-heading font-medium tracking-tight sm:text-3xl md:text-3xl hover:text-primary transition-organic"
        >
          Zioo.
        </Link>
        <nav className="hidden gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm font-sans font-medium text-secondary/70 hover:text-primary transition-organic"
          >
            O nas
          </Link>
          <Link
            href="/store"
            className="text-sm font-sans font-medium text-secondary/70 hover:text-primary transition-organic"
          >
            Sklep
          </Link>
          <Link
            href="/blog"
            className="text-sm font-sans font-medium text-secondary/70 hover:text-primary transition-organic"
          >
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
