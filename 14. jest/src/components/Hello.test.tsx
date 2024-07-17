import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("<Hello />", () => {
  test("returns string with given parameter", () => {
    render(<Hello name="world" />); // renderinam
    // screen = <div>Hello world}</div>
    const element = screen.getByText(/Hello, world/); // istraukiam
    expect(element).toBeInTheDocument(); // patikrinam
  });

  test("returns string with given parameter (multiple getAll*)", () => {
    render(<Hello name="world" />);

    const elements = screen.getAllByText("Hello, world");

    // const element = elements[0];
    // expect(element).toBeInTheDocument();

    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("returns string with given parameter (findBy)", async () => {
    // Naudojam asynchroniniam veiksmui
    render(<Hello name="world" />);

    const element = await screen.findByText(/Hello, world/);

    expect(element).toBeInTheDocument();
  });
});
