import { Theme } from 'app/providers/theme-providers/types';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => React.ReactElement) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
