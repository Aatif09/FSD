let myPromise = new Promise((resolve, reject) => {
  resolve("The promise has been resolved!");
});

// Using the Promise
myPromise.then(result => {
  console.log(result);
});

function getPromise() {
  return new Promise((resolve, reject) => {
    resolve("Promise resolved from function!");
  });
}
let promise1 = getPromise();
promise1.then(result => {
  console.log(result);
});


// Create a new Promise
let myPromise1 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});


myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });


