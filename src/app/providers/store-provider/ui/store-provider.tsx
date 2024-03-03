import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createReduxStore from '../config/store';
import { IStateSchema } from '../config/state-schema';

interface IProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

const StoreProvider = (props: IProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
