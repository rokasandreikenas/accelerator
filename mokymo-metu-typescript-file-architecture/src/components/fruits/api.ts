import { fruits } from "./consts";
import { Fruit, NewFruit } from "./types";

export const fetchFruits = async (): Promise<Fruit[]> => {
  return new Promise((resolve) => resolve(fruits));
};

export const createFruit = async (fruit: NewFruit) => {
  return new Promise((resolve) => resolve({ ...fruit, id: Date.now() }));
};
