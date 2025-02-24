var demo = 123; // legacy/old way
let fname = "Ajay"; // recommended
const pi = 3.14;

let age = 21; // Number
let fullName = "Ajay B Panigrahi"; // String
let isMarried = false; // Boolean
let temperature = null; // Object
let favClass; // Undefined
let unique = Symbol(); // Symbol
let BigNumber = 353465656546643525232n; // BigInt

let arr = [1, 2, 3, 4, 5]; // Array(Object)

let allUsers = {
  firstName: "Ajay",
  age: 21,
  favColors: ["Red", "Yellow", "Orange", "White"],
  isStudent: true,
}; // Object

let num = "123";
let convertedNumber = Number(num);
// let convertedNumber = +num;
// let convertedNumber = parseInt(num);
// console.log(convertedNumber, typeof convertedNumber);

let str = 456;
let convertedString = String(str);
// console.log(convertedString, typeof convertedString);

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// console.table([sum, difference, product, quotient, remainder, power]);

let x = 10;
let y = 10;

// console.log(x == y); // Equal to
// console.log(x != y); // Not Equal to
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));
// console.log(Math.random() * 10);

let firstName = "Ajay";
let lastName = "Panigrahi";
let newfullName = firstName + " " + lastName; // Ajay Panigrahi

let message = "Hello World";
// console.log(message.toUpperCase());
// console.log(message.indexOf("W"));
// console.log(message.slice(0, 7));
// console.log(message.substring(0, 7));

let myName = "Ajay";
let greeting = `Hello ${myName}, from chaicode`;
// console.log(greeting);
