import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Zioo — Herbal Blends",
	description:
		"Premium botanical blends for relaxation, mood, and clarity. Herbata ziołowa crafted with care.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={`${spaceGrotesk.variable} antialiased`}>
				<Providers>
					<div className="flex min-h-screen flex-col">
						<Header />
						<div className="flex-1">{children}</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
