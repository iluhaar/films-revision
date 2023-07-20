import { Link } from "react-router-dom";
import LoginComponent from "../LoginComponent/LoginComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Home = () => {
  const { isAuth } = useSelector((state: RootState) => state.ui);

  return (
    <>
      {isAuth ? (
        <>
          <h2>Films</h2>
          <p> Which I wanna watch or I already watched and made some review though</p>
          <Link to="films">Go to films list</Link>
        </>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};

export default Home;
