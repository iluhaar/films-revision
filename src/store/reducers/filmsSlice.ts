/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialStore = {
  films: [],
  isChanged: false,
  imagePlaceholder: "https://placehold.co/600x400?text=Movie",
};

const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    addNewFilm: (state, action) => {
      const newFilm = action.payload;
      const lastId = state?.films?.at(-1)?.id ?? Math.ceil(Math.random() * 100);

      const film = {
        id: lastId + 1,
        name: newFilm.name,
        grade: newFilm.grade,
        isWatched: newFilm.isWatched,
        review: newFilm.review,
        img: newFilm.img,
      };

      state.films.push(film);

      state.isChanged = true;
    },
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
    filterFilms: (state, action) => {
      const filterType = action.payload;
      if (filterType === "At first") {
        const sorted = state.films.sort((a: any, b: any) => b.isWatched - a.isWatched);

        state.films = sorted;

        state.films;
      } else if (filterType === "At last") {
        const sorted = state.films.sort((a: any, b: any) => a.isWatched - b.isWatched);

        state.films = sorted;

        state.films;
      } else {
        const sorted = state.films.sort((a, b) => a.id - b.id);

        state.films = sorted;
      }
    },
  },
});

export const { setIsWatched, addReview, setGrade, updateFilms, addNewFilm, filterFilms } = filmsSlice.actions;

export default filmsSlice;

interface initialStore extends FilmsListProps {
  isChanged: boolean;
  imagePlaceholder: string;
}
