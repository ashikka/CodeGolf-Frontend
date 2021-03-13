import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../../api/requests";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await getQuestions();
    return response;
  }
);

const questionSlice = createSlice({
  name: "question",

  initialState: {
    status: "success",
    questions: [],
  },

  reducers: {
    addQuestion: (state, action) => {
      state.questions = action.payload.questions;
    },
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload.questions;
    },
  },
});

export const selectQuestionByName = (state, questionName) => {
  return state.question.questions.find((question) => question.questionName === questionName);
};

export default questionSlice.reducer;
