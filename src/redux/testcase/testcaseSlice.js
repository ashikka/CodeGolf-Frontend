import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitSolution } from "../../api/requests";

export const submitSolutions = createAsyncThunk(
  "solution/submitSolutions",
  async () => {
    const response = await submitSolution();
    return response;
  }
);

const testcaseSlice = createSlice({
  name: "testcase",

  initialState: null,

  reducers: {
    addTestcase: (state, action) => {
      state.testcase = action.payload.testcase;
    },
  },
});

export default testcaseSlice.reducer;
