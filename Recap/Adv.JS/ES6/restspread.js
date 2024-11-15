var a = Math.max(2, 3, 4, 5, 6);
console.log(a);

var obj = {};
Object.assign(obj, { a: 1, b: 2, c: 3 }, { x: 4, y: 6, z: 10 })
console.log(obj);

let arr1 = [];
Object.assign(arr1, [1, 2, 3], [4, 5, 6]);
console.log(arr1);


function sum(a, b) {
  return a + b
}
console.log(sum(5, 4));

var arr = [1, 2];
console.log(sum(arr));                     // ...arr spread 

