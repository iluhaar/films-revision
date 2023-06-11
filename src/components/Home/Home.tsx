import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Films</h2>
      <p> Which I wanna watch or I already watched and made some review though</p>
      <Link to="films">Go to films list</Link>
    </>
  );
};

export default Home;
