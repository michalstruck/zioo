"use client";

import Link from "next/link";
import { CartDrawer } from "./cart-drawer";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const isIndexPage = pathname === "/";
  const isStorePage = pathname.includes("/store");
  const isBlogPage = pathname.includes("/blog");

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border/10 bg-white backdrop-blur supports-backdrop-filter:bg-background/60 px-5 md:h-20 md:px-12 lg:px-20">
      <div className="flex items-center gap-6 md:gap-12">
        <Link
          href="/"
          className="text-2xl font-heading font-medium tracking-tight sm:text-3xl md:text-5xl hover:text-primary transition-organic"
        >
          zioo
        </Link>
        <nav className="gap-8 flex">
          <Link
            href="/"
            className={cn(
              "text-sm md:text-lg font-sans font-medium p-2 transition-organic text-secondary hover:text-primary",
              isIndexPage
                ? "text-primary/80 underline underline-offset-3 decoration-2 decoration-primary/70"
                : "",
            )}
          >
            O nas
          </Link>
          <Link
            href="/store"
            className={cn(
              "text-sm md:text-lg font-sans font-medium p-2 transition-organic text-secondary hover:text-primary",
              isStorePage
                ? "text-primary/80 underline underline-offset-3 decoration-2 decoration-primary/70"
                : "",
            )}
          >
            Sklep
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm md:text-lg font-sans font-medium p-2 transition-organic text-secondary hover:text-primary",
              isBlogPage
                ? "text-primary/80 underline underline-offset-3 decoration-2 decoration-primary/70"
                : "",
            )}
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
