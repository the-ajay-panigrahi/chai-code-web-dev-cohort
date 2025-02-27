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
    if (this.length === 0 && arguments.length >= 2) {
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

// Promise Polyfill(in this version promise chaining is not supported)
class MyPromise {
  constructor(executorFunction) {
    this._state = "pending";
    this._successCallBacks = [];
    this._errorCallBacks = [];
    this._finallyCallBacks = [];
    this.value = undefined;
    executorFunction(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(callBack) {
    if (this._state === "fulfilled") {
      callBack(this.value);
      return this;
    }

    this._successCallBacks.push(callBack);
    return this;
  }

  catch(callBack) {
    if (this._state === "rejected") {
      callBack(this.value);
      return this;
    }

    this._errorCallBacks.push(callBack);
    return this;
  }

  finally(callBack) {
    if (this._state !== "pending") {
      callBack();
      return this;
    }
    this._finallyCallBacks.push(callBack);
  }

  resolverFunction(value) {
    this._state = "fulfilled";
    this.value = value;
    this._successCallBacks.forEach((cb) => {
      cb(value);
    });
    this._finallyCallBacks.forEach((cb) => {
      cb();
    });
  }
  rejectorFunction(error) {
    this._state = "rejected";
    this.value = value;
    this._errorCallBacks.forEach((cb) => {
      cb(error);
    });
    this._finallyCallBacks.forEach((cb) => {
      cb();
    });
  }
}

function wait(timeInSeconds) {
  return new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve(4);
    //   //   reject("Main hoon giyaan, main hoon bada taakatwer");
    // }, timeInSeconds * 1000);
    resolve(0);
  });

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(timeInSeconds);
  //     }, timeInSeconds * 1000);
  //   });
}

wait(0)
  .then((time) => {
    console.log(`Promise resolved after ${time}s`);
  })
  .catch((error) => {
    console.log(`Promise rejected`);
    throw new Error(error);
  })
  .finally(() => {
    console.log(`Main toh har baar chalunga ji!`);
  });

wait(0)
  .then((time) => {
    console.log(`Promise resolved after ${time}s`);
  })
  .catch((error) => {
    console.log(`Promise rejected`);
    throw new Error(error);
  })
  .finally(() => {
    console.log(`Main toh har baar chalunga ji!`);
  });

/*
     Promise Observations :-
     - jab Promise ka object banate ho toh sath me ek executor function doo
     - executor function ke paas resolve() aur reject() ka access hai
     - resolve ko call karne par:
                          - promise fulfill hojata hai
                          - saare .then() execute hojaate hai
     - reject ko call karne par:
                          - promise reject hojata hai
                          - saare .catch() execute hojaate hai
     - finally() ko toh har baar call karna hi hai     
*/
