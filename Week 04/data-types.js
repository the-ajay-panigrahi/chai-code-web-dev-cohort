/*
    Variables are containers that store values.
    We can use `var`, `let`, and `const` keywords to declare variables and allocate memory.

    - `var`: Legacy keyword, not recommended due to scoping issues.
    - `let`: Preferred for variables whose values may change.
    - `const`: Used for constants—once assigned, the value cannot be changed.
*/

var kuchBhi = 101; // Legacy code, avoid using `var`
let name = "Ajay"; // `let` is preferred
const pi = 3.14; // `const` for constants

// console.log(kuchBhi, name, pi);

/*
    JavaScript has two main categories of data types:
    1) **Primitive**
    2) **Non-Primitive (Reference types)**

    **1) Primitive Data Types:**
       - String     => "", '', ``
       - Number     => 21, -34, 6.34
       - Boolean    => true, false
       - BigInt     => Large numbers (e.g., 352634637366n)
       - Null       => Represents an empty value (e.g., when fetching temperature from a server, `null` is returned instead of 0, as 0 is a valid temperature).
       - Undefined  => A variable that has been declared but not assigned a value.
       - Symbol     => Used for unique values.

    **2) Non-Primitive (Reference) Data Types:**
       - Object    => Collection of key-value pairs.
       - Array     => Ordered collection of values.
       - Function  => Block of reusable code that provides functionality.
*/

// 1) Primitive Data Types
let firstName = "Ajay"; // String
let age = 21; // Number
let isMarried = false; // Boolean
let largeNumber = 3756867967978978545n; // BigInt
let temperature = null; // Null
let state; // Undefined (automatically assigned)
let unique = Symbol("123"); // Symbol

console.log(firstName, typeof firstName);
console.log(age, typeof age);
console.log(isMarried, typeof isMarried);
console.log(largeNumber, typeof largeNumber);
console.log(temperature, typeof temperature);
console.log(state, typeof state);
console.log(unique, typeof unique);

// 2) Non-Primitive (Reference) Data Types

// Object
let allUsers = {
  "full name": "Ajay B Panigrahi",
  age: 21,
  maritalStatus: false, 
  designation: "Programmer",
};

console.log(allUsers, typeof allUsers);

// Array
let fruits = [
  "Mango",
  "Orange",
  "Dragon Fruit",
  "Avocado", 
  "Banana",
  "Papaya", 
];

console.log(fruits, typeof fruits);

// Function
function voteEligible(age) {
  if (age >= 18) {
    return `Your age is ${age}, and you can vote!`;
  } else {
    return `Your age is ${age}, and you cannot vote!`;
  }
}

let result = voteEligible(21);
console.log(result);
console.log(voteEligible, typeof voteEligible);
