import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

const BasicLayout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Topbar />
      <div style={{ padding: 32 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;
