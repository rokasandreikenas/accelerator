// Funckija, kuri priima string tipo argumentą ir grąžina string tipo reikšmę
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Funkcinis išraiška (arrow function), kuri priima du number tipo argumentus ir grąžina number tipo reikšmę
const add = (a: number, b: number): number => {
  return a + b;
};

// Sąsaja apibrėžia objektą, kuriame yra name laukas su string tipo reikšme
interface Person {
  name: string;
}

// Sąsaja apibrėžia objektą, kuriame yra employeeId laukas su number tipo reikšme
interface Employee {
  employeeId: number;
}

// Naujas tipas, kuris yra dviejų sąsajų (Person ir Employee) sujungimas
type EmployeePerson = Person & Employee;

// Sukuriamas objektas emp, kuris atitinka EmployeePerson tipą
const emp: EmployeePerson = {
  name: "Bob",
  employeeId: 123,
};

// Išvedama į konsolę funkcijos greet kvietimo rezultatas su argumentu "World"
console.log(greet("World"));

// Kintamasis su union tipu, kuris gali būti arba string, arba number tipo
let identifier: string | number;

identifier = "abc"; // Teisinga
identifier = 123; // Teisinga
// identifier = true; // Klaida, nes boolean nėra dalis union tipo

// Funkcija, kuri priima masyvą ir grąžina jo pirmąjį elementą
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numArray = [1, 2, 3];
const strArray = ["a", "b", "c"];

console.log(getFirstElement(numArray)); // Išveda: 1
console.log(getFirstElement(strArray)); // Išveda: a

// Enum, kuris apibrėžia keletą konstantų
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const move = (dir: Direction): void => {
  console.log(`Moving ${dir}`);
};

move(Direction.Up); // Išveda: Moving UP

// Sąlyginis tipas
type IsNumber<T> = T extends number ? "Number" : "Not a Number";

type Test1 = IsNumber<number>; // Test1 yra "Number"
type Test2 = IsNumber<string>; // Test2 yra "Not a Number"

// Objektų masyvas su sąsajomis ir union tipais
interface Dog {
  breed: string;
  bark(): void;
}

interface Cat {
  breed: string;
  purr(): void;
}

type Pet = Dog | Cat;

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

// Sąlyginė tipų kontrolė su typeof
function double(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.repeat(2);
  }
}

console.log(double(10)); // Išveda: 20
console.log(double("Hi")); // Išveda: HiHi

// Tipas, kuris gali būti null arba number
let nullableNumber: number | null = null;
nullableNumber = 42; // Teisinga

// Generinė funkcija su numatytąja reikšme
function identity<T = string>(value: T): T {
  return value;
}

console.log(identity(123)); // Išveda: 123
console.log(identity("Hello")); // Išveda: Hello
