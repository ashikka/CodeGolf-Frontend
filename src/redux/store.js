import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import questionReducer from './question/questionSlice';
import leaderboardReducer from './leaderboard/leaderboardSlice';
import testcaseReducer from './testcase/testcaseSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        question: questionReducer,
        leaderboard: leaderboardReducer,
        testcase: testcaseReducer,
    },
});
