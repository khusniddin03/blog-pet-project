import { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { Theme, UseThemeResult } from "../types";

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return {
        theme,
        toggleTheme
    }
}