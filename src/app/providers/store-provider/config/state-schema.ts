import { ICounterSchema } from 'entities/counter';
import { IUserSchema } from 'entities/user';
import { ILoginSchema } from 'features/auth-by-username';

interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm?: ILoginSchema
}

export {
    IStateSchema,
};
