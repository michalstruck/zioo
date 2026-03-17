"use client";

import { useDesign } from "@/lib/design-context";
import { DefaultStore, RetroStore } from "./store-variants";

export function StoreDesignSwitcher() {
	const { theme } = useDesign();
	return theme === "retro-surfer" ? <RetroStore /> : <DefaultStore />;
}
