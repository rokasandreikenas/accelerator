// Funckija, kuri priima string tipo argumentą ir grąžina string tipo reikšmę
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// Funkcinis išraiška (arrow function), kuri priima du number tipo argumentus ir grąžina number tipo reikšmę
var add = function (a, b) {
    return a + b;
};
// Sukuriamas objektas emp, kuris atitinka EmployeePerson tipą
var emp = {
    name: "Bob",
    employeeId: 123,
};
// Išvedama į konsolę funkcijos greet kvietimo rezultatas su argumentu "World"
console.log(greet("World"));
// Kintamasis su union tipu, kuris gali būti arba string, arba number tipo
var identifier;
identifier = "abc"; // Teisinga
identifier = 123; // Teisinga
// identifier = true; // Klaida, nes boolean nėra dalis union tipo
// Funkcija, kuri priima masyvą ir grąžina jo pirmąjį elementą
function getFirstElement(arr) {
    return arr[0];
}
var numArray = [1, 2, 3];
var strArray = ["a", "b", "c"];
console.log(getFirstElement(numArray)); // Išveda: 1
console.log(getFirstElement(strArray)); // Išveda: a
// Enum, kuris apibrėžia keletą konstantų
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var move = function (dir) {
    console.log("Moving ".concat(dir));
};
move(Direction.Up); // Išveda: Moving UP
var pets = [
    {
        breed: "Labrador",
        bark: function () { return console.log("Woof!"); },
    },
    {
        breed: "Siamese",
        purr: function () { return console.log("Purr..."); },
    },
];
// Patikrinimas ir iškvietimas pagal tipą
pets.forEach(function (pet) {
    if ("bark" in pet) {
        pet.bark();
    }
    else {
        pet.purr();
    }
});
// Sąlyginė tipų kontrolė su typeof
function double(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value.repeat(2);
    }
}
console.log(double(10)); // Išveda: 20
console.log(double("Hi")); // Išveda: HiHi
// Tipas, kuris gali būti null arba number
var nullableNumber = null;
nullableNumber = 42; // Teisinga
// Generinė funkcija su numatytąja reikšme
function identity(value) {
    return value;
}
console.log(identity(123)); // Išveda: 123
console.log(identity("Hello")); // Išveda: Hello
