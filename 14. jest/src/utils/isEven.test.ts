import { isEven } from "./isEven";

test("returns true for even numbers", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(4)).toBe(true);
});

test("returns false for odd numbers", () => {
  expect(isEven(1)).toBe(false);
  expect(isEven(3)).toBe(false);
});

describe("isEven", () => {
  test("should return ...", () => {
    expect(isEven(1)).toBe(false);
  });

  it("should return ...", () => {
    expect(isEven(2)).toBe(true);
  });
});
