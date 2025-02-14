/*
    Polyfills are code snippets that provide modern JavaScript functionality to older browsers lacking native support.  They implement missing features, ensuring consistent behavior across different environments.
*/

// forEach ka polyfill
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    let originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      userFn(originalArray[i], i, originalArray);
    }
  };
}

let sampleArr = [1, 5, 4, 8];
sampleArr.myForEach((value, index, arr) => {
  console.log(`The value at index ${index} is ${value} - Array [${arr}]`);
});

// map ka polyfill
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let value = userFn(this[i], i, this);
      result.push(value);
    }
    return result;
  };
}

let sampleArr2 = [1, 2, 3, 4, 5];
let demo = sampleArr2.myMap((value, index, arr) => {
  return value * 5;
});
console.log(sampleArr2);
console.log(demo);

// filter ka polyfill
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

let sampleArr3 = [1, 2, 3, 4, 5, 6, 7];
let demo1 = sampleArr3.myFilter((value) => {
  return value >= 5;
});
console.log(demo1);
