// Spread (...) takes elements from an array or object and expands them into individual elements.Expanding an array or object

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const mergedArray = [...arr11, ...arr12];
console.log(mergedArray);



const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1, city: 'New York' };
console.log(obj2);


