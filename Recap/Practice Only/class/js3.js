// Function to create elements dynamically
function createElements() {
    // Create an <h1> element
    var heading = document.createElement("h1");
    heading.textContent = "Welcome to My Dynamically Created Web Page";
    heading.classList.add("dynamic-heading"); // Apply CSS class for styling
    
    // Create a <p> element
    var paragraph = document.createElement("p");
    paragraph.textContent = "This content was created dynamically with JavaScript.";
    paragraph.classList.add("dynamic-paragraph"); // Apply CSS class for styling
    
    // Create a button element
    var button = document.createElement("button");
    button.textContent = "Click to Change Styles";
    button.id = "dynamicButton"; // Set an ID for the button
    button.classList.add("dynamic-button"); // Add a class for styling
    
    // Add button click event
    button.addEventListener("click", function() {
        // Change the background color of the body
        document.body.style.backgroundColor = "#333";
        
        // Change the heading and paragraph styles
        heading.style.color = "#FFD700"; // Change h1 color to gold
        paragraph.style.color = "#FFD700"; // Change p color to gold
    });
    
    // Append elements to the body
    document.body.appendChild(heading);
    document.body.appendChild(paragraph);
    document.body.appendChild(button);
}

// Call the function to create elements dynamically
createElements();
