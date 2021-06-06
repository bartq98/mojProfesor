import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from './slices';

const { default: auth } = authSlice;

const rootReducer = combineReducers({
    auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
