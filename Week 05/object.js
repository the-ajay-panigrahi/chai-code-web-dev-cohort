/*
   Objects are collections of key-value pairs that store data (properties) and functions (methods).

   They are stored in heap memory, but their memory address (reference) is stored in a variable in stack memory.

   Stack vs Heap Memory in JavaScript:-
     🔹 Stack Memory (Fast & Small)
         ✔ Stores primitive values (numbers, strings, booleans, etc.).
         ✔ Stores function calls and execution context.
         ✔ Follows LIFO (Last In, First Out).
         ✔ Memory is automatically cleared when a function exits.
         ✔ Variables get a copy of the value, not a reference.

     🔹 Heap Memory (Slow & Large)
         ✔ Stores objects, arrays, and functions (non-primitives).
         ✔ Objects are stored by reference, and the reference is kept in stack memory.
         ✔ Memory is managed by the Garbage Collector.
         ✔ More flexible but slower than stack.

    
     🔹 Pass by Value → Primitives are copied, so changes don’t affect the original.
     🔹 Pass by Reference → Objects/arrays pass their memory reference, so changes affect the original.
     🔹 Garbage Collector in JavaScript → Automatically removes unused objects from heap memory.



     A memory leak happens when data or objects stay in memory because they are still being referenced, even though they are no longer needed. This prevents the garbage collector from cleaning them up, which can cause your program to use more and more memory over time.

     Memory Leak Example with Objects:
        let obj1 = { name: "Ajay" };  // Create an object
        let obj2 = obj1;               // obj2 references obj1
        obj1 = null;                   // Set obj1 to null, but obj2 still holds the reference

     What happens?
        When obj1 is set to null, the object { name: "Ajay" } still exists in memory because obj2 is still referencing it.
        If no one clears obj2, the object stays in memory, even though you don't need it anymore.

     Fixing the Leak:
        obj2 = null;  // Now the object can be garbage collected
        Once obj2 is also set to null, the object is no longer referenced and can be cleaned up by JavaScript's garbage collector.
*/

let obj = {};
let person = {
  firstName: "Ajay",
  lastName: "Panigrahi",
  age: 21,
  isMarried: false,
  skills: ["HTML", "CSS", "JS", "Working Brain.exe"],
  address: {
    street: 123,
    pinCode: 54321,
  },
  code: function () {
    console.log("I can code.....");
  },
};

// console.log(person, typeof person);

// console.log(person.firstName);
// console.log(person.skills);
// console.log(person.skills[3]);
// console.log(person.skills[person.skills.length - 1]);
// console.log(person.address);
// console.log(person.address.pinCode);
// person.code();

// Stack memory (primitives)
let x = 10; // Stored directly in stack
let y = x; // New copy created in stack (separate memory)

// Heap memory (objects)
// let obj1 = { name: "Ajay" }; // Object stored in heap, reference stored in stack
// let obj2 = obj1; // obj2 gets the same reference (not a new object)
// obj2.name = "Updated Ajay";
// console.log(obj1.name); // "Updated Ajay" (both point to same memory)
// console.log(obj2.name);

/*
    Shallow Copy (Using Spread Operator ...):
      A shallow copy creates a new object but copies references to nested objects (not the objects themselves).
      Changes in nested objects affect both the original and the copy.
      Example:
*/
// let obj1 = { name: "Ajay", address: { city: "Bhubaneswar" } };
// let obj2 = { ...obj1 }; // Shallow copy

// obj2.address.city = "Delhi";
// console.log(obj1.address.city); // "Delhi" (changes affect both)


/*
    Deep Copy:
      A deep copy creates a completely independent copy, including nested objects.
      Changes in the copy do not affect the original.

      Method 1: Using JSON Methods
      Convert object to a string (JSON.stringify()) and then parse it back into a new object (JSON.parse()).
      Example:
*/
// let obj1 = { name: "Ajay", address: { city: "Bhubaneswar" } };
// let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

// obj2.address.city = "Delhi";
// console.log(obj1.address.city); // "Bhubaneswar" (no change in original)
