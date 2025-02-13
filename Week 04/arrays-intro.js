let skills = ["Html", "Css", "Js"];
console.log(skills, typeof skills);

console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
// console.log(skills[3]); // Undefined

skills[1] = "AJAY";

console.log(skills);

for (let index = 0; index < skills.length; index++) {
  const element = skills[index];
  console.log(element);
}

console.log("----------");
console.log(skills);
// console.log(skills.pop());
let contu = skills.pop();
console.log(`In the contu we have ${contu}`);
skills.unshift("Shree Ganesh");
console.log(skills);
