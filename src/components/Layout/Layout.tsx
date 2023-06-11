import { Outlet } from "react-router-dom";
import HeaderComponent from "../UI/HeaderComponent";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default Layout;
