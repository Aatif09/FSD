// console.log("One");
// console.log("two");
// setTimeout(() => {
//   console.log("three");
// }, 4000);
// console.log("four");
// console.log("five");

// =================Callbacks=========================
function aa(name) {
  console.log(`Hi, ${name}!, Ji`);
}
function bb(callback) {
  const name = "students";
  callback(name);
}
bb(aa);

// =================Callbacks with async behav=========================

function greet(name) {
  console.log(`Hello, ${name}!`);
}
function sayHello(callback) {
  console.log("Calling after 2 seconds...");
  setTimeout(() => {
    callback("students");
  }, 2000);
}
sayHello(greet);

function num(a, b) {
  console.log(a, b);
}

function calculator(x, y, numCallback) {
  numCallback(x, y);
}
// calculator(1, 2, num);
// OR
calculator(1, 2, (a, b) => {
  console.log(a, b);
});

// const hello = () => {
//   console.log("hi");
// };
// setTimeout(hello, 3000);
// OR=======

function hello() {
  console.log("hi");
};
setTimeout(hello, 3000);

// =================Callbacks=========================


function doSomething(id, callback) {
  setTimeout(() => {
    console.log("Step", id);
  }, 2000);
}

doSomething(1);


