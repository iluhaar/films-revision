/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateFilms } from "../reducers/filmsSlice";
import { showNotification } from "../reducers/uiSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const getFilms = (): any => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("https://films-revision-default-rtdb.firebaseio.com/films.json");

      if (!response.ok) {
        throw new Error("Fetching films data failed.");
      }

      const data = response.json();

      return data;
    };

    try {
      const films = await sendRequest();

      dispatch(updateFilms(films));

      dispatch(
        showNotification({
          show: true,
          status: "success",
          title: "Success",
          message: "Fetched films data successfully!",
          type: "info",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          show: true,
          status: "error",
          title: "Error",
          message: "Failed to fetch films data!",
          type: "error",
        })
      );
    }
  };
};

export const sendFilms = (films: FilmProps[]): any => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("https://films-revision-default-rtdb.firebaseio.com/films.json", {
        method: "PUT",
        body: JSON.stringify(films),
      });

      if (!response.ok) {
        throw new Error("Update films data failed.");
      }

      const data = response.json();

      return data;
    };
    try {
      await sendRequest();

      dispatch(
        showNotification({
          show: true,
          status: "success",
          title: "Success",
          message: "Film review is updated",
          type: "info",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          show: true,
          status: "error",
          title: "Error",
          message: "Failed to send films data!",
          type: "error",
        })
      );
      console.error(error);
    }
  };
};
