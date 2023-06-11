import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./reducers/filmsSlice";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({ reducer: { films: filmsSlice.reducer, ui: uiSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
