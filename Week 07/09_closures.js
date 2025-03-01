/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.

Closure :Function bundled with its lexical environment is known as a closure.

Lexical Environment gives access to the outer/surrounding scope.

****off topic****
A First-Class Function means functions are treated like regular variables in JavaScript. This means:
✔ They can be assigned to a variable.
✔ They can be passed as an argument to another function.
✔ They can be returned from another function.

A Higher-Order Function (HOF) is a function that:
✔ Accepts a function as an argument (callback function).
✔ Returns a function as its output.
A Higher-Order Function (HOF) is a function that either:
1️⃣ Takes another function as an argument (callback).
2️⃣ Returns a function.
3️⃣ Or both!


❌ First-Class Functions and Higher-Order Functions are NOT the same.
✅ First-Class Functions allow functions to be assigned, passed, and returned like values.
✅ Higher-Order Functions use first-class functions to accept or return functions.
 */

function x(firstName) {
  function y() {
    console.log(`${firstName} is a programmer!`);
  }
  return y;
}

let result = x("Ajay");
result();
