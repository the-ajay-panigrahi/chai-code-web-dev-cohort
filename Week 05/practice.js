// Problem: Create an array containing different types of teas.
const teaTypes = [
  "Masala chai",
  "Green tea",
  "Black tea",
  "Orange tea",
  "Oolong tea",
  "Lemon tea",
  "Ginger tea",
];
// console.log(teaTypes);

// Problem: Add "Chamomile tea" to the existing list of teas
teaTypes.push("Chamomile tea");
// console.log(teaTypes);

//Problem: Remove "Oolong tea" from the list of teas.
const index = teaTypes.indexOf("Oolong tea");
if (index != -1) {
  teaTypes.splice(index, 1);
}
// console.log(teaTypes);

// Problem: Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teaTypes.filter((tea) => tea !== "Masala chai");
// console.log(caffeinatedTeas);

// Problem: Sort the list of teas in alphabetical order.
// const sortedTeaTypes = teaTypes.sort();
// console.log(sortedTeaTypes);

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teaTypes.length; i++) {
  //   console.log(teaTypes[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Masala chai").
let count = 0;
for (let i = 0; i < teaTypes.length; i++) {
  if (teaTypes[i] != "Masala chai") {
    count++;
  }
}
// console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase.
let upperCaseArray = [];
for (let i = 0; i < teaTypes.length; i++) {
  upperCaseArray.push(teaTypes[i].toUpperCase());
}
// console.log(upperCaseArray);

// Problem: Use a for loop to find the tea name with the most characters.
let maxLengthTea = "";
for (let i = 0; i < teaTypes.length; i++) {
  if (teaTypes[i].length > maxLengthTea.length) {
    maxLengthTea = teaTypes[i];
  }
}
// console.log(maxLengthTea);

// Problem: Use a for loop to reverse the order of teas in the array.
// let reversedArray = [];
// for (let i = teaTypes.length - 1; i >= 0; i--) {
//   //   console.log(teaTypes[i]);
//   reversedArray.push(teaTypes[i]);
// }
// console.log(reversedArray);

let reversedArray = teaTypes.reverse();
console.log(reversedArray);
