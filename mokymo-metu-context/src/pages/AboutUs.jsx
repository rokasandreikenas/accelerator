import { Link } from "react-router-dom";
import { ROUTES } from "../router/consts";

const AboutUs = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello from About us</h1>
      <Link to={ROUTES.HOME}>Go to home</Link>
    </div>
  );
};

export default AboutUs;
