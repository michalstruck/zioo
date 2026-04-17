import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <link
        rel="preload"
        href="https://geowidget.inpost.pl/inpost-geowidget.css"
        as="style"
      />
      <link
        rel="preload"
        href="https://geowidget.inpost.pl/inpost-geowidget.js"
        as="script"
      />
      <Script
        src="https://geowidget.inpost.pl/inpost-geowidget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://geowidget.inpost.pl/inpost-geowidget.css"
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/store"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do sklepu
          </Link>
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight"
          >
            Zioo.
          </Link>
          <div className="w-24" />{" "}
          {/* Spacer for centering the logo on mobile */}
        </div>
      </header>
      <main className="flex-1 flex flex-col pt-8 md:pt-12 px-5">
        {children}
      </main>
    </div>
  );
}
