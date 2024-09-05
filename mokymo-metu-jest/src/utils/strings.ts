export const getFirstElement = <T>(arr: T[]) => {
  return Array.isArray(arr) ? arr[0] : arr;
};
