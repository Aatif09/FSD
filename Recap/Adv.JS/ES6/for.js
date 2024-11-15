const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Number at index ${i}: ${numbers[i]}`);
  // console.log("Number at index " + i + " is: " + numbers[i]);
}

//============ for ...of Loop============
var colors = ["Red", "Green", "Blue", 1, true, { name: "John" }];
for (var i of colors) {
  console.log(i);
}

var namee = "ABES";
for (var j of namee) {
  // console.log(j);
  process.stdout.write(j + " ");
}
console.log("\n");

//============ for...in Loop============

var person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
//var person = "aatif";
for (var i in person) {
  console.log(i + ": " + person[i]);
}

// Map() If you use map then map can return new array by iterating main array.
// Foreach() If you use Foreach then it can not return anything for each can Iterating main array.
//============ forEach()============
let hi = [10, 20, 30, 40, 50];

hi.forEach(function () {
  console.log("this");
});
hi.forEach(function (a) {
  console.log(a);
});

let arr = [10, 20, 30, 40, 50];
arr.forEach((item, index, arr) => {
  console.log(item, index, arr)
});

const myAwesomeArray = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
]
myAwesomeArray.forEach(element => console.log(element))


//The forEach() method returns undefined and
// map() returns a new array with the transformed elements.
// Even if they do thesame job, the returning value remains different.

let arr2 = [10, 20, 30, 40, 50];
let newArr = arr2.map(item => item * 2);
console.log(newArr);
let newArr2 = arr2.forEach(item => item * 2);
console.log(newArr2);




