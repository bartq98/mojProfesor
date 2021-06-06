import axios from 'axios';

export const api = axios.create({
    baseURL: `/`,
});

api.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        if (error.response) {
            // if (error.response.status === 401 && window.location.hash.indexOf('/login') === -1) {
            //     alert('Twoja sesja wygasła. Zaloguj się ponownie.');
            //     const url = '/';
            //     window.location.replace(url);
            //     return false;
            // }
        }

        return Promise.reject(error);
    }
);
