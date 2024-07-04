var isDone = false;
var count = 42;
var userName = "John";
var numbers = [1, 2, 3, 4];
var anything = "Hello";
var myName = "rokas";
var age = 18;
var plateNumber = "JMP:204";
var newValue = 789;
plateNumber = newValue.toString();
var surname = null;
if (true) {
    surname = "Andreikenas";
}
var otherNames = ["rokas", "rolandas", "kestutis"]; // more common way
var names = ["rokas", "rolandas", "kestutis"]; // less common way
var numbersAndStrings = ["Rokas", 1];
// numbersAndStrings.map(item => item.toUpperCase())
var anyArray = {};
var random = {}; // not recommended
random = null;
random = "";
var user = {
    name: "Alice",
    age: 30,
};
var fakeUser = {
    name: "rokas",
    age: 82,
    birthDate: new Date(),
};
// function
function add(a, b) {
    return a + b;
}
var add1 = function (a, b) {
    return a + b;
};
var jsAdd = function (a, b) {
    return a + b;
};
var sum = add(5, 10);
var showFullUserInfo = function (user) {
    var _a;
    return "".concat(user.name, " ").concat(user.age, " ").concat((_a = user.birthDate) !== null && _a !== void 0 ? _a : "");
};
console.log(showFullUserInfo({ name: "Rokas", age: 50 }));
// union types and intersections
var value;
value = "Hello";
value = 42;
var emp = {
    name: "Bob",
    employeeId: 123,
};
var dog = {
    breed: "Dalmantine",
    eat: function () { return console.log("Yummy"); },
};
// type CatAnimal = Cat & Animal;
// Generic
// Funkcija, kuri priima masyvą ir grąžina jo pirmąjį elementą
function getFirstElement(arr) {
    return arr[0];
}
var firstEl = getFirstElement([1, 2]);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
Direction.Down; // DOWN
console.log(Direction.Right);
var Source = {
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
typeof null; // null
typeof undefined; // "undefined"
typeof {}; //
typeof []; //
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
