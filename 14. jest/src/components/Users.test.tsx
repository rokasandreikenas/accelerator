import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("User", () => {
  test("renders heading", async () => {
    render(<Users />);
    const header = screen.getByRole("heading", { name: "Users" });
    expect(header).toBeInTheDocument;
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
