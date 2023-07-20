import { Link } from "react-router-dom";

import AddNewFilm from "../AddNewFilm/AddNewFilm";
import { Notification } from "../Notification/Notification";

const HeaderComponent = () => {
  return (
    <>
      <header className="sticky-header">
        <Link to="/films-revision/">
          <h1 className="header-1">Films revision</h1>
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", paddingRight: "0.5rem" }}>
          <AddNewFilm />
        </div>
      </header>
      <Notification />
    </>
  );
};

export default HeaderComponent;
