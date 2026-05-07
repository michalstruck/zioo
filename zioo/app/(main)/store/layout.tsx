import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sklep | zioo - mieszanki do aromatyzacji",
  description:
    "Nasze mieszanki w jednym miejscu. Znajdź idealną kompozycję dla siebie. Botaniczne mieszanki ziołowe z profilem terpenowym dla skupienia, wyciszenia lub pełnego relaksu.",
};

export default function StoreLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
