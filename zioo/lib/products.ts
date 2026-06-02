export type BlendIngredient = {
  herb: string;
  pct: number;
};

export type TerpeneStyle = {
  primary: `#${string}`; // Main accent (e.g., label bg)
  text: string; // Text color on primary background
};

export const BUNDLE_ID = {
  "3-pack": "3-pack",
  "5-pack": "5-pack",
  "7-pack": "7-pack",
} as const;

export type ProductBundleId = keyof typeof BUNDLE_ID;

export type ProductBundle = {
  id: ProductBundleId;
  size: number;
  price: number;
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

export const products: Product[] = [
  {
    id: PRODUCT_ID.discoveryPack,
    name: "zestaw startowy",
    tagline: "Poznaj wszystkie aromaty",
    bundles: [{ id: "7-pack", size: 7, price: 24.99 }],
    blendProfile: [],
    images: [
      "/deep_unwind_blend.png",
      "/social_spark_blend.png",
      "/clear_mind_blend.png",
    ],
    subheadline:
      "7 saszetek, wszystkie nasze blendy w jednym zestawie - idealny start z zioo.",
    ingredientsDescription: `W środku znajdziesz po jednej sztuce **każdego** rodzaju zioo: \n**•** 4 blendy Natural (**Fresh**, **Focus**, **Chill**, **Sleep**) \n**•** 3 Terpene-Infused (**Focus** z Lemon Skunk, **Chill** z Girl Scout Cookies, **Sleep** z Purple Punch). \n\nOd porannego **Fresha** z miętą i szałwią, przez **Focus** na deep work, odprężający **Chill** z lawendą, aż **Sleep** z melisą i różą, na noc. \n\nTrzy warianty terpenowe, żebyś porównać bazę z wersją rozszerzoną.`,
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.sleepTerpene,
    name: "sleep",
    tagline: "Spokojny sen z Purple Punch",
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
      "Baza ziołowa jak w Sleep (dziewanna, malina, pokrzywa, melisa, róża) plus **profil terpenowy**. \n **Purple Punch** to: \n**•** Mircen, **uspokaja** i pogłębia relaksację. \n**•** Kariofilen, **łagodzi stany zapalne** i fizyczne napięcie. \n**•** Pinen, wspiera jasność myślenia - żebyś **zasnął spokojnie**, a nie z chaosem w głowie. \n\nMelisa i mircen w parze to połączenie, które ciągnie w stronę snu miękko, ale zdecydowanie.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.sleep,
    name: "sleep",
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
      "W tym blendzie znajdziesz: \n**•** Melisę - zawiera kwas rozmarynowy i cytral, które **obniżają napięcie nerwowe**, poprawiają jakość snu i **łagodzą** stany lękowe. \n**•** Dziewanna - **wycisza drogi oddechowe** i nadaje naparowi miękki, aksamitny aromat. \n**•** Liść maliny - działa tonizująco i wspiera prawidłową **pracę mięśni**.\n**•** Pokrzywa - łagodna baza odżywcza. \n**•** Płatki róży - kończą profil subtelnym, **kwiatowym aromatem**.\n",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.chillTerpene,
    name: "chill",
    tagline: "Chill na wyższym poziomie",
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
      "Baza ziołowa jak w Chill (dziewanna, malina, pokrzywa, lawenda, melisa) plus **profil terpenowy Girl Scout Cookies**. \n\nGSC to przede wszystkim mircen, kariofilen i limonen. \n**•** Mircen odpowiada za **uspokajający, ziemisty aromat**. \n**•** Kariofilen, jedyny terpen wiążący się z receptorami CB2, działa **przeciwzapalnie i łagodzi napięcie**. \n**•** Limonen podnosi nastrój. \n\nTerpeny wzmacniają działanie ziół, a zioła **wzmacniają** działanie terpenów. Razem dają **więcej niż osobno**.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.chill,
    name: "chill",
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
      "W tym blendzie znajdziesz: \n**•** Lawendę - zawiera linalol, jeden z **najsilniejszych** naturalnych składników relaksujących. Obniża poziom kortyzolu i **rozluźnia** napięcie mięśniowe. \n**•** Melisę - **łagodzi nadaktywny umysł** dzięki kwasowi rozmarynowemu. \n**•** Dziewannę - **wycisza** drogi oddechowe i nadaje aksamitną teksturę. \n**•** Liść maliny - tonizuje organizm. \n**•** Pokrzywę - **łagodna** baza.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.focusTerpene,
    name: "focus",
    tagline: "Cytrynowa przejrzystość",
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
      "Baza ziołowa jak w Focus (dziewanna, malina, pokrzywa, prawoślaz, mięta) plus **profil terpenowy Lemon Skunk**. \n\nLemon Skunk to: \n**•** Limonen - cytrusowa **energia**, podnosi nastrój i **redukuje stres**. \n**•** Pinen **poprawia** pamięć krótkotrwałą i wspiera **skupienie**. \n\nW parze z mentolem z mięty daje profil, który wyostrza zmysły **bez nadreaktywności** kofeinowej. Mięta plus limonen plus pinen - jedna z **najskuteczniejszych** kombinacji na ostrość umysłu.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.focus,
    name: "focus",
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
      "W tym blendzie znajdziesz:\n**•** Miętę - mentol **wyostrza skupienie**, zwiększa **uważność** i działa pobudzająco na układ nerwowy bez efektu kofeinowego. To kluczowy składnik tego blendu. \n**•** Prawoślaz - zawiera śluz roślinny, który **chroni i wygładza**. \n**•** Dziewanna - **wycisza** drogi oddechowe i daje lekki, czysty aromat. \n**•** Liść maliny - zapewnia lekko ściągający posmak i **balans**. \n**•** Pokrzywa - **łagodna** baza.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
  {
    id: PRODUCT_ID.fresh,
    name: "fresh",
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
      "W tym blendzie znajdziesz:\n**•** Miętę - wysoki poziom mentolu **pobudza**, **wyostrza uwagę** i odświeża. \n**•** Szałwię - zawiera kwas karnozolowy i tujon, **poprawia pamięć** i wspiera **koncentrację**. Te dwa składniki nadają blendowi charakter. \n**•** Dziewanna i liść maliny stanowią **łagodną bazę** i wygładzają profil sensoryczny. \n**•** Prawoślaz **chroni śluzówki** swoim naturalnym śluzem roślinnym. \n**•** Pokrzywa dopełnia całość.",
    usageInstructions:
      "Przeznaczone wyłącznie do aromatyzacji. Nie do spożycia.",
  },
];
