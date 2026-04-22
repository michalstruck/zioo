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
        <div className="flex h-16 w-full items-center px-4">
          <div className="flex-1">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-md font-medium transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-6" />
              Wróć do sklepu
            </Link>
          </div>
          <Link
            href="/"
            className="text-4xl font-heading font-medium tracking-tight hover:text-primary transition-organic"
          >
            zioo
          </Link>
          <div className="flex-1" />
        </div>
      </header>
      <main className="flex-1 flex flex-col pt-8 md:pt-12 px-5">
        {children}
      </main>
    </div>
  );
}
