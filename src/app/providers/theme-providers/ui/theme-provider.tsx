import { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/theme-context';
import { Theme } from '../types';

const defautlTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initalTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initalTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initalTheme ?? defautlTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
