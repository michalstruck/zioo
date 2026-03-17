import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Space_Grotesk, Fraunces, Shrikhand } from "next/font/google";
import { Providers } from "@/components/providers";
import type { DesignTheme } from "@/lib/design-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const shrikhand = Shrikhand({
	variable: "--font-shrikhand",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Zioo — Herbal Blends",
	description:
		"Premium botanical blends for relaxation, mood, and clarity. Herbata ziołowa crafted with care.",
};

const VALID_THEMES: DesignTheme[] = ["default", "retro-surfer"];

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const raw = cookieStore.get("design")?.value;
	const initialDesign: DesignTheme =
		raw && VALID_THEMES.includes(raw as DesignTheme)
			? (raw as DesignTheme)
			: "default";

	return (
		<html lang="pl">
			<body className={`${spaceGrotesk.variable} ${fraunces.variable} ${shrikhand.variable} antialiased theme-${initialDesign}`}>
				<Providers initialDesign={initialDesign}>
					<div className="flex min-h-screen flex-col">
						<Header />
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
