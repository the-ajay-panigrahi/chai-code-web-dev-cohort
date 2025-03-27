// named export
// exports.add = function add(a, b) {
//   return a + b;
// };

// exports.sub = function sub(a, b) {
//   return a - b;
// };

// default export
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   jodo: add,
//   ghatao: sub,
// };

module.exports = add;

// module.exports = {
//   add,
//   sub,
// };
