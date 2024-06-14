import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("increments counter when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
