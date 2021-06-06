import { api } from './api';

export const addUser = (register: IRegisterModelRequest) =>
    api.post('/user', { ...register });

export const getUser = (userId: number) => api.get(`/user/${userId}`);

export const deleteUser = (userId: number, name?: string) =>
    api.post(`/user/${userId}`, {}, { params: { name } });

export const updateUserPassword = (
    userId: number,
    password: string,
    name?: string
) => api.patch(`/user/${userId}/password`, { password }, { params: { name } });
