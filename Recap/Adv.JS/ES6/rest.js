// Rest(...) collects multiple elements and condenses them into a single array.
// Collecting multiple elements into one

function sumAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 10, 15));


function introduce(name, age, ...hobbies) {
  // console.log("Name: " + name + ", Age: " + age);
  console.log(`Name: ${name}, Age: ${age}`);

  // console.log("Hobbies: " + hobbies.join(", "));
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}
introduce("Alice", 25, "Reading", "Coding", "Traveling");

// Array Destructuring===================

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
const [firstColor, secondColor, ...remainingColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(remainingColors);


// Skipping Elements in Destructuring=================
const numbers = [10, 20, 30, 40, 50];
const [first, , third, ...rest] = numbers;

console.log(first);
console.log(third);
console.log(rest);


const student = { name: "John", age: 20, grade: "A", subject: "Math" };
const { namee, age, ...details } = student;
console.log(namee);
console.log(age);
console.log(details);

