import { createSlice } from "@reduxjs/toolkit";

const initialState: initialStore = { films: [], isChanged: false };

const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    updateFilms: (state, action) => {
      state.films = action.payload;
    },
    setIsWatched: (state, action) => {
      const data = action.payload;
      const selectedFilm = state.films.find((film) => film.id === data);

      if (!selectedFilm) return;

      selectedFilm.isWatched = !selectedFilm.isWatched;
      state.isChanged = true;
    },
    addReview: (state, action) => {
      const data = action.payload;
      const selectedFilm = state.films.find((film) => film.id === data.id);

      if (!selectedFilm) return;

      selectedFilm.review = data.review;
      state.isChanged = true;
    },
    setGrade: (state, action) => {
      const data = action.payload;
      const selectedFilm = state.films.find((film) => film.id === data.id);

      if (!selectedFilm) return;

      selectedFilm.grade = data.value;
      state.isChanged = true;
    },
  },
});

export const { setIsWatched, addReview, setGrade, updateFilms } = filmsSlice.actions;

export default filmsSlice;

interface initialStore extends FilmsListProps {
  isChanged: boolean;
}
