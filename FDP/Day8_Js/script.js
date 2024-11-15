for(let i=0;i<=5;i++){
    console.log("Aatif Jamshed","is a", "Trainer");
}
console.log("Aatif Jamshed","is a", "Trainer");
// multi line comment (SHIFT+ALT+A)
// let , var and const
/* let name="Aatif Jamshed";
name= 1234;
console.log(name); */

// var name="Aatif Jamshed";
// name= 1234;
// console.log(name);
const name="Aatif Jamshed";
name= 1234;
console.log(name);
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 (var is accessible outside the block)
console.log(y); // ReferenceError: y is not defined (let is not accessible outside the block)
// Redeclaration:
var c = 1;
var c = 2; // No error

let d = 3;
let d = 4; // SyntaxError: Identifier 'd' has already been declared
