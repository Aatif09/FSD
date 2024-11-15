
alert("Welcome to the website!");
let namee = prompt("What is your name?", "HI");
let isSure = confirm("Are you sure you want to proceed?");
if (isSure) {
  alert("Hello, " + namee + "! You have confirmed.");
} else {
  alert("Action canceled.");
}
