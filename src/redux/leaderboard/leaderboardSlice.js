import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllLeaderboards } from "../../api/requests";

export const fetchLeaderboard = createAsyncThunk(
  "leaderboards/fetchLeaderboard",
  async () => {
    const response = await getAllLeaderboards();
    return response;
  }
);

const leaderboardSlice = createSlice({
  name: "leaderboard",

  initialState: {
    status: "success",
    leaderboards: [],
  },

  reducers: {
    addLeaderboard: (state, action) => {
      state.leaderboards = action.payload.leaderboards;
    },
  },
  extraReducers: {
    [fetchLeaderboard.fulfilled]: (state, action) => {
      state.leaderboards = action.payload.leaderboards;
    },
  },
});

export const selectLeaderboardbyName = (state, questionName) => {
  return state.leaderboard.leaderboards.find((leaderboard) => leaderboard.questionName === questionName)
}

export default leaderboardSlice.reducer;
