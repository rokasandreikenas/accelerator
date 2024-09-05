import { getFirstElement } from "./strings";

// describe("getFirstElement", () => {
//   test("returns first string element from string array", () => {
//     const arr = ["test", "best", "jest"];
//     expect(getFirstElement(arr)).toBe("test");
//   });

//   test("returns first object element from object array", () => {
//     const arr = [
//       { id: 1, name: "Rokas" },
//       { id: 2, name: "Tomas" },
//     ];
//     expect(getFirstElement(arr)).toStrictEqual({ id: 1, name: "Rokas" });
//   });

//   test("returns first object element from object array", () => {
//     const arr: any = null;
//     expect(getFirstElement(arr)).toBe(null);
//   });

//   test("returns first object element from object array", () => {
//     const arr: any = {};
//     expect(getFirstElement(arr)).toStrictEqual({});
//   });

//   test("returns first object element from object array", () => {
//     const arr: any = [];
//     expect(getFirstElement(arr)).toBe(undefined);
//   });
// });

describe("getFirstElement", () => {
  it("should return the first element when an array is passed", () => {
    const input = [1, 2, 3];
    const result = getFirstElement(input);
    expect(result).toBe(1);
  });

  it("should return the first element when an array of strings is passed", () => {
    const input = ["a", "b", "c"];
    const result = getFirstElement(input);
    expect(result).toBe("a");
  });

  it("should return the first element when an array of objects is passed", () => {
    const input = [{ id: 1 }, { id: 2 }];
    const result = getFirstElement(input);
    expect(result).toEqual({ id: 1 });
  });

  it("should return the value itself if a non-array value is passed", () => {
    const input = "not an array";
    const result = getFirstElement(input as unknown as any[]);
    expect(result).toBe("not an array");
  });

  it("should return undefined if an empty array is passed", () => {
    const input: any[] = [];
    const result = getFirstElement(input);
    expect(result).toBeUndefined();
  });

  it("should handle arrays of different types", () => {
    const input = [true, false];
    const result = getFirstElement(input);
    expect(result).toBe(true);
  });

  it("should handle array of mixed types", () => {
    const input = [1, "string", true];
    const result = getFirstElement(input);
    expect(result).toBe(1);
  });
});
