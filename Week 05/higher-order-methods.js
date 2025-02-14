/*
    A Higher-Order Function (HOF) is a function that accepts another function as an argument and/or returns a function.

    That’s why map(), filter(), and reduce() are called higher-order functions.
*/

// Creates a new array
let arr1 = [1, 4, 7, 3, 8];

let newArr1 = arr1.map((element, index, array) => {
  //   console.log(element, index, array);
  return element * 2;
});

// console.log(newArr1, arr1);

let arr2 = [1, 4, 7, 3, 8, 5];

// Creates a new array
let newArr2 = arr2.filter((element, index, array) => {
  return element >= 5;
});

// console.log(newArr2, arr2);

let arr3 = [1, 4, 7, 3, 8, 5];

// Reduces the array to a single value
let reducedArray = arr3.reduce((element1, element2) => {
  return element1 + element2;
});

console.log(reducedArray);
