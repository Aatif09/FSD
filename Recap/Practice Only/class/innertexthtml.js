// Change content using innerText
document.getElementById("innerTextButton").addEventListener("click", function() {
    var header = document.getElementById("header");
    var paragraph = document.getElementById("paragraph");
    
    // Change the heading and paragraph using innerText
    header.innerText = "This is a new heading set using innerText!";
    paragraph.innerText = "This is a new paragraph using innerText. The original HTML content, such as <strong>bold</strong> text, is treated as plain text.";
});

// Change content using innerHTML
document.getElementById("innerHTMLButton").addEventListener("click", function() {
    var header = document.getElementById("header");
    var paragraph = document.getElementById("paragraph");

    // Change the heading and paragraph using innerHTML
    header.innerHTML = "<em>This is a new heading set using innerHTML!</em>";
    paragraph.innerHTML = "This is a new paragraph using <strong>innerHTML</strong>. The original HTML content, such as <strong>bold</strong> text, is preserved and rendered as HTML.";
});
