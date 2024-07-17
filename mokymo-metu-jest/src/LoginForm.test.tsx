import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  const onSubmit = jest.fn();

  test("renders component successfuly", () => {
    render(<LoginForm onSubmit={onSubmit} />);
  });

  test("submits form data", async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    const emailInput = screen.getByRole("textbox", { name: "Email" });
    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(emailInput, { target: { value: "rokas@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "rokas123" } });

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith("rokas@gmail.com", "rokas123");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<LoginForm onSubmit={onSubmit} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
