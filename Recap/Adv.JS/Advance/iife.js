// IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as it is defined.

(function () {
  // code inside this function is executed immediately
  console.log("This is an IIFE");
})();

(function (name) {
  console.log("Hello, " + name);
})("Aatif");
