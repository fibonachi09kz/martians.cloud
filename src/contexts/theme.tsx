"use client";
import {
	createContext,
	ReactElement,
	useEffect,
	useState,
	useCallback,
} from "react";

const ThemeContext = createContext({
	theme: "dark", // Default theme
	toggleThemeHandler: (selectedTheme: "light" | "dark" | "os") => {},
});

interface ThemePropsInterface {
	children?: ReactElement | ReactElement[];
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
	const [theme, setTheme] = useState<"light" | "dark" | "os">("os");

	const isLocalStorageEmpty = useCallback((): boolean => {
		return !localStorage.getItem("theme");
	}, []);

	const initialThemeHandler = useCallback((): void => {
		if (isLocalStorageEmpty()) {
			setTheme("os"); // Set to OS theme initially
		} else {
			const savedTheme: string = localStorage.getItem("theme")!;
			setTheme(savedTheme as "light" | "dark");
		}
	}, [isLocalStorageEmpty]);

	useEffect(() => {
		initialThemeHandler();
	}, [initialThemeHandler]);

	const toggleThemeHandler = useCallback(
		(selectedTheme: "light" | "dark" | "os") => {
			setTheme(selectedTheme);
		},
		[]
	);

	useEffect(() => {
		if (theme === "os") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	useEffect(() => {
		if (theme === "os") {
			// Remove dark/light class from html element when using OS theme
			document!.querySelector("html")!.classList.remove("dark", "light");
		} else {
			document!.querySelector("html")!.classList.remove("dark", "light");
			document!.querySelector("html")!.classList.add(theme);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleThemeHandler }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;