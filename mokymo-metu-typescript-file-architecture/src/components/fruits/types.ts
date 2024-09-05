export interface Fruit {
  id: number;
  color: string;
  name: string;
}

// Construct a type with the properties of T except for those in type K.
export type NewFruit = Omit<Fruit, "id">;
