import { MetadataRoute } from "next";
import { getSortedArticlesData } from "@/lib/articles";
import { SITE_URL, ROUTES } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const routes = [
    ROUTES.HOME,
    ROUTES.STORE,
    ROUTES.ARTYKULY,
    ROUTES.KONTAKT,
    ROUTES.REGULAMIN,
    ROUTES.POLITYKA_PRYWATNOSCI,
  ].map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === ROUTES.HOME || route === ROUTES.STORE ? 1 : 0.8,
  }));

  // Dynamic articles
  const articles = getSortedArticlesData();
  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}${ROUTES.ARTYKULY}/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...articleRoutes];
}
