export const ROUTES = {
  HOME: "/",
  STORE: "/store",
  ARTYKULY: "/artykuly",
  KONTAKT: "/kontakt",
  REGULAMIN: "/regulamin",
  POLITYKA_PRYWATNOSCI: "/polityka-prywatnosci",
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
