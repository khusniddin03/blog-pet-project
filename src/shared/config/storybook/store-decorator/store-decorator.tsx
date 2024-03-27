import React from 'react';
import { IStateSchema, StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator = (state: Partial<IStateSchema>) => (StoryComponent: () => React.ReactElement) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
