import { render, screen, fireEvent } from "@testing-library/react";
import EditableList from "./EditableList";

const items = ["Item 1", "Item 2", "Item 3"];

test("edits and saves an item in the list", () => {
  render(<EditableList items={items} />);

  const [firstItem] = screen.getAllByText(/Edit/i);

  fireEvent.click(firstItem);

  const input = screen.getByDisplayValue(/Item 1/i);
  fireEvent.change(input, { target: { value: "Updated Item 1" } });

  fireEvent.click(screen.getByText(/Save/i));

  expect(screen.getByText(/Updated Item 1/i)).toBeInTheDocument();
});
