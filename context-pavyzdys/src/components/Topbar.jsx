import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Topbar = () => {
  const { theme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);
  console.log(user);
  // value {theme: "light"}
  return (
    <div
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      Topbar {theme}
      <div>
        {user ? (
          <div>
            Sveiki, {user.name}! <br />
            <button onClick={logout}>Atsijungti</button>
          </div>
        ) : (
          <button onClick={login}>Prisijungti</button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
