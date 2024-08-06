import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home</h1>
      <Link to="/about">Go to About us Page</Link>
    </div>
  );
};

export default Home;
