const fs = require("fs");

fs.writeFile("./Week 11/generated.txt", "Jai Shree Ram", () => {});

console.log({ __filename, __dirname });

// const math = require("./math.js");
// console.log(math);
// console.log(math.add(2, 4));
// console.log(math.sub(2, 4));

// const { add, sub } = require("./math.js");
// console.log(add(2, 4));
// console.log(sub(2, 4));

// const { jodo, ghatao } = require("./math.js");
// console.log(jodo(2, 4));
// console.log(ghatao(2, 4));

const xyz = require("./math.js");
console.log(xyz(23, 8));
