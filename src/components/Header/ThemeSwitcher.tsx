import {useContext} from "react";
import ThemeContext from "@/contexts/theme";
import { MoonIcon, ComputerDesktopIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {

	const { theme, toggleThemeHandler } = useContext(ThemeContext);


	return (
		<div className="flex justify-center border rounded-full border-gray-300 dark:border-gray-800 gap-2 p-1 w-fit">
			<button
				className={`p-1 rounded-full ${
					theme === "light" ? "bg-gray-200 dark:bg-gray-800 text-white" : ""
				}`}
				onClick={() => toggleThemeHandler("light")}
			>
				<SunIcon className="w-4 h-4 dark:text-white text-gray-600" />
			</button>
			<button
				className={`p-1 rounded-full ${
					theme === "dark" ? "bg-gray-200 dark:bg-gray-800 text-white" : ""
				}`}
				onClick={() => toggleThemeHandler("dark")}
			>
				<MoonIcon className="w-4 h-4 dark:text-white text-gray-600" />
			</button>
			<button
				className={`p-1 rounded-full ${
					theme === "os" ? "bg-gray-200 dark:bg-gray-800 text-white" : ""
				}`}
				onClick={() => toggleThemeHandler("os")}
			>
				<ComputerDesktopIcon className="w-4 h-4 dark:text-white text-gray-600" />
			</button>
		</div>
	)
}

export default ThemeSwitcher;