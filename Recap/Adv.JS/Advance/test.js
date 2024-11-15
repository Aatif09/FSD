
// let a = 10;

// console.log(a);

// function helloWorld() {
//   console.log("Hey ABSians")
// }

// setTimeout(helloWorld, 4000);

// let b = 30;

// console.log(b);

function sum(a, b) {
  return a + b;
}

console.log(sum(3,2));

function passonme(a, b, passhere) {

  return passhere(a, b);
}

console.log(passonme(10, 20, sum));