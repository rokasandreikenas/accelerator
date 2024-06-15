import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("validates fields and submits the form", () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.click(screen.getByText(/Login/i));

  expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "password" },
  });
  fireEvent.click(screen.getByText(/Login/i));

  expect(handleSubmit).toHaveBeenCalledWith("testuser", "password");
});
