import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ROUTES } from "../router/consts";

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // apsauga nuo auto refresh
    const user = { email, password };
    login(user);
    navigate(ROUTES.USER_LIST);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
