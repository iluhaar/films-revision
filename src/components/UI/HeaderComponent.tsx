import { Link } from "react-router-dom";
import { Notification } from "../Notification/Notification";

const HeaderComponent = () => {
  return (
    <>
      <header className="sticky-header">
        <Link to="/">
          <h1 className="header-1">Films revision</h1>
        </Link>
      </header>
      <Notification />
    </>
  );
};

export default HeaderComponent;
