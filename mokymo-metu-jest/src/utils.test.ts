import { isAdult } from "./utils";

describe("isAdult ", () => {
  test("returns false is age is under 18", () => {
    expect(isAdult(15)).toBe(false);
  });

  test("returns true is age is over 18", () => {
    expect(isAdult(40)).toBe(true);
    expect(isAdult(18)).toBe(true);
  });
});

// describe("findLargestNumber", () => {
//   test("should return empty array if none items are passed", () => {
//     expect(findLargestNumber([])).toBe([]);
//   });

//   test("should return largest number if only positive items are passed", () => {
//     expect(findLargestNumber([1, 2, 3])).toBe([]);
//   });

//   test("should return largest number if only negative items are passed", () => {
//     expect(findLargestNumber([1, 2, 3])).toBe([]);
//   });

//   test("should return empty array if null is passed", () => {
//     expect(findLargestNumber(null!)).toBe([]);
//   });

//   test("should return empty array if object is passed", () => {
//     expect(findLargestNumber({ id: 1 } as unknown as number[])).toBe([]);
//   });
// });
