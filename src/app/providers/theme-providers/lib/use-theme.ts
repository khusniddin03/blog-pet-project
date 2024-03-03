import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './theme-context';
import { Theme, type UseThemeResult } from '../types';

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        document.body.className = newTheme;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}
