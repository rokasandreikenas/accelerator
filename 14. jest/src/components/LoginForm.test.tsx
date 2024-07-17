import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

test("submits the form with username and password", async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  await userEvent.type(screen.getByLabelText(/Username/i), "testuser");
  await userEvent.type(screen.getByLabelText(/Password/i), "password");

  const loginButton = screen.getByRole("button", { name: "Login" });
  await userEvent.click(loginButton);

  expect(handleSubmit).toHaveBeenCalledWith("testuser", "password");
});

test("validates fields and submits the form", () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const loginLabel = screen.getByTestId("login-label");
  expect(loginLabel).toBeInTheDocument();

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: "testuser" },
  });

  // almost same as
  // userEvent.type(screen.getByLabelText(/Username/i), 'testuser')

  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "password" },
  });

  fireEvent.click(loginButton);
  // userEvent.click(loginButton)

  expect(handleSubmit).toHaveBeenCalledWith("testuser", "password");
});
