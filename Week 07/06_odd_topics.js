// setTimeout(() => {
//   console.log("I am done.");
// }, 2000);

// Call Stack(lifo), Call back queue(fifo)

let obj = {
  firstName: "Ajay",
  greet: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

// console.log("Hi");

// setTimeout(obj.greet.bind(obj), 5 * 1000);

// console.log("Bye");

/*
Promise(either it will be resolved or rejected), 

Starvation(Micro task queue khali hi nahi horahi, isiliye callback task queue call stack mein cheeze send nahi karpa rahi...so callback task queue is starving, this concept is called starvation)
*/

// setTimeout(function timerFn() {
//   console.log("Hello after 0s");
// }, 0);

// Promise.resolve().then(function p1() {
//   console.log("1. Promise Resolve Hogya");
//   Promise.resolve().then(function p2() {
//     console.log("2. Promise Resolve Hogya");
//     Promise.resolve().then(function p3() {
//       console.log("3. Promise Resolve Hogya");
//       Promise.resolve().then(function p4() {
//         console.log("4. Promise Resolve Hogya");
//       });
//     });
//   });
// });

// console.log("Hi");

/*
The global execution context (GEC) is the default environment where JavaScript code runs and happens inside the call stack. It has two phases:

Memory Creation Phase: The JavaScript engine sets up variables, functions, and the this value in memory, without executing code.

Code Execution Phase: The actual code is executed line by line.
Whenever a function is created or called, a new execution context (EC) is created and pushed to the call stack, which is cleared once execution is complete.
*/

/*
Hoisting :-
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Yes, both let and const are hoisted to the top of their scope, but they behave differently from var.

Hoisted: The declarations (not the values) are moved to the top of the block scope.

Temporal Dead Zone (TDZ): This is the period between the entering of the scope and the actual initialization of the variable. During this time, trying to access a let or const variable will result in a ReferenceError because the variable is in a "dead zone" before its declaration and initialization.

In short, they are hoisted, but they stay in the "temporal dead zone" until their actual initialization in the code.

The Temporal Dead Zone (TDZ) is the time period between entering a scope (like a function or block) and when a let or const variable is actually initialized with a value. During this time, if you try to access the variable, JavaScript will throw a ReferenceError because the variable is "invisible" or not yet available to use.

In simple words: It's like a "waiting room" where the variable exists but isn't ready for use until the code reaches its declaration.

In short:
let and const: Hoisted but with the TDZ.
var: Hoisted and initialized with undefined.
Function Declarations: Fully hoisted (can be called before their definition).
Function Expressions and Arrow Functions: Hoisted like variables, with the function body not accessible until initialization.
*/
// console.log(demo); // ReferenceError: Cannot access 'demo' before initialization
// let demo = 123;

// console.log(demo); // ReferenceError: demo is not defined
// let demo = 123;
