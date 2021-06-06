import { api } from './api';

export const getAllProfessors = (page: number, size: number) =>
    api.get('/professor', { params: { page, size } });

export const addProfessor = (professor: IAddProfessor, name?: string) =>
    api.post(`/professor`, { ...professor }, { params: { name } });

export const getProfessorsByData = ({
    firstName,
    lastName,
    page,
    size,
}: IGetProfessorByDataRequest & IPagination) => {
    api.get(`/professor/${firstName}/${lastName}`, { params: { page, size } });
};

export const getProfessorById = (professorId: number) =>
    api.get(`/professor/${professorId}`);

export const replaceProffesor = (professorId: number, name?: string) =>
    api.put(`/professor/${professorId}`, {}, { params: { name } });

export const deleteProffesor = (professorId: number, name?: string) =>
    api.delete(`/professor/${professorId}`, { params: { name } });
