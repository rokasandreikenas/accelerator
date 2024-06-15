import { act } from "react";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("should initialize counter with initial value", () => {
  const { result } = renderHook(() => useCounter(5));
  expect(result.current.count).toBe(5);
});

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("should decrement counter", () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(4);
});
