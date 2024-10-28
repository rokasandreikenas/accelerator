import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
