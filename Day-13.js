// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// setTimeout(() => {
//   console.log("fourth");
// }, 0);

// console.log("third");

console.log("first");

setTimeout(() => {
  console.log("second");
}, 3000);

function add() {
  console.log("third");
  setTimeout(() => {
    console.log("fourth");
  }, 5000);
}

setTimeout(() => {
  console.log("fifth");
}, 3000);

console.log("sixth");

setTimeout(() => {
  console.log("seventh");
}, 1000);

add();
