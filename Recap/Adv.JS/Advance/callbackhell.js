function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

//===============Example of Callback Hell===============================================

// function doSomething(id, callback) {
//   setTimeout(() => {
//     console.log("Step 1");
//     callback(1);
//   }, 2000);
// }
// function doSomethingElse(id, callback) {
//   setTimeout(() => {
//     console.log("Step 2");
//     callback(2);
//   }, 2000);
// }
// function doAnotherThing(id, callback) {
//   setTimeout(() => {
//     console.log("Step 3");
//     callback(3);
//   }, 2000);
// }
// // Callback Hell Example
// doSomething(1, () => {
//   doSomethingElse(2, () => {
//     doAnotherThing(3, () => {
//       console.log("All steps completed");
//     });
//   });
// });
