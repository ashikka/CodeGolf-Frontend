import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './question/questionSlice';
import leaderboardReducer from './leaderboard/leaderboardSlice';

export default configureStore({
  reducer: {
    question: questionReducer,
    leaderboard: leaderboardReducer,
  },
});
