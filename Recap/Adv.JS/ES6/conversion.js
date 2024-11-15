let x = 5;      // number
let y = "10";   // string
let z = x + y;  // JavaScript converts x to a string and concatenates
console.log(z); // "510"

let result = "5" - 1;  // 4 (String "5" is converted to a number)
let result2 = "5" + 1; // "51" (1 is converted to a string and concatenated)
console.log(result);
console.log(result2);

let num1 = 123;
let str1 = String(num1);     // "123"
let str2 = num1.toString(); // "123"
let strr = "123";

let num = Number(strr);     // 123
let intNum = parseInt(strr); // 123
let floatNum = parseFloat("123.45"); // 123.45

let str = "hello";
let bool = Boolean(str);   // true
let emptyStr = "";
let bool2 = Boolean(emptyStr); // false */

var a = 2.7;
var b = 2.7;
var c = parseFloat(a) + parseFloat(b);
console.log(c);

let f = 50
let cc = (f - 32) * 5 / 9
console.log(cc)
