import { PropsWithChildren } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createReduxStore from '../config/store';
import { IStateSchema } from '../config/state-schema';

interface IProps {
    initialState?: DeepPartial<IStateSchema>;
}

const StoreProvider = (props: PropsWithChildren<IProps>) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            <div>
                {children}
            </div>
        </Provider>
    );
};

export default StoreProvider;
