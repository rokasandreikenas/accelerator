import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Logo</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {user ? (
        <div>
          Hello, {user.email}!
          <br />
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </header>
  );
};

export default Topbar;
