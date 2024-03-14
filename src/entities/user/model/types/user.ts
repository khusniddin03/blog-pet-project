interface IUser {
    id: string;
    username: string;
}

interface IUserSchema {
    authData?: IUser;
}

export {
    IUser,
    IUserSchema,
};
