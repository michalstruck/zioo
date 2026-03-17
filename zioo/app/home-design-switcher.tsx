"use client";

import { useDesign } from "@/lib/design-context";
import { DefaultHome, RetroHome } from "./home-variants";

export function HomeDesignSwitcher() {
	const { theme } = useDesign();
	return theme === "retro-surfer" ? <RetroHome /> : <DefaultHome />;
}
