import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <header className="sticky-header">
        <Link to="/">
          <h1 className="header-1">Films revision</h1>
        </Link>
      </header>
    </>
  );
};

export default HeaderComponent;
