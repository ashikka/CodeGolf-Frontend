import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
});

export const setAuthToken = (token) => {
    api.defaults.headers.common.Authorization = token;
};
