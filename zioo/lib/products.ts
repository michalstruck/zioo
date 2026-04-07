export type BlendIngredient = {
  herb: string;
  pct: number;
};

export type TerpeneStyle = {
  primary: string; // Main accent (e.g., label bg)
  secondary: string; // Secondary accent (e.g., progress bars)
  text: string; // Text color on primary background
};

export type Product = {
  id: string;
  type: "single" | "bundle";
  name: string;
  price: number;
  tagline: string;
  blendProfile: BlendIngredient[];
  primaryTerpene?: string;
  terpeneStyle?: TerpeneStyle;
  /** Accent color for card theming (CSS color value) */
  color?: string;
  images: string[];
  description: string;
  ingredientsDeepDive: string;
  usageInstructions: string;
};

export const products: Product[] = [
  {
    id: "slep-single",
    type: "single",
    name: "Slep",
    price: 6.99,
    tagline: "Sen & Relaks",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Róża", pct: 5 },
      { herb: "Melisa", pct: 15 },
    ],
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    description:
      "Zanurz się w głębokim śnie i pełnym relaksie z naszą nocną mieszanką ziołową. Formuła zaprojektowana by uspokoić umysł, zmniejszyć napięcie nerwowe i ułatwić wejście w najgłębszą fazę snu bez syntetycznych dodatków.",
    ingredientsDeepDive:
      "Dziewanna otwiera drogi oddechowe i delikatnie wycisza układ nerwowy, tworząc bezpieczną bazę naszej fuzji. Damiana pomaga rozładować nagromadzone napięcie w ciele, podczas gdy liść maliny działa tonizująco. Melisa to klasyk w farmakognozji snu radzący sobie z lękiem i natłokiem myśli. Wyselekcjonowaliśmy certyfikowane, organiczne surowce o wysokiej zawartości olejków eterycznych.",
    usageInstructions:
      "Inhaluj lub zaparz jako napar pod koniec dnia. Aby w pełni docenić właściwości odprężające, sugerujemy stosowanie w wyciszonym otoczeniu, w cyklu przed snem.",
  },
  {
    id: "czill-single",
    type: "single",
    name: "Czill",
    price: 6.99,
    tagline: "Euforia & Nastrój",
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
    description:
      "Rozpal swoją kreatywność i towarzyski potencjał w naturalny sposób. Social Spark to blend podnoszący nastrój, redukujący napięcie społeczne i promujący otwartą postawę w interakcjach z ludźmi – to twoja nowa, zdrowa alternatywa dla popołudniowej kawy lub alkoholu.",
    ingredientsDeepDive:
      "Dziewanna dostarcza gładkiej bazy i usprawnia przepływ. Prawoślaz chroni drogi oddechowe swoją delikatną powłoką, ułatwiając swobodną inhalację. Róża, lawenda i rumianek to starannie zbalansowane nuty kwiatowe działające antydepresyjnie i euforyzująco. Synergia tych ziół sprawia, że czujesz się swobodnie a twoje zmysły ożywają.",
    usageInstructions:
      "Zażyj wedle preferencji przed wyjściem na miasto lub w momencie kiedy potrzebujesz delikatnego, trwałego wyrzutu pozytywnej energii.",
  },
  {
    id: "fokus-single",
    type: "single",
    name: "Fokus",
    price: 6.99,
    tagline: "Fokus & Klarowność",
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
    description:
      "Katalizator skupienia i mentalnej przejrzystości. Autorski blend wspierający prace głęboką (deep work), w momentach kiedy musisz zablokować bodźce z zewnątrz i zanurzyć się w zadaniu z absolutną jasnością umysłu.",
    ingredientsDeepDive:
      "Oparta o dziewannę która nadaje ramy i lekkość, dając gładki i przejrzysty aromat w naparze. Pokrzywa działa jak stymulant odczulający system nerwowy, przy jednoczesnej eliminacji blokad, zaś odrobina liści malin dodaje balansu. Świeżość mięty aktywuje i pobudza koncentrację na niespotykanym dotąd poziomie, tworząc wyraźny profil sensoryczny, który zostaje z tobą.",
    usageInstructions:
      "Używaj podczas pracy kreatywnej lub wymagającej intelektualnie. Najlepiej współdziała ze słuchawkami i dobrym ambientem.",
  },
  {
    id: "czill-terpene-single",
    type: "single",
    name: "Czill",
    price: 9.99,
    tagline: "Euforia & Nastrój",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Lawenda", pct: 10 },
      { herb: "Melisa", pct: 10 },
    ],
    primaryTerpene: "Girl Scout Cookies",
    terpeneStyle: {
      primary: "#A27FE2",
      secondary: "#4ADE80",
      text: "#ffffff",
    },
    images: [
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
    ],
    description:
      "Rozpal swoją kreatywność w nowym, naturalnym wymiarze, okraszonym profilem terpenowym słynnego GSC. Euforyczna poprawa nastroju, rozluźnienie i skok inspiracji.",
    ingredientsDeepDive:
      "Dziewanna daje wsparcie objętościowe, zaś prawoślaz i lawenda uspokajają przed bodźcami. Zastosowaliśmy profil terpenowy inspirowany szczepem GSC (Mircen, Kariofilen, i Limonen) aby wzmocnić efekt działania ziół. Rezultatem jest przyjemne i wyraziste poczucie podwyższonej świadomości.",
    usageInstructions:
      "Dobry wybór na spotkania ze znajomymi lub chwile twórcze.",
  },
  {
    id: "slep-terpene-single",
    type: "single",
    name: "Slep",
    price: 9.99,
    tagline: "Sen & Relaks",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Róża", pct: 5 },
      { herb: "Melisa", pct: 15 },
    ],
    primaryTerpene: "Purple Punch",
    terpeneStyle: {
      primary: "#7C3AED",
      secondary: "#F472B6",
      text: "#ffffff",
    },
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    description:
      "Głęboki relaks wsparty wyjątkowym, słodko-kadzidłowym profilem terpenowym Purple Punch. Twój bilet do najgłębszych zakamarków spokoju i regeneracyjnej nocy.",
    ingredientsDeepDive:
      "Damiana i Męczennica zdejmują blokady psychiczne, zaś profil Purple Punch z dominującym Kariofilenem potęguje stan błogiego zawieszenia w chmurach. Jest to profil idealny dla zmęczonych rutyną, chcących silnego odcięcia od dnia.",
    usageInstructions: "Zarezerwowane na wieczory i chwile pełnego chillu.",
  },
  {
    id: "fokus-terpene-single",
    type: "single",
    name: "Fokus",
    price: 9.99,
    tagline: "Fokus & Klarowność",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 15 },
      { herb: "Prawoślaz", pct: 15 },
      { herb: "Mięta", pct: 10 },
    ],
    primaryTerpene: "Lemon Skunk",
    terpeneStyle: {
      primary: "#6ecf3e",
      secondary: "#121625",
      text: "#121625",
    },
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    description:
      "Jasność umysłu nabierająca tempa niczym sycylijska cytryna. Mięta w parze z fuzją terpenową Lemon Skunk to pewność ostrego focusu i niewyczerpanej fali energii.",
    ingredientsDeepDive:
      "Baza wspierana cytrusowo-ostrym profilem Lemon Skunku budzi zmysły znacznie mocniej niż standardowe warianty. Terpeny Limonen i Pinen stanowią perfekcyjne dopełnienie dla orzeźwiającej mięty, dostarczając impuls dla kory mózgowej bez nadreaktywności kofeinowej.",
    usageInstructions:
      "Poranny rozruch lub wsparcie na długi dystans przy pracy umysłowej.",
  },
  {
    id: "fresz-single",
    type: "single",
    name: "Fresz",
    price: 6.99,
    tagline: "Orzeźwienie & Balans",
    blendProfile: [
      { herb: "Dziewanna", pct: 20 },
      { herb: "Malina", pct: 20 },
      { herb: "Pokrzywa", pct: 10 },
      { herb: "Prawoślaz", pct: 10 },
      { herb: "Szałwia", pct: 20 },
      { herb: "Mięta", pct: 20 },
    ],
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    description:
      "Poczuj przypływ naturalnej świeżości. Idealnie zbalansowana mieszanka ziół z wyraźną nutą mięty i szałwii, stworzona by oczyścić zmysły i dodać lekkości każdemu dniu.",
    ingredientsDeepDive:
      "Unikalne połączenie mięty i szałwii zapewnia intensywne doznania sensoryczne, podczas gdy pokrzywa i prawoślaz wspierają naturalną równowagę organizmu. Baza z dziewanny i liści malin gwarantuje aksamitną gładkość i doskonałe dopełnienie profilu.",
    usageInstructions:
      "Inhaluj lub parz jako napar w dowolnym momencie dnia dla uzyskania efektu natychmiastowej świeżości i lekkości.",
  },
  // bundles
  {
    id: "slep-three-bundle",
    type: "bundle",
    name: "Zestaw Slep 3x",
    price: 14.99,
    tagline: "Sen & Relaks",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Róża", pct: 5 },
      { herb: "Melisa", pct: 15 },
    ],
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    description:
      "Zanurz się w głębokim śnie i pełnym relaksie z naszą nocną mieszanką ziołową. Formuła zaprojektowana by uspokoić umysł, zmniejszyć napięcie nerwowe i ułatwić wejście w najgłębszą fazę snu bez syntetycznych dodatków.",
    ingredientsDeepDive:
      "Dziewanna otwiera drogi oddechowe i delikatnie wycisza układ nerwowy, tworząc bezpieczną bazę naszej fuzji. Damiana pomaga rozładować nagromadzone napięcie w ciele, podczas gdy liść maliny działa tonizująco. Melisa to klasyk w farmakognozji snu radzący sobie z lękiem i natłokiem myśli. Wyselekcjonowaliśmy certyfikowane, organiczne surowce o wysokiej zawartości olejków eterycznych.",
    usageInstructions:
      "Inhaluj lub zaparz jako napar pod koniec dnia. Aby w pełni docenić właściwości odprężające, sugerujemy stosowanie w wyciszonym otoczeniu, w cyklu przed snem.",
  },
  {
    id: "czill-three-bundle",
    type: "bundle",
    name: "Zestaw Czill 3x",
    price: 14.99,
    tagline: "Euforia & Nastrój",
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
    description:
      "Rozpal swoją kreatywność i towarzyski potencjał w naturalny sposób. Social Spark to blend podnoszący nastrój, redukujący napięcie społeczne i promujący otwartą postawę w interakcjach z ludźmi – to twoja nowa, zdrowa alternatywa dla popołudniowej kawy lub alkoholu.",
    ingredientsDeepDive:
      "Dziewanna dostarcza gładkiej bazy i usprawnia przepływ. Prawoślaz chroni drogi oddechowe swoją delikatną powłoką, ułatwiając swobodną inhalację. Róża, lawenda i rumianek to starannie zbalansowane nuty kwiatowe działające antydepresyjnie i euforyzująco. Synergia tych ziół sprawia, że czujesz się swobodnie a twoje zmysły ożywają.",
    usageInstructions:
      "Zażyj wedle preferencji przed wyjściem na miasto lub w momencie kiedy potrzebujesz delikatnego, trwałego wyrzutu pozytywnej energii.",
  },
  {
    id: "fokus-three-bundle",
    type: "bundle",
    name: "Zestaw Fokus 3x",
    price: 14.99,
    tagline: "Fokus & Klarowność",
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
    description:
      "Katalizator skupienia i mentalnej przejrzystości. Autorski blend wspierający prace głęboką (deep work), w momentach kiedy musisz zablokować bodźce z zewnątrz i zanurzyć się w zadaniu z absolutną jasnością umysłu.",
    ingredientsDeepDive:
      "Oparta o dziewannę która nadaje ramy i lekkość, dając gładki i przejrzysty aromat w naparze. Pokrzywa działa jak stymulant odczulający system nerwowy, przy jednoczesnej eliminacji blokad, zaś odrobina liści malin dodaje balansu. Świeżość mięty aktywuje i pobudza koncentrację na niespotykanym dotąd poziomie, tworząc wyraźny profil sensoryczny, który zostaje z tobą.",
    usageInstructions:
      "Używaj podczas pracy kreatywnej lub wymagającej intelektualnie. Najlepiej współdziała ze słuchawkami i dobrym ambientem.",
  },
  {
    id: "czill-terpene-three-bundle",
    type: "bundle",
    name: "Zestaw Czill 3x",
    price: 24.99,
    tagline: "Euforia & Nastrój",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Lawenda", pct: 10 },
      { herb: "Melisa", pct: 10 },
    ],
    primaryTerpene: "Girl Scout Cookies",
    terpeneStyle: {
      primary: "#A27FE2",
      secondary: "#4ADE80",
      text: "#ffffff",
    },
    images: [
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
      "/social_spark_blend.png",
    ],
    description:
      "Rozpal swoją kreatywność w nowym, naturalnym wymiarze, okraszonym profilem terpenowym słynnego GSC. Euforyczna poprawa nastroju, rozluźnienie i skok inspiracji.",
    ingredientsDeepDive:
      "Dziewanna daje wsparcie objętościowe, zaś prawoślaz i lawenda uspokajają przed bodźcami. Zastosowaliśmy profil terpenowy inspirowany szczepem GSC (Mircen, Kariofilen, i Limonen) aby wzmocnić efekt działania ziół. Rezultatem jest przyjemne i wyraziste poczucie podwyższonej świadomości.",
    usageInstructions:
      "Dobry wybór na spotkania ze znajomymi lub chwile twórcze.",
  },
  {
    id: "slep-terpene-three-bundle",
    type: "bundle",
    name: "Zestaw Slep 3x",
    price: 24.99,
    tagline: "Sen & Relaks",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 20 },
      { herb: "Róża", pct: 5 },
      { herb: "Melisa", pct: 15 },
    ],
    primaryTerpene: "Purple Punch",
    terpeneStyle: {
      primary: "#7C3AED",
      secondary: "#F472B6",
      text: "#ffffff",
    },
    images: [
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
      "/deep_unwind_blend.png",
    ],
    description:
      "Głęboki relaks wsparty wyjątkowym, słodko-kadzidłowym profilem terpenowym Purple Punch. Twój bilet do najgłębszych zakamarków spokoju i regeneracyjnej nocy.",
    ingredientsDeepDive:
      "Damiana i Męczennica zdejmują blokady psychiczne, zaś profil Purple Punch z dominującym Kariofilenem potęguje stan błogiego zawieszenia w chmurach. Jest to profil idealny dla zmęczonych rutyną, chcących silnego odcięcia od dnia.",
    usageInstructions: "Zarezerwowane na wieczory i chwile pełnego chillu.",
  },
  {
    id: "fokus-terpene-three-bundle",
    type: "bundle",
    name: "Zestaw Fokus 3x",
    price: 24.99,
    tagline: "Fokus & Klarowność",
    blendProfile: [
      { herb: "Dziewanna", pct: 30 },
      { herb: "Malina", pct: 30 },
      { herb: "Pokrzywa", pct: 15 },
      { herb: "Prawoślaz", pct: 15 },
      { herb: "Mięta", pct: 10 },
    ],
    primaryTerpene: "Lemon Skunk",
    terpeneStyle: {
      primary: "#6ecf3e",
      secondary: "#121625",
      text: "#121625",
    },
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    description:
      "Jasność umysłu nabierająca tempa niczym sycylijska cytryna. Mięta w parze z fuzją terpenową Lemon Skunk to pewność ostrego focusu i niewyczerpanej fali energii.",
    ingredientsDeepDive:
      "Baza wspierana cytrusowo-ostrym profilem Lemon Skunku budzi zmysły znacznie mocniej niż standardowe warianty. Terpeny Limonen i Pinen stanowią perfekcyjne dopełnienie dla orzeźwiającej mięty, dostarczając impuls dla kory mózgowej bez nadreaktywności kofeinowej.",
    usageInstructions:
      "Poranny rozruch lub wsparcie na długi dystans przy pracy umysłowej.",
  },
  {
    id: "fresz-three-bundle",
    type: "bundle",
    name: "Zestaw Fresz 3x",
    price: 14.99,
    tagline: "Orzeźwienie & Balans",
    blendProfile: [
      { herb: "Dziewanna", pct: 20 },
      { herb: "Malina", pct: 20 },
      { herb: "Pokrzywa", pct: 10 },
      { herb: "Prawoślaz", pct: 10 },
      { herb: "Szałwia", pct: 20 },
      { herb: "Mięta", pct: 20 },
    ],
    images: [
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
      "/clear_mind_blend.png",
    ],
    description:
      "Poczuj przypływ naturalnej świeżości. Idealnie zbalansowana mieszanka ziół z wyraźną nutą mięty i szałwii, stworzona by oczyścić zmysły i dodać lekkości każdemu dniu.",
    ingredientsDeepDive:
      "Unikalne połączenie mięty i szałwii zapewnia intensywne doznania sensoryczne, podczas gdy pokrzywa i prawoślaz wspierają naturalną równowagę organizmu. Baza z dziewanny i liści malin gwarantuje aksamitną gładkość i doskonałe dopełnienie profilu.",
    usageInstructions:
      "Inhaluj lub parz jako napar w dowolnym momencie dnia dla uzyskania efektu natychmiastowej świeżości i lekkości.",
  },
];
