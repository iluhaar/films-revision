import { createSelector } from "@reduxjs/toolkit";

const getItemById = (state: FilmsListProps, itemId: number | string) => {
  const selectedItem = state.films.find((item: FilmProps) => item.id === Number(itemId));

  return selectedItem;
};

export const selectItemById = createSelector([getItemById], (item) => item);
