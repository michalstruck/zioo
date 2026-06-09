import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSortedArticlesData } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artykuły | OPE - fińska szkoła językowa ",
  description:
    "Baza wiedzy o języku fińskim i Finlandii. Artykuły, porady i materiały do nauki.",
  openGraph: {
    title: "Artykuły | OPE - fińska szkoła językowa",
    description:
      "Baza wiedzy o języku fińskim i Finlandii. Artykuły, porady i materiały do nauki.",
    url: "/artykuly",
  },
};

export default function ArtykulyPage() {
  const articles = getSortedArticlesData();

  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl bg-background">
      <h1 className="font-youngSerif text-4xl md:text-5xl text-foreground mb-12">
        Artykuły
      </h1>
      {articles.length === 0 ? (
        <p className="text-muted-foreground">Brak artykułów do wyświetlenia.</p>
      ) : (
        <div className="grid gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artykuly/${article.slug}`}
              className="flex flex-col md:flex-row md:h-64 rounded-2xl overflow-hidden bg-primary/10 border-2 border-primary hover:border-accent hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary group"
            >
              <div className="flex-1 flex flex-col justify-center p-6 md:p-8">
                <h2 className="text-2xl font-youngSerif text-foreground group-hover:text-accent transition-colors mb-4">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-sans line-clamp-3">
                  {article.preview}
                </p>
                <div className="mt-6 text-sm font-semibold text-foreground flex items-center">
                  Czytaj dalej
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
              {article.image && (
                <div className="w-full md:w-1/3 lg:w-80 h-64 md:h-auto relative shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
