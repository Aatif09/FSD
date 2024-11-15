document
  .getElementById("createElementsButton")
  .addEventListener("click", function () {
    // Create an <h1> element
    var heading = document.createElement("h1");
    heading.textContent = "Welcome to My Dynamically Created Web Page";
    heading.classList.add("dynamic-heading"); // Apply CSS class for styling

    // Create a <p> element
    var paragraph = document.createElement("p");
    paragraph.textContent =
      "This content was created dynamically with JavaScript.";
    paragraph.classList.add("dynamic-paragraph"); // Apply CSS class for styling

    // Append elements to the body
    document.body.appendChild(heading);
    document.body.appendChild(paragraph);

    // Change the background color of the body
    document.body.style.backgroundColor = "#333";

    // Dynamically apply styles to the newly created elements
    heading.style.color = "#FFD700"; // Change h1 color to gold
    paragraph.style.color = "#FFD700"; // Change p color to gold
  });

// document.getElementById("createElementsButton").addEventListener("click", function() {
//     // Create an <h1> element
//     var heading = document.createElement("h1");
//     heading.textContent = "Welcome to My Dynamically Created Web Page";
//     heading.classList.add("dynamic-heading"); // Apply CSS class for styling

//     // Create a <p> element
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "This content was created dynamically with JavaScript.";
//     paragraph.classList.add("dynamic-paragraph"); // Apply CSS class for styling

//     // Get the button element
//     var button = document.getElementById("createElementsButton");

//     // Get the parent element of the button (in this case, it's the body)
//     var parent = button.parentNode;

//     // Insert the heading and paragraph before the button
//     parent.insertBefore(heading, button);
//     parent.insertBefore(paragraph, button);

//     // Change the background color of the body
//     document.body.style.backgroundColor = "#333";

//     // Dynamically apply styles to the newly created elements
//     heading.style.color = "#FFD700"; // Change h1 color to gold
//     paragraph.style.color = "#FFD700"; // Change p color to gold
// });
