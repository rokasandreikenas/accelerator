import { useState } from "react";
import Heading from "./Heading";
import LoginFormInputs from "./LoginFormInputs";

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(email, password);
      }}
    >
      <Heading>LoginForm</Heading>
      <LoginFormInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
