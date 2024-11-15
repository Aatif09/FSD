document.getElementById("styleButton").addEventListener("click", function() {
    // Change the button style
    this.style.backgroundColor = "#FF5733";
    this.style.color = "black";
    this.style.padding = "15px 30px";
    this.style.borderRadius = "10px";
    
    // Change the body background color
    document.body.style.backgroundColor = "#333";
    
    // Change the heading and paragraph styles
    document.getElementById("mainHeading").style.color = "#FFD700"; // Change h1 to gold
    document.getElementById("mainParagraph").style.color = "#FFD700"; // Change p to gold
});
