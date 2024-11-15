const URL = "https://cat-fact.herokuapp.com/facts";
// let a = fetch(URL);
// console.log(a);
//const para = document.querySelector("#connect");
const para = document.getElementById("connect");
const getFacts = async () => {
  console.log("Wait, it's getting printed");
  let response = await fetch(URL);
  // console.log(response.json()); // This will log the status code of the response
  let data = await response.json();
  console.log(data[0].text);
  para.innerText = para.innerText + " " + data[0].text;
};

// Call the function to check the promise
getFacts();

// ==========IIFE
// (async () => {
//   console.log("Wait, it's getting printed");
//   let response = await fetch(URL);
//   console.log(response); // This will log the status code of the response
// })();

//========== Using Promise Chaining
const getFacts2 = () => {
  console.log("Wait, it's getting printed");

  // Fetch data using promise chaining
  fetch(URL)
    .then((response) => {
      // Log the status code if needed
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data[0].text);
      para.innerText = para.innerText + " " + data[0].text;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

getFacts2();
