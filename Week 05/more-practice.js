// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.
const tea = {
  name: "Lemon tea",
  type: "Green",
  caffeine: "low",
};

// Problem: Access and print the name and type properties of the tea object.
console.log(tea.name);
console.log(tea["type"]);

//Problem: Add a new property origin to the tea object.
tea.origin = "China";
console.log(tea);

//Problem: Change the caffeine level of the tea object to "Medium".
tea.caffeine = "Medium";
console.log(tea);

//Problem: Remove the type property from the tea object.
delete tea.type;
console.log(tea);

//Problem: Check if the tea object has a property origin.
console.log(tea.hasOwnProperty("origin"));
console.log("origin" in tea);

//Problem: Use a for...in loop to print all properties of the tea object.
for (let key in tea) {
  console.log(key);
}

//Problem: Create a nested object representing different types of teas and their properties.
const myTeas = {
  "lemon tea": {
    name: "Nimbu wali chai",
  },
  "black tea": {
    name: "kali chai",
  },
  "ginger tea": {
    name: "adrak wali chai",
  },
};

//Problem: Create a copy of the tea object.
// Shallow Copy
let myTeaCopy1 = { ...tea };
console.log(myTeaCopy1);
console.log(tea);
myTeaCopy1.name = "Ajay";
console.log(myTeaCopy1);
console.log(tea);

// Deep Copy
let myTeaCopy2 = JSON.parse(JSON.stringify(tea));
console.log(myTeaCopy2);
console.log(tea);
myTeaCopy2.name = "Ajay";
console.log(myTeaCopy2);
console.log(tea);

//Problem: Add a custom method describe to the tea object that returns a description string.
tea.describe = function () {
  return "Main hoon giyaan";
};
console.log(tea);
console.log(tea.describe());

//Problem: Merge two objects representing different teas into one.
let myTeas1 = {
  "ginger tea": {
    name: "adrak wali chai",
  },
};

let myTeas2 = {
  "lemon tea": {
    name: "Nimbu wali chai",
  },
  "black tea": {
    name: "kali chai",
  },
};

let finalTeas = { ...myTeas1, ...myTeas2 };
myTeas1["ginger tea"].name = "allum";
console.log(myTeas1);
console.log(myTeas2);
console.log(finalTeas);
