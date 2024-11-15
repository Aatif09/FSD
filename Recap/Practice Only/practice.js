function sum(a, b) {
  console.log(a + b);
}

(a, b) => {
  console.log(a + b);
};

function calculator(a, b, func) {
  func(a, b);
}
calculator(2, 5, sum);
