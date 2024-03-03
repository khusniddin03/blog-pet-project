import { IStateSchema } from 'app/providers/store-provider';

export const getCounter = (state: IStateSchema) => state.counter;
