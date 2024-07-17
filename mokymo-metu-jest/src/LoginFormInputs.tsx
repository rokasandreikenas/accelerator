interface LoginFormInputsProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const LoginFormInputs = ({
  email,
  password,
  setEmail,
  setPassword,
}: LoginFormInputsProps) => {
  return (
    <>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        aria-label="Email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        name="password"
        aria-label="Password"
        placeholder="password"
      />
    </>
  );
};

export default LoginFormInputs;
