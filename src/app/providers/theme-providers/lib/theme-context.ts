import { createContext } from 'react';
import { type ThemeContextProps } from '../types';

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
