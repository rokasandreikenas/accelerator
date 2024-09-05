export const isEven = (num: number): boolean => num % 2 === 0;

export const sumOfArray = (numbers: number[]) => {
  return numbers.reduce((sum, number) => {
    const num = typeof number === "number" ? number : 0;
    return sum + num;
  }, 0);
};
