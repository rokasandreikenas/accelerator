import { generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";

const Home = () => {
  const navigate = useNavigate();
  const randomId = 4;

  const userPath = generatePath(ROUTES.USER_PROFILE, { userId: randomId }); // /user/4

  return (
    <div>
      <h1>Hello from Home</h1>
      <Link to="/about">Go to About us Page</Link>
      <button onClick={() => navigate(userPath)}>Go to random user</button>
    </div>
  );
};

export default Home;
