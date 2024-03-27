import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-username';
import { IStateSchema } from './state-schema';

export default function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
