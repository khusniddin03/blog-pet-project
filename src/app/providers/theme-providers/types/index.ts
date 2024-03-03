export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}
