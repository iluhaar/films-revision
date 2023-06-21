import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootState } from "./store/store";

import { getFilms, sendFilms } from "./store/actions/filmsAction";

import FilmDetails from "./components/FilmDetails/FilmDetails";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import FilmsPage from "./components/pages/FilmsPage";

import "./App.css";

import filmsMocked from "./films.json";

let isInit = true;

function App() {
  const { films, isChanged } = useSelector((state: RootState) => state.films);

  const dispatch = useDispatch();

  if (isInit) {
    dispatch(getFilms());
    isInit = false;
  }

  if (films === null) {
    dispatch(sendFilms(filmsMocked));
  }

  if (isChanged) {
    dispatch(sendFilms(films));
  }

  const router = createBrowserRouter([
    {
      path: "/films-revision/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "films",
          element: <FilmsPage films={films} />,
        },
        {
          path: "films/:id",
          element: <FilmDetails />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
