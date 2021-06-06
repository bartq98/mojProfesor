import {api} from './api';

export const addOpinion = (request: IAddOpinionRequest) =>
    api.post('/opinions', { ...request });

export const getOpinion = (opinionID: number) =>
    api.get(`/opinions/${opinionID}`);

export const deleteOpinion = (opinionID: number) =>
    api.delete(`/opinions/${opinionID}`);

export const getProfessorOpinions = (professorId: number) =>
    api.get(`/opinions/professor/${professorId}`);
