let isDone: boolean = false;
let count: number = 42;
let userName: string = "John";
let numbers: number[] = [1, 2, 3, 4];
let anything: any = "Hello";

const myName: string = "rokas";
const age = 18;

let plateNumber: string = "JMP:204";
const newValue = 789;
plateNumber = newValue.toString();

let surname: string | null = null;

if (true) {
  surname = "Andreikenas";
}

const otherNames: string[] = ["rokas", "rolandas", "kestutis"]; // more common way
const names: Array<string> = ["rokas", "rolandas", "kestutis"]; // less common way

const numbersAndStrings: (string | number)[] = ["Rokas", 1];

// numbersAndStrings.map(item => item.toUpperCase())

const anyArray: any = {};

let random: any = {}; // not recommended

random = null;

random = "";

// interfaces (objektams)

interface User {
  name: string;
  age: number;
  birthDate?: Date; // optional parametras
}

const user: User = {
  name: "Alice",
  age: 30,
};

const fakeUser: User = {
  name: "rokas",
  age: 82,
  birthDate: new Date(),
};

// function

function add(a: number, b: number): number {
  return a + b;
}

const add1 = (a: number, b: number): number => {
  return a + b;
};

const jsAdd = (a: string, b: string) => {
  return a + b;
};

const sum = add(5, 10);

const showFullUserInfo = (user: User) => {
  return `${user.name} ${user.age} ${user.birthDate ?? ""}`;
};

console.log(showFullUserInfo({ name: "Rokas", age: 50 }));

// union types and intersections

let value: string | number;
value = "Hello";
value = 42;

interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee; // better approach

const emp: EmployeePerson = {
  name: "Bob",
  employeeId: 123,
};

interface EmployeePerson1 extends Person, Employee {} // sometimes

interface Animal {
  eat: () => void;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  breed: "Dalmantine",
  eat: () => console.log("Yummy"),
};

// not very good readability
type Cat = {
  breed: string;
} & Animal;

// type CatAnimal = Cat & Animal;

// Generic

// Funkcija, kuri priima masyvą ir grąžina jo pirmąjį elementą
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstEl = getFirstElement<number>([1, 2]);

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

Direction.Down; // DOWN
console.log(Direction.Right);

const Source = {
  Email: "Email",
  SMS: "SMS",
  Office: "Office",
};

console.log(Source.Email);

// Sąlygos

// Sąlyginė tipų kontrolė su typeof
// function double(value: number | string): number | string {
//   if (typeof value === "number") {
//     return value * 2;
//   } else {
//     return value.repeat(2);
//   }
// }

// console.log(double(10)); // Išveda: 20
// console.log(double("Hi")); // Išveda: HiHi

typeof "rokas"; // "string"
typeof 15; // "number"
typeof null; // object
typeof undefined; // "undefined"
typeof {}; //
typeof []; //

console.log(typeof null); // object remember
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof 0); // number

const x = 0; // false

if (x) {
}
