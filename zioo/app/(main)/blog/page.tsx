export const metadata = {
  title: "Zioo — Blog",
  description: "Wiedza o ziołach, terpenach i relaksie.",
};

export default function Blog() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center p-5 text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Wkrótce</h1>
      <p className="max-w-md text-lg text-foreground/70">
        Pracujemy nad pierwszymi artykułami. Zaglądaj tu regularnie po dawkę
        wiedzy o sile ziół.
      </p>
    </main>
  );
}
