import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Baza wiedzy o botanice i terpenach | zioo",
  description:
    "Blog zioo. Dowiedz się, jak działa efekt entourage, poznaj profile terpenowe i odkryj nasze metody na naturalny relaks oraz głębokie odprężenie.",
};

export default function Blog() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center p-5 text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Wkrótce</h1>
      <p className="max-w-md text-lg text-foreground">
        Pracujemy nad pierwszymi artykułami. Zaglądaj tu regularnie po dawkę
        wiedzy o sile ziół.
      </p>
    </main>
  );
}
