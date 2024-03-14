import { ICounterSchema } from 'entities/counter';
import { IUserSchema } from 'entities/user';

interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
}

export {
    IStateSchema,
};
