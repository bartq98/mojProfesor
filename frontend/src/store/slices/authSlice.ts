import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_TYPES } from 'utils/constants';
import { RootState } from '../rootReducer';

export const initialState: AuthState = {
    user: DEFAULT_TYPES.DEFAULT_USER,
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthState, { payload }: PayloadAction<IUser>) => {
            state.user = payload;
            state.isAuth = true;
        },
        setLogOut: state => {
            state.isAuth = false;
            state.user = DEFAULT_TYPES.DEFAULT_USER;
        },
    },
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
