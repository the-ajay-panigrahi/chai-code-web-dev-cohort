function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

// prepareChai("Masala Chai");
// prepareChai("Ginger Chai");

/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.
*/

function calculateTotal(amount) {
  // convert to number
  if (amount > 1000) {
    return amount * 0.9;
  }
  return amount;

  return amount > 1000 ? amount * 0.9 : amount;
}

// let finalBill = calculateTotal(1200);
// console.log(finalBill);
// console.log(calculateTotal(1300));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.
*/

// function trafficLight(color) {
//   switch (color) {
//     case "red":
//       console.log("Stop");
//       break;
//     case "yellow":
//       console.log("Slow down");
//       break;
//     case "green":
//       console.log("Go");
//       break;
//     default:
//       console.log("Chalan kaat do");
//   }
// }

// trafficLight("yellow");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

// checktruthyValue(1)
// checktruthyValue(0)
// checktruthyValue("hitesh")
// checktruthyValue("")
// checktruthyValue([])
// checktruthyValue([1, 2, 3])

// checktruthyValue(false);
// checktruthyValue(0);
// checktruthyValue(-0);
// checktruthyValue(0n);
// checktruthyValue("");
// checktruthyValue(NaN);
// checktruthyValue(undefined);
// checktruthyValue(null);

// checktruthyValue([]);
// checktruthyValue({});
// checktruthyValue(" ");
// checktruthyValue(function () {});

/*
In JavaScript, values are classified as truthy or falsy based on how they behave when evaluated in a boolean context (e.g., in an if condition).

Falsy values are values that evaluate to false when used in a boolean context. These are:
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN

Any value not listed above is considered truthy. For example:
true, "hello", 42, [] (empty array), {} (empty object), and function() (function) are truthy.
*/

console.log(NaN === NaN); // Output: false

function login(username, password, loginIp) {
  if (username === "admin" && (password === "1234" || loginIp == "127")) {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}
