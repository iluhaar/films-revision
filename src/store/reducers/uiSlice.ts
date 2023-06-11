import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showReviewForm: false,

  notification: {
    show: false,
    status: "",
    title: "",
    message: "",
    type: "",
  },
};

const uiSlice = createSlice({
  name: "uiReducer",
  initialState,
  reducers: {
    toggleReviewForm(state) {
      state.showReviewForm = !state.showReviewForm;
    },
    showNotification: (state, action) => {
      state.notification = {
        show: !state.notification.show,
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const { toggleReviewForm, showNotification } = uiSlice.actions;

export default uiSlice;
