import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

describe("<UserList />", () => {
  test("loads and displays users", async () => {
    mockedAxios.get.mockResolvedValue({ data: users });

    render(<UserList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument()
    );
  });

  test("handles error", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Failed to load"));

    render(<UserList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/Failed to load users/i)).toBeInTheDocument()
    );
  });
});
