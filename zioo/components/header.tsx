import Link from "next/link";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-4 border-black bg-background px-5 md:h-20 md:px-12 lg:px-20">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl hover:text-primary transition-colors duration-150"
        >
          Zioo.
        </Link>
        <nav className="hidden gap-6 sm:flex md:gap-8">
          <Link
            href="/"
            className="text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors duration-150"
          >
            About
          </Link>
          <Link
            href="/store"
            className="text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors duration-150"
          >
            Store
          </Link>
          <Link
            href="/blog"
            className="text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors duration-150"
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
