export type BlendIngredient = {
  herb: string;
  pct: number;
};

export type TerpeneStyle = {
  primary: `#${string}`; // Main accent (e.g., label bg)
  text: string; // Text color on primary background
};

export type ProductBundleId = "3-pack" | "5-pack" | "7-pack";

export type ProductBundle = {
  id: ProductBundleId;
  size: number;
  price: number;
};

export type ProductId = (typeof PRODUCT_ID)[keyof typeof PRODUCT_ID];

export type Product = {
  id: ProductId;
  name: string;
  tagline: string;
  blendProfile: BlendIngredient[];
  primaryTerpene?: string;
  terpeneStyle?: TerpeneStyle;
  /** Accent color for card theming (CSS color value) */
  color?: string;
  images: string[];
  subheadline: string;
  ingredientsDescription: string;
  usageInstructions: string;
  bundles: ProductBundle[];
};

export const PRODUCT_ID = {
  fresh: "fresh",
  chill: "chill",
  focus: "focus",
  sleep: "sleep",
  focusTerpene: "focus-terpene",
  chillTerpene: "chill-terpene",
  sleepTerpene: "sleep-terpene",
  discoveryPack: "zestaw-startowy",
} as const;

export const products: Product[] = [
  {
    id: PRODUCT_ID.sleep,
    name: "Sleep",
    tagline: "Wieczorny reset",
    bundles: [
      { id: "3-pack", size: 3, price: 9.99 },
      { id: "5-pack", size: 5, price: 14.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Melisa", pct: 15 },
      { herb: "Róża", pct: 5 },
    ],
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    subheadline:
      "Nocna mieszanka ziołowa, która pomaga wyciszyć głowę i przygotować ciało do snu.",
    ingredientsDescription:
      "W tym blendzie znajdziesz: melisę - zawiera kwas rozmarynowy i cytral, które obniżają napięcie nerwowe, poprawiają jakość snu i łagodzą stany lękowe. Dziewanna wycisza drogi oddechowe i nadaje naparowi miękki, aksamitny aromat. Liść maliny działa tonizująco i wspiera prawidłową pracę mięśni. Pokrzywa - łagodna baza odżywcza. Płatki róży kończą profil subtelnym, kwiatowym aromatem.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.sleepTerpene,
    name: "Sleep",
    tagline: "Głęboki sen z Purple Punch",
    bundles: [
      { id: "3-pack", size: 3, price: 14.99 },
      { id: "5-pack", size: 5, price: 22.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Melisa", pct: 15 },
      { herb: "Róża", pct: 5 },
    ],
    primaryTerpene: "Purple Punch",
    terpeneStyle: {
      primary: "#7A4E9A",
      text: "#ffffff",
    },
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    subheadline:
      "Nasz najbardziej wyciszający blend - nocna mieszanka ziołowa z profilem terpenowym Purple Punch.",
    ingredientsDescription:
      "Baza ziołowa jak w Sleep (dziewanna, malina, pokrzywa, melisa, róża) plus profil terpenowy Purple Punch. Purple Punch to mircen, kariofilen i pinen. Mircen uspokaja i pogłębia relaksację. Kariofilen łagodzi stany zapalne i fizyczne napięcie. Pinen wspiera jasność myślenia - żebyś zasnął spokojnie, a nie z chaosem w głowie. Melisa i mircen w parze to połączenie, które ciągnie w dół miękko, ale zdecydowanie.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.chill,
    name: "Chill",
    tagline: "Złap luz",
    bundles: [
      { id: "3-pack", size: 3, price: 9.99 },
      { id: "5-pack", size: 5, price: 14.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Lawenda", pct: 10 },
      { herb: "Melisa", pct: 10 },
    ],
    images: [
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
    ],
    subheadline: "Blend na chwile, kiedy chcesz się odprężyć bez ciężkości.",
    ingredientsDescription:
      "W tym blendzie znajdziesz: lawendę - zawiera linalol, jeden z najsilniejszych naturalnych składników relaksujących. Obniża poziom kortyzolu i rozluźnia napięcie mięśniowe. Melisa łagodzi nadaktywny umysł dzięki kwasowi rozmarynowemu. Dziewanna wycisza drogi oddechowe i nadaje naparowi aksamitną teksturę. Liść maliny tonizuje organizm. Pokrzywa - łagodna baza.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.chillTerpene,
    name: "Chill",
    tagline: "Chill na wyższym levelu",
    bundles: [
      { id: "3-pack", size: 3, price: 14.99 },
      { id: "5-pack", size: 5, price: 22.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Lawenda", pct: 10 },
      { herb: "Melisa", pct: 10 },
    ],
    primaryTerpene: "Girl Scout Cookies",
    terpeneStyle: {
      primary: "#0F7B6E",
      text: "#ffffff",
    },
    images: [
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
    ],
    subheadline:
      "Wszystko co Chill, plus profil terpenowy Girl Scout Cookies - głębsze odprężenie z ziemistą słodyczą.",
    ingredientsDescription:
      "Baza ziołowa jak w Chill (dziewanna, malina, pokrzywa, lawenda, melisa) plus profil terpenowy Girl Scout Cookies. GSC to przede wszystkim mircen, kariofilen i limonen. Mircen odpowiada za uspokajający, ziemisty aromat. Kariofilen - jedyny terpen wiążący się z receptorami CB2 - działa przeciwzapalnie i łagodzi napięcie. Limonen podnosi nastrój. Terpeny wzmacniają działanie ziół, a zioła wzmacniają działanie terpenów. Razem dają więcej niż osobno.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.focus,
    name: "Focus",
    tagline: "Ostrość na zawołanie",
    bundles: [
      { id: "3-pack", size: 3, price: 9.99 },
      { id: "5-pack", size: 5, price: 14.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 15 },
      { herb: "Prawoślaz", pct: 15 },
      { herb: "Mięta", pct: 10 },
    ],
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    subheadline:
      "Blend na momenty, kiedy potrzebujesz klarownej głowy i zero rozproszeń.",
    ingredientsDescription:
      "W tym blendzie znajdziesz: miętę - mentol wyostrza skupienie, zwiększa uważność i działa pobudzająco na układ nerwowy bez efektu kofeinowego. To kluczowy składnik tego blendu. Prawoślaz zawiera śluz roślinny, który chroni i wygładza. Dziewanna wycisza drogi oddechowe i daje lekki, czysty aromat. Liść maliny zapewnia lekko ściągający posmak i balans. Pokrzywa - łagodna baza.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.focusTerpene,
    name: "Focus",
    tagline: "Cytrynowy laser",
    bundles: [
      { id: "3-pack", size: 3, price: 14.99 },
      { id: "5-pack", size: 5, price: 22.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 15 },
      { herb: "Prawoślaz", pct: 15 },
      { herb: "Mięta", pct: 10 },
    ],
    primaryTerpene: "Lemon Skunk",
    terpeneStyle: {
      primary: "#5A8B17",
      text: "#ffffff",
    },
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    subheadline:
      "Focus z profilem terpenowym Lemon Skunk - ostrość zmysłów od pierwszego łyku.",
    ingredientsDescription:
      "Baza ziołowa jak w Focus (dziewanna, malina, pokrzywa, prawoślaz, mięta) plus profil terpenowy Lemon Skunk. Lemon Skunk to limonen, pinen i mircen. Limonen - cytrusowa energia, podnosi nastrój i redukuje stres. Pinen poprawia pamięć krótkotrwałą i wspiera skupienie. W parze z mentolem z mięty daje profil, który wyostrza zmysły bez nadreaktywności kofeinowej. Mięta plus limonen plus pinen - jedna z najskuteczniejszych kombinacji na ostrość umysłu.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.fresh,
    name: "Fresh",
    tagline: "Kick na start",
    bundles: [
      { id: "3-pack", size: 3, price: 9.99 },
      { id: "5-pack", size: 5, price: 14.99 },
    ],
    blendProfile: [
      { herb: "Dziewanna", pct: 20 },
      { herb: "Malina", pct: 20 },
      { herb: "Mięta", pct: 20 },
      { herb: "Szałwia", pct: 20 },
      { herb: "Pokrzywa", pct: 10 },
      { herb: "Prawoślaz", pct: 10 },
    ],
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    subheadline:
      "Mieszanka z dominującą miętą i szałwią, która budzi zmysły i dodaje lekkości.",
    ingredientsDescription:
      "W tym blendzie znajdziesz: miętę - wysoki poziom mentolu pobudza, wyostrza uwagę i odświeża. Szałwię - zawiera kwas karnozolowy i tujon, poprawia pamięć i wspiera koncentrację. Te dwa składniki nadają blendowi charakter. Dziewanna i liść maliny stanowią łagodną bazę i wygładzają profil sensoryczny. Prawoślaz chroni śluzówki swoim naturalnym śluzem roślinnym. Pokrzywa dopełnia całość.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.discoveryPack,
    name: "Zestaw Startowy",
    tagline: "Poznaj wszystkie smaki",
    bundles: [{ id: "7-pack", size: 7, price: 24.99 }],
    blendProfile: [],
    images: [
      "/deep_unwind_blend.png",
      "/social_spark_blend.png",
      "/clear_mind_blend.png",
    ],
    subheadline:
      "7 saszetek, wszystkie nasze blendy w jednym zestawie - idealny start z zioo.",
    ingredientsDescription: `W środku: po jednej sztuce każdego wariantu: - 4 blendy Natural (Fresh, Focus, Chill, Sleep) i 3 Terpene-Infused (Focus z Lemon Skunk, Chill z Girl Scout Cookies, Sleep z Purple Punch). Od porannego Fresha z miętą i szałwią, przez Focus na deep work, odprężony Chill z lawendą, aż po nocny Sleep z melisą i różą. Plus trzy warianty terpenowe, żebyś mógł porównać bazę z wersją rozszerzoną.`,
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
];
