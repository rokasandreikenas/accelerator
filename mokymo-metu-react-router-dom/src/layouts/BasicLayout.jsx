import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "lightBlue" }}>
      <header>
        <nav>
          <a href="#">Go to google.lt</a>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default BasicLayout;
