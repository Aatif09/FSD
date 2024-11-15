// Named Function=====================
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
function one() {
  console.log("hiii");
};

one()

// Function Expression (Anonymous) Function=====================

const two = function () {
  console.log("hello");
};
setTimeout(two, 3000);

// Function Expression (Named) Function=====================
const three = function helloFunc() {
  console.log("hiihello");
};
three()

// Arrow Function=====================
const four = () => {
  console.log("hi");
};
setTimeout(four, 3000);


// Named Function=====================
const five = new Function(`
  console.log("First Line");
  console.log("Second line.");
  let sum = 2 + 3;
  console.log("Sum is: " + sum);
`);

setTimeout(five, 3000);

let sum = new Function('a', 'b', 'return a + b;');
console.log(sum(5, 3));



// Immediately Invoked Function Expression (IIFE)=====================
(function () {
  console.log("ABES");
})();

// Wrap with setTimeout for similar functionality:=====================
setTimeout(function () {
  console.log("hi");
}, 3000);
