import { createSlice } from "@reduxjs/toolkit";
import films from "../../films.json";

const initialState = { films };

const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    setIsWatched: (state, action) => {
      const data = action.payload;
      const selectedFilm = state.films.find((film) => film.id === data);

      if (!selectedFilm) return;

      selectedFilm.isWatched = !selectedFilm.isWatched;
    },
    addReview: (state, action) => {
      const data = action.payload;
      const selectedFilm = state.films.find((film) => film.id === data.id);

      if (!selectedFilm) return;

      selectedFilm.review = data.review;
    },
  },
});

export const { setIsWatched, addReview } = filmsSlice.actions;

export default filmsSlice;
