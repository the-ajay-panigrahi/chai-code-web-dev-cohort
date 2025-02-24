// setTimeout(() => {
//   console.log("I am done.");
// }, 2000);

// Call Stack(lifo), Call back queue(fifo)

let obj = {
  firstName: "Ajay",
  greet: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

// console.log("Hi");

// setTimeout(obj.greet.bind(obj), 5 * 1000);

// console.log("Bye");

/*
Promise(either it will be resolved or rejected), 

Starvation(Micro task queue khali hi nahi horahi, isiliye callback task queue call stack mein cheeze send nahi karpa rahi...so callback task queue is starving, this concept is called starvation)
*/

setTimeout(function timerFn() {
  console.log("Hello after 0s");
}, 0);

Promise.resolve().then(function p1() {
  console.log("1. Promise Resolve Hogya");
  Promise.resolve().then(function p2() {
    console.log("2. Promise Resolve Hogya");
    Promise.resolve().then(function p3() {
      console.log("3. Promise Resolve Hogya");
      Promise.resolve().then(function p4() {
        console.log("4. Promise Resolve Hogya");
      });
    });
  });
});

// console.log("Hi");
