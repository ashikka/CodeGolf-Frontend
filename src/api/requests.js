import api from './api';

export const getQuestions = async () => {
    const res = await api.get('/questions');
    return res.data;
};

export const getAllLeaderboards = async () => {
    const res = await api.get('/leaderboards');
    return res.data;
};
