// async function f() {
//   return 1;
// }
// f().then(console.log);

// async function f() {
//   return Promise.resolve(1);
// }

// f().then(console.log);

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });
//   let result = await promise;
//   return result;
// }
// f();
// async function aa() {
//   return "a";
// }
// function aa() {
//   return Promise.resolve();
// }






// function getRoll(num, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Roll No. is", num);
//       resolve("Successfully Done");
//     }, delay);
//   });
// }

// async function printRollNumbers() {
//   await getRoll(1, 1000);
//   await getRoll(2, 2000);
//   await getRoll(3, 3000);
// }
// printRollNumbers();


// let a = getawaitData();
// console.log(a);

// Using IIFE===================

// (async function () {
//   await getData(1);
//   await getData(2);
// })(getawaitData);


// Simulate ordering food

async function orderFood(item, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item + "is ready");
    }, time);
  });
}

async function restaurant() {
  console.log("Order placed for pizza.");
  const pizza = await orderFood("Pizza", 5000);
  console.log(pizza);
  console.log("Order placed for pasta.");
  const pasta = await orderFood("Pasta", 1000);
  console.log(pasta);
  console.log("All food items are ready!");
}
restaurant();



// async function getAllUsers() {
//   try {
//     let location = "Ghaziabad";
//     //const response = await fetch('https://api.github.com/users')
//     // const response = await fetch('https:/ / api.github.com / users ? per_page = 100')
//     // const response = await fetch(`https://api.github.com/search/users?q=location:${location}&per_page=100`);

//     const data = await response;
//     console.log(data);
//     const data1 = await response.json();
//     console.log(data1);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers()


// async function getFilteredUsers(location, minRepos, language) {
//   try {
//     const query = `location:${location}+repos:>${minRepos}+language:${language}`;
//     const response = await fetch(`https://api.github.com/search/users?q=${query}&per_page=100`);

//     const users = await response.json();
//     console.log(users.items);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }
// getFilteredUsers('New York', 50, 'python');

