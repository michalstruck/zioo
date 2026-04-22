import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | zioo",
  description:
    "Masz pytania o nasze mieszanki ziołowe, profile terpenowe lub swoje zamówienie? Skontaktuj się z nami. Jesteśmy tu, by pomóc Ci złapać oddech.",
};

export default function KontaktPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1>Kontakt</h1>
      <div className="prose prose-lg dark:prose-invert max-w-lg">
        <p>
          Masz pytania, sugestie lub po prostu chcesz się z nami skontaktować?
          Napisz do nas wiadomość na poniższy adres e-mail, odpowiemy w
          maksymalnie 48 godzin.
        </p>
        <p className="mt-8">
          <a
            href="mailto:kontakt@zioo.pl"
            className="text-xl font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            kontakt@zioo.pl
          </a>
        </p>
      </div>
    </main>
  );
}
