import { api } from './api';

export const getQuestions = async () => {
    const res = await api.get('/questions');
    return res.data;
};

export const getAllLeaderboards = async () => {
    const res = await api.get('/leaderboards');
    return res.data;
};

export const getUserData = async () => {
    const res = await api.get('/user');
    return res.data;
};

export const loginUser = async (token) => {
    const res = await api.post('/login', { loginToken: token });
    return res.data;
};
