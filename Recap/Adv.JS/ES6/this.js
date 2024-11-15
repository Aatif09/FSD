//Context(this): Arrow functions do not have their own this.Instead, this is lexically bound to the
// scope where the arrow function is defined.

// Global context
// console.log(this);

// function showGlobalContext() {
//   console.log(this);
// }
// showGlobalContext();

const arrowContext = () => {
  console.log(this);
};
arrowContext();

// Object method
const person = {
  name: 'ABES',
  greet: function () {
    console.log(this.name);
  }
};
person.greet();

// Inside a function
function Person(name) {
  this.name = name;
}
const person1 = new Person('AICTE');
console.log(person1.name);

// Arrow function (lexical `this`)

const sayHello = () => {
  console.log(this);
};
sayHello();

const person2 = {
  name: "UGC",
  greet: () => {
    console.log(this.name);
  }
};
person2.greet();

const user = {
  name: 'AJ',
  greet: function () {
    const innerGreet = () => {
      console.log(this.name);
    };
    innerGreet();
  }
};
user.greet();
