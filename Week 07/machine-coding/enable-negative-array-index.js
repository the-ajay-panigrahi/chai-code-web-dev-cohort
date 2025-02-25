Array.prototype.getNegativeArrayIndex = function (index) {
  index = Number(index);
  if (index < 0) {
    return this[this.length + index];
  }
  return this[index];
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[-1]);
// console.log(arr.getNegativeArrayIndex(-1));

/* We can use proxy to enable negative array indexing.
   A Proxy in JavaScript acts as a middleman for an object, letting you control how it behaves. You can customize actions like getting, setting, or deleting properties.
   The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

   Description -
   The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties.
*/

let user1 = {
  firstName: "Ajay",
  id: 123,
  password: "dfhh23525@14g",
};

// console.log(user1.password);

let proxyUser1 = new Proxy(user1, {
  get(target, prop) {
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "password") {
      throw new Error("Nahi karne dunga 😈");
    }
    target[prop] = value;
    return true;
  },
});

// console.log(proxyUser1);
// console.log(proxyUser1.firstName);
// console.log(proxyUser1.id);
// console.log(proxyUser1.password);

// proxyUser1.password = "sfafnfno";
// console.log(user1);
// console.log(proxyUser1);

// Enable Negative Array Indexing (Machine Coding Question)
let array = [12, 23, 34, 45, 56, 67, 78, 89, 90];
let proxyArray = new Proxy(array, {
  get(target, prop) {
    const index = Number(prop);
    if (index < 0) {
      return target[target.length + index];
    }
    return target[index];
  },
  set(target, prop, value) {
    const index = Number(prop);
    if (index < 0) {
      target[target.length + index] = value;
      return true;
    }
    target[index] = value;
    return true;
  },
});

// console.log(proxyArray[-1]);
// console.log(proxyArray[-2]);
// console.log(proxyArray[-3]);
// console.log(proxyArray[-4]);
// console.log(proxyArray[-5]);
// console.log(proxyArray[-6]);
// console.log(proxyArray[-7]);
// console.log(proxyArray[-8]);
// console.log(proxyArray[-9]);

// proxyArray[0] = null; // <Revoked Proxy>
// proxyArray[-9] = null; // <Revoked Proxy>
// proxyArray[0] = "sample";
// proxyArray[-1] = null;
// proxyArray[-2] = "Haanji";
// console.log(array);
console.log(proxyArray);
