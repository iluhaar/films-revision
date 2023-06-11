import "./App.css";
import FilmsList from "./components/FilmsList/FilmsList";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilmDetails from "./components/FilmDetails/FilmDetails";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  const { films } = useSelector((state: RootState) => state.films);

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
          element: <FilmsList films={films} />,
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
