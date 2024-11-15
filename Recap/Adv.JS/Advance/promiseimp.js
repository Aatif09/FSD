// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Task is compeleted');
//     resolve("ok");
//   }, 1000)
// })
// promise1.then(function () {
//   console.log("Promise consumed");
// })


// const promisess = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Task is completed');
//     resolve();
//   }, 1000);
// });

// promisess.then(function (result) {
//   console.log("Promise resolved with:", result);
// });

// promisess.then(console.log("Promise resolved with:"));
// promisess.then(console.log);


// let promise1 = function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("Promise resolved from function!");
//   });
// }
// promise1.then(result => {
//   console.log(result);
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve()
//   }, 1000)

// }).then(function () {
//   console.log("Async 2 resolved");
// })


// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Aatif09", email: "09.aatif@gmail.com" })
//   }, 1000)
// })
// promise2.then((user) => {
//   console.log(user);
// })
// promise2.then(user => console.log(user));



// const promises = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Error: Promise failed!"), 1000);
// });
// promises.then(
//   (result) => console.log(result),
//   (error) => console.log("Handled with .then() second argument:", error)
// );



const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "Aatif", password: "1233333" })
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promise3
  .then((user) => {
    console.log(user);
    return user;
  }).then((username) => {
    console.log(username);
  }).catch(function (error) {
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected"))

// ========using Async======================
// function getUser() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = false;
//       if (!error) {
//         resolve({ username: "Aatif", password: "1233333" });
//       } else {
//         reject('ERROR: Something went wrong');
//       }
//     }, 1000);
//   });
// }
// async function fetchUserDetails() {
//   try {
//     const user = await getUser();
//     console.log(user);
//     const password = user.password;
//     console.log(password);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("The promise is either resolved or rejected");
//   }
// }
// fetchUserDetails();
//=======================================================================
// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     if (!error) {
//       resolve({ username: "javascript", password: "123" })
//     } else {
//       reject('ERROR: JS went wrong')
//     }
//   }, 1000)
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promise4
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive()

// // ======== Fetch API=============

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://api.github.com/users/Aatif09')
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers()


// fetch('https://api.github.com/users/Aatif09')
//   .then((response) => {
//     let a = response.json()
//     return a;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error))


// fetch('https://api.github.com/users/Aatif09')
//   .then(response => response.json())
//   .then(console.log)
//   .catch(console.error);


let url = 'https://api.github.com/users/Aatif09';
let b = fetch(url);
b.then((data) => {
  console.log(data)
  return data.json();
}).then((data) => {
  console.log(data);
}).catch(() => {
  console.log("Error")
}).finally(() => {
  console.log("first")
})
async function fetchh() {
  let url = 'https://api.github.com/users';
  let b = await fetch(url);
  let data = await b.json();
  console.log(data);
}
fetchh()

// let url = 'https://api.github.com/users/Aatif09';
// let b = fetch(url);

// b.then((data) => {
//   console.log(data);
//   return data.json();
// }).then((data) => {
//   console.log(data);
// })