import { generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const randomId = 4;

  const userPath = generatePath(ROUTES.USER_PROFILE, { userId: randomId }); // /user/4

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello from Home</h1>
      <Link to="/about">Go to About us Page</Link>
      <div style={{ paddingTop: 32 }}>
        <button onClick={() => navigate(userPath)}>Go to random user</button>
        {isLoggedIn && (
          <button
            onClick={() => navigate(ROUTES.USER_LIST)}
            style={{ marginLeft: 16 }}
          >
            Go to user list
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
