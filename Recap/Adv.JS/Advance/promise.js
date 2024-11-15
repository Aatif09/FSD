// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   //resolve(11);
//   reject("Some error");
// });

function getRoll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. No. is", num);
      resolve("Successfully Done");
    }, delay);
  });
}
getRoll(1, 1000).then(() => {
  getRoll(2, 2000).then(() => {
    getRoll(3, 30000);
  });
});






async function printRollNumbers() {
  await getRoll(1, 1000);
  await getRoll(2, 2000);
  await getRoll(3, 3000);
}

printRollNumbers();
//============Promise Chaining================
// getData(1)
//   .then(() => getData(2))
//   .then(() => getData(3))
//   .then(() => {
//     console.log("All data fetched");
//   });
