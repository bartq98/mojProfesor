import {api} from './api';

export const addLike = (request: IAddLikeRequest) =>
    api.post('/like', { ...request });

export const deleteLike = (likeId: number) => api.delete(`/like/${likeId}`);

export const getAmountOfLikes = (opinionId: number) =>
    api.get(`/like/${opinionId}/amount`);
