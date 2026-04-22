import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "zioo | Mieszanki ziołowe premium z terpenami",
  description:
    "Pierwsze w Polsce premium mieszanki ziołowe z profilem terpenowym. Odkryj botaniczne kompozycje stworzone do relaksu, odprężenia i aromatyzacji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${fraunces.variable} ${publicSans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
