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
  isAuth: false,
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

    setAuth: (state, action) => {
      state.isAuth = action.payload.status;
    },
  },
});

export const { toggleReviewForm, showNotification, setAuth } = uiSlice.actions;

export default uiSlice;
