"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react";

export type DesignTheme = "default" | "retro-surfer";

type DesignContextValue = {
	theme: DesignTheme;
	setTheme: (theme: DesignTheme) => void;
};

const DesignContext = createContext<DesignContextValue | null>(null);

export function DesignProvider({
	initialDesign = "default",
	children,
}: {
	initialDesign?: DesignTheme;
	children: ReactNode;
}) {
	const [theme, setThemeState] = useState<DesignTheme>(initialDesign);

	const setTheme = useCallback((next: DesignTheme) => {
		setThemeState(next);
		// Persist choice in a cookie so it survives navigations / refreshes
		document.cookie = `design=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
	}, []);

	const value = useMemo(
		() => ({ theme, setTheme }),
		[theme, setTheme],
	);

	return (
		<DesignContext.Provider value={value}>
			{children}
			{process.env.NODE_ENV === "development" && (
				<DesignDevToggle theme={theme} setTheme={setTheme} />
			)}
		</DesignContext.Provider>
	);
}

export function useDesign() {
	const ctx = useContext(DesignContext);
	if (!ctx) {
		throw new Error("useDesign must be used within a DesignProvider");
	}
	return ctx;
}

/* ────────────────────────────────────────────
 * Dev-only floating toggle
 * ──────────────────────────────────────────── */

const THEMES: DesignTheme[] = ["default", "retro-surfer"];

function DesignDevToggle({
	theme,
	setTheme,
}: {
	theme: DesignTheme;
	setTheme: (t: DesignTheme) => void;
}) {
	return (
		<div
			style={{
				position: "fixed",
				bottom: 16,
				left: 16,
				zIndex: 99999,
				display: "flex",
				gap: 4,
				padding: "6px 8px",
				borderRadius: 8,
				border: "2px solid black",
				background: "#fffbe6",
				boxShadow: "3px 3px 0 0 rgba(0,0,0,1)",
				fontFamily: "monospace",
				fontSize: 12,
				fontWeight: 700,
			}}
		>
			{THEMES.map((t) => (
				<button
					key={t}
					type="button"
					onClick={() => setTheme(t)}
					style={{
						padding: "3px 8px",
						borderRadius: 4,
						border: "1.5px solid black",
						background: t === theme ? "black" : "transparent",
						color: t === theme ? "white" : "black",
						cursor: "pointer",
						fontFamily: "inherit",
						fontSize: "inherit",
						fontWeight: "inherit",
					}}
				>
					{t}
				</button>
			))}
		</div>
	);
}
