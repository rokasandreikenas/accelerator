function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));

let isDone: boolean = true;
let count: number = 7;
let userName: string = "John";
let numbers: number[] = [1, 2, 3, 4];
let anything: any = "Hello";

let letters: string[] = ["R", "O", "K"];
let users: { name: string }[] = [{ name: "Rokas" }];

interface User {
  name: string;
  surname: string;
  age: number;
  address?: string; // optional parametras
}

const user: User = {
  name: "Alice",
  surname: "Alicia",
  age: 30,
};

interface Animal {
  name: string;
  age: number;
  eat: () => void;
}

interface Dog extends Animal {
  bark: () => void;
}

const otherDog: Dog = {
  name: "Smikis",
  age: 1,
  eat: () => {
    console.log("Yummy");
  },
  bark: () => console.log("Woof"),
};

const dog: Animal = {
  name: "Smikis",
  age: 1,
  eat: () => {
    console.log("Yummy");
  },
};

function add(x: number, y: number): number {
  return x + y;
}

const add1 = (x: number, y: number) => x + y;

let value: string | number;
value = "Hello";
value = 42;

let age: string | number = "5";

type UserStatus = "pending" | "active" | "disabled";

let userStatus: UserStatus = "pending";

interface Person {
  name: string;
  surname: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee & { id: string };

const employeePerson: EmployeePerson = {
  id: "1",
  name: "Person",
  surname: "surname of person",
  employeeId: 1,
};

// js || ts tipuose | (or)

export type Fruit = {
  name: string;
  category: string;
};

export const carrot: Fruit = {
  name: "White carrot",
  category: "",
};

// Generic tipai
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const item = getFirstElement<number>([1]);
getFirstElement<string>(["Rokas"]);

function getFirstElementStr(arr: string[]): string {
  return arr[0];
}

function getFirstElemenNumber(arr: number[]): number {
  return arr[0];
}

const getFirstStringElement = <T>(arr: T[]) => arr[0];

enum ApplicationStatus {
  INITIAL = "INITIAL",
  STARTED = "STARTED",
}

// ApplicationStatus.INITIAL => "INITIAL"

type IsNumber<T> = T extends number ? "Number" : "Not a Number";

interface Dog1 {
  breed: string;
  bark(): void;
}

interface Cat1 {
  breed: string;
  purr(): void;
}

type Pet = Dog1 | Cat1;

const pets: Pet[] = [
  {
    breed: "Labrador",
    bark: () => console.log("Woof!"),
  },
  {
    breed: "Siamese",
    purr: () => console.log("Purr..."),
  },
];

// Patikrinimas ir iškvietimas pagal tipą
pets.forEach((pet) => {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.purr();
  }
});

interface Item {
  id: number;
}

interface UpdatingItem {}

const item: Item | UpdatingItem = {};

if ("id" in item) {
  // Item
} else {
  // UpdatingItem
}

function double(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.repeat(2);
  }
}

const error: string | string[] = "";

const showError = () => {
  if (typeof error === "string") {
    return error;
  } else {
    return error;
  }
};

function identity<T = number>(value: T): T {
  return value;
}
