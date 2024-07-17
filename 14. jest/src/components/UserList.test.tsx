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

    const loader = screen.getByText(/Loading.../i);
    expect(loader).toBeInTheDocument();

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

  // galima naudoti it
  //   it("shows 'So much users!' if there are more than 5 users", async () => {
  //     const muchUsers = [
  //       ...users,
  //       { id: 3, name: "Rokas Doe" },
  //       { id: 4, name: "Tadas Doe" },
  //       { id: 5, name: "Greta Doe" },
  //     ];
  //     mockedAxios.get.mockResolvedValue({ data: muchUsers });

  //     render(<UserList />);

  //     await waitFor(() =>
  //       expect(screen.getByText(/So much users!/i)).toBeInTheDocument()
  //     );
  //   });
});
