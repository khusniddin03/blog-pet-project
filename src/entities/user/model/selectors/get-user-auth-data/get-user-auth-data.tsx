import { IStateSchema } from 'app/providers/store-provider';

export const getUserAuthData = (state: IStateSchema) => state.user?.authData;
