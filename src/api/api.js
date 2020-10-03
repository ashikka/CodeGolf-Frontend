import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);
export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
});

export const setAuthToken = (token) => {
    api.defaults.headers.common.Authorization = token;
};
