import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ROUTES } from "../router/consts";

const Topbar = () => {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1px solid black`,
        padding: 16,
      }}
    >
      <nav style={{ display: "flex", gap: 16 }}>
        <div onClick={() => navigate(ROUTES.HOME)}>LOGO</div>
        <a href="#">Go to google.lt</a>
      </nav>
      <div>
        {user ? `Hello, ${user.email}. how are you?` : "Hello guest!"}
        <button
          onClick={user ? logOut : () => navigate(ROUTES.LOGIN)}
          style={{ marginLeft: 16 }}
        >
          {user ? "Log out" : "Log in"}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
