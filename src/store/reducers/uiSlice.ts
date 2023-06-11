import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showReviewForm: false,
};

const uiSlice = createSlice({
  name: "uiReducer",
  initialState,
  reducers: {
    toggleReviewForm(state) {
      state.showReviewForm = !state.showReviewForm;
    },
  },
});

export const { toggleReviewForm } = uiSlice.actions;

export default uiSlice;
