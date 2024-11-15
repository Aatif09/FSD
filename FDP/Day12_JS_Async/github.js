const div = document.getElementById("parent");
console.log(parent);
function getData() {
  fetch("https://api.github.com/users").then((res) => {
    res.json().then((data) => {
      div.innerHTML = data;
    });
  });
}
