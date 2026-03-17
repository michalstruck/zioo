export type BlendIngredient = {
  herb: string;
  pct: number;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  blendProfile: BlendIngredient[];
  primaryTerpene: string;
  /** Accent color for card theming (CSS color value) */
  color: string;
};

export const products: Product[] = [
  {
    id: "deep-unwind",
    name: "Deep Unwind",
    tagline: "Sen & Relaks",
    blendProfile: [
      { herb: "Dziewanna Liść", pct: 45 },
      { herb: "Damiana", pct: 20 },
      { herb: "Malina Liść", pct: 20 },
      { herb: "Melisa", pct: 15 },
    ],
    primaryTerpene: "Purple Punch",
    color: "#2DD4BF", // teal
  },
  {
    id: "social-spark",
    name: "Social Spark",
    tagline: "Euforia & Nastrój",
    blendProfile: [
      { herb: "Dziewanna", pct: 45 },
      { herb: "Prawoślaz Liść", pct: 25 },
      { herb: "Róża Kwiat", pct: 10 },
      { herb: "Lawenda Kwiat", pct: 10 },
      { herb: "Rumianek Kwiat", pct: 10 },
    ],
    primaryTerpene: "GSC",
    color: "#F97316", // orange
  },
  {
    id: "clear-mind",
    name: "Clear Mind",
    tagline: "Fokus & Klarowność",
    blendProfile: [
      { herb: "Dziewanna", pct: 40 },
      { herb: "Malina Liść", pct: 25 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Mięta", pct: 15 },
    ],
    primaryTerpene: "Lemon Skunk",
    color: "#FEF08A", // yellow
  },
];
