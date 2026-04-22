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
        <div className="container flex h-16 items-center justify-center">
          <Link
            href="/store"
            className="flex items-center flex-1 justify-start ml-4 gap-2 text-md font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-6" />
            Wróć do sklepu
          </Link>
          <Link
            href="/"
            className="text-2xl flex-1 font-heading font-medium tracking-tight sm:text-3xl md:text-4xl hover:text-primary transition-organic"
          >
            zioo
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col pt-8 md:pt-12 px-5">
        {children}
      </main>
    </div>
  );
}
