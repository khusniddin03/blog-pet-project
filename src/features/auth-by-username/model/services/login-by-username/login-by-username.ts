import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface ILoginByUsername {
    password: string;
    username: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            thunkApi.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response?.data));

            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('В');
        }
    },
);
