import { isEven, sumOfArray } from "./numbers";

test("isEven returns true when passing even number", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(14)).toBe(true);
});

test("isEven returns false when passing odd number", () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(99)).toBe(false);
});

describe("sumOfArray", () => {
  test("returns sum of positive numbers", () => {
    const arr = [1, 2, 3];
    expect(sumOfArray(arr)).toBe(6);
  });

  test("returns sum of negative numbers", () => {
    const arr = [-1, -2, -3];
    expect(sumOfArray(arr)).toBe(-6);
  });

  test("returns 0 if array is not of numbers", () => {
    const arr: any[] = ["rokas", "tomas"];
    expect(sumOfArray(arr)).toBe(0);
  });

  test("returns sum of different type of elements", () => {
    const arr: any[] = [10, "", 5];
    expect(sumOfArray(arr)).toBe(15);
  });
});
