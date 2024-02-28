import { ThemeProvider } from 'app/providers/theme-providers';
import { Theme } from 'app/providers/theme-providers/types';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => React.ReactElement) => (
    <ThemeProvider initalTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
