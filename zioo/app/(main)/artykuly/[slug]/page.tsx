import { getSortedArticlesData } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ROUTES } from "@/lib/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articles = getSortedArticlesData();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Artykuł" };
  }

  return {
    title: article.title,
    description: article.preview,
    openGraph: {
      title: `OPE | ${article.title}`,
      description: article.preview,
      url: `${ROUTES.ARTYKULY}/${slug}`,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const fs = await import("fs");
    const path = await import("path");
    const mdxPath = path.join(process.cwd(), "content/artykuly", `${slug}.mdx`);
    const isMdx = fs.existsSync(mdxPath);

    const ext = isMdx ? ".mdx" : ".md";
    const { default: Post } = await import(`@/content/artykuly/${slug}${ext}`);

    return (
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-3xl bg-background">
        <Link
          href={ROUTES.ARTYKULY}
          className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-secondary mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded p-1 -ml-1"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Wróć do artykułów
        </Link>
        <article className="prose prose-lg dark:prose-invert prose-headings:font-youngSerif prose-a:text-accent max-w-none">
          <Post />
        </article>
      </main>
    );
  } catch (e) {
    notFound();
  }
}
