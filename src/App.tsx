import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FilmDetails from "./components/FilmDetails/FilmDetails";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import FilmsPage from "./components/pages/FilmsPage";

import "./App.css";
import { getFilms, sendFilms } from "./store/actions/filmsAction";

let isInit = true;

function App() {
  const { films, isChanged } = useSelector((state: RootState) => state.films);

  const dispatch = useDispatch();

  if (isInit) {
    dispatch(getFilms());
    isInit = false;
  }

  if (isChanged) {
    dispatch(sendFilms(films));
  }

  const router = createBrowserRouter([
    {
      path: "/",
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
