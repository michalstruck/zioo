import Link from "next/link";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border/10 bg-white backdrop-blur-md px-5 md:h-20 md:px-12 lg:px-20">
      <div className="flex items-center gap-6 md:gap-12">
        <Link
          href="/"
          className="text-2xl font-heading font-medium tracking-tight sm:text-3xl md:text-4xl hover:text-primary transition-organic"
        >
          zioo
        </Link>
        <nav className="gap-8 flex">
          <Link
            href="/"
            className="text-sm md:text-lg font-sans font-medium text-secondary hover:text-primary transition-organic"
          >
            O nas
          </Link>
          <Link
            href="/store"
            className="text-sm md:text-lg font-sans font-medium text-secondary hover:text-primary transition-organic"
          >
            Sklep
          </Link>
          <Link
            href="/blog"
            className="text-sm md:text-lg font-sans font-medium text-secondary hover:text-primary transition-organic"
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
