// // // Global Scope
// var globalVar = "I am a global var variable";
// let globalLet = "I am a global let variable";
// const globalConst = "I am a global const variable";
// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// ==========Function Scope============

// function scopeTest() {
//   var functionVar = "I am a function-scoped var variable";
//   let functionLet = "I am a function-scoped let variable";
//   const functionConst = "I am a function-scoped const variable";
// }
// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

//==========Block Scope============
if (true) {
  var blockVar = "I am a block-scoped var variable";
  let blockLet = "I am a block-scoped let variable";
  const blockConst = "I am a block-scoped const variable";
}
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

//===========Reassigning Variables==========

// var c = 1;
// var c = 2;
// console.log(c);


// let d = 3;
// let d = 4; // SyntaxError: Identifier 'd' has already been declared
// console.log(d);

// const e = 3;
// const e = 4;
// console.log(d); // 3 (const is not reassignable)


//==== Strict Mode=========
"use strict";
function noKeyword() {
  x = 10;
  console.log(x);
}
noKeyword();
console.log(x);

"use strict";
function sum(a, a, b) {
  return a + b;
}
a = sum(2, 1, 2)
console.log(a)

//Disallows octal literals: ============
"use strict";
let x = 010;
console.log(x)