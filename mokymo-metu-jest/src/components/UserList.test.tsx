import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

test("loads and displays users", async () => {
  mockedAxios.get.mockResolvedValue({ data: users }); // uzmockina

  render(<UserList />); // isrenderina komponenta

  //   screen.debug(undefined, 1000); // rodo kas yra isrenderinta

  const header = screen.getByText("Waiting"); // is karto traukia
  expect(header).toBeInTheDocument();

  const loader = screen.getByText("Loading...");
  expect(loader).toBeInTheDocument();

  const user = await screen.findByText("John Doe"); // traukia asynchroniskai, tad laukia
  expect(user).toBeInTheDocument();
  // await waitFor(() => {
  //   const user = screen.getByText("John Doe");
  //   expect(user).toBeInTheDocument();
  // });

  //   await waitFor(() =>
  // expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
  //   );
  await waitFor(() => expect(screen.getByText("Jane Doe")).toBeInTheDocument()); // wait for apdoroja asynchroniskai
});

test("handles error", async () => {
  mockedAxios.get.mockRejectedValue({ message: "Error" });

  render(<UserList />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText(/Failed to load users/i)).toBeInTheDocument()
  );
});
