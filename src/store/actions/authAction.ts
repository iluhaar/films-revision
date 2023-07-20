/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit";
import { setAuth, showNotification } from "../reducers/uiSlice";

export const checkAuth = (email: string): any => {
  return async (dispatch: Dispatch) => {
    const isAuth = isValidEmail(email);

    if (isAuth) {
      dispatch(setAuth({ status: true }));
    } else {
      dispatch(
        showNotification({
          show: true,
          status: "error",
          title: "Error",
          message: "Check the email field, you should fill in valid email",
          type: "error",
        })
      );
      dispatch(setAuth({ status: false }));
    }
  };
};

function isValidEmail(email: string): boolean {
  const pattern = /^[\w.-]+(\+[\w.-]+)?@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
