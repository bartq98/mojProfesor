import {api} from './api';

export const getMe = () => api.get(`/auth/me`);

export const login = (request: ILogin) => api.post('/login', { ...request });

export const logout = () => api.post('/logout').then(() => window.open("/", "_self"));
