import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("increments counter when button is clicked (fireEvent)", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  test("increments counter when button is clicked (userEvent)", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("count is 0");
    await userEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
