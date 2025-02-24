function printName(name) {
  console.log(`Hello ${name}, how are you?`);
}

// printName("Ajay");
// printName("Hitesh Sir");
// printName("Piyush Sir");
// printName("Harry Sir");

let globalVar = "I am global";
function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  console.log(blockScopedVar);
}

// console.log(globalVar);
// modifyGlobal();
// console.log(globalVar);

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
let config = (function () {
  let settings = {
    theme: "dark",
    fontSize: 21,
  };
  return settings;
})(); // IIFE

(() => {})(); // IIFE
(function () {})(); // IIFE

// In JavaScript, this refers to the current execution context or object.
// call() invokes a function immediately with a specified this value(context change karta hai) and arguments.
// bind() returns a new function with a specified this value(context change) and arguments, without invoking it immediately.
let person1 = {
  firstName: "Hitesh",
  greet: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

let person2 = {
  firstName: "Ajay",
};

person1.greet.call(person2); // we change context using call method
person1.greet.call({ firstName: "Ram" });

const bindGreet = person1.greet.bind({ firstName: "Vijay" }); // bind returns a new function
bindGreet();
