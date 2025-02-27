// forEach
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
      callBack(this[i], i, this);
    }
  };
}

// arr.forEach((value, index) => {
//   console.log(value, index);
// });

// arr.myForEach((value, index) => {
//   console.log(value, index);
// });

// map
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callBack) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let value = callBack(this[i], i, this);
      result.push(value);
    }
    return result;
  };
}

// let result2 = arr2.map((value, index, array) => {
//   console.log(value, index, array);
//   return value * 2;
// });

// let result2 = arr2.myMap((value, index, array) => {
//   console.log(value, index, array);
//   return value * 4;
// });

// console.log(result2);

// filter

// reduce
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callBack, initialValue = undefined) {
    // function hai ki nahi
    if (typeof callBack !== "function") {
      throw new Error(`${callBack} is not a function!`);
    }

    // empty array hai aur initial value nahi hai toh error
    if (this.length === 0 && arguments.length < 2) {
      throw new Error("Cannot reduce empty array!");
    }

    // empty array hai aur initial diya hai
    if (this.length === 0 && arguments.length>=2) {
      return initialValue;
    }

    let accumulator, startIndex;
    if (arguments.length < 2) {
      accumulator = this[0];
      startIndex = 1;
    } else {
      accumulator = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callBack(accumulator, this[i], i, this);
    }
    return accumulator;
  };
}

// let result3 = arr3.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// let result3 = arr3.myReduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 21);

// console.log(result3);


