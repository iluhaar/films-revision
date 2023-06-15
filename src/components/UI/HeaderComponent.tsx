import { Link } from "react-router-dom";

import AddNewFilm from "../AddNewFilm/AddNewFilm";
import { Notification } from "../Notification/Notification";

const HeaderComponent = () => {
  return (
    <>
      <header className="sticky-header">
        <Link to="/">
          <h1 className="header-1">Films revision</h1>
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}></div>
        <AddNewFilm />
      </header>
      <Notification />
    </>
  );
};

export default HeaderComponent;
