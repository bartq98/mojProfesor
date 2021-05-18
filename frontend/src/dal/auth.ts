import { api } from './api';

export const register = (user: IRegisterModel) =>
    api.post('/user', {
        email: user.email,
        password: user.password,
        role: 'ROLE_USER',
    });

export const login = () => {};
export const deleteAccount = () => {};
export const changePassword = () => {};
