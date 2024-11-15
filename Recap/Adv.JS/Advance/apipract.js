// "https://api.github.com/users"

function getData() {

  fetch("https://api.exchangerate-api.com/v4/latest/USD").then((response) => {
    const data = response.json();
    console.log(data);
    return data;
  }).then((response) => {
    let a = response;
    console.log(a.length);

  })
} 