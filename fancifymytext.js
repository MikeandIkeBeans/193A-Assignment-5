document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging: Confirm script is running

    let button = document.getElementById("bigger");
    let mooButton = document.getElementById("moo");
    let textArea = document.getElementById("textArea");

    if (button && textArea) {
        button.onclick = function () {
            textArea.style.fontSize = "24pt"; // Change font size to 24pt
        };
    } else {
        console.error("Button or text area not found!");
    }

    // Event listener for the "Moo" button
    if (mooButton) {
        mooButton.onclick = function () {
            let text = textArea.value.toUpperCase(); // Convert text to uppercase
            let sentences = text.split("."); // Split text into sentences

            for (let i = 0; i < sentences.length; i++) {
                let words = sentences[i].trim().split(" "); // Split sentence into words
                if (words.length > 0 && words[0] !== "") {
                    words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
                }
                sentences[i] = words.join(" "); // Reassemble the sentence
            }

            textArea.value = sentences.join(". "); // Reassemble the text
        };
    } else {
        console.error("Moo button not found!");
    }
});

// Function to apply styles when radio buttons change
function applyStyles() {
    alert("Style is being changed!"); // Pop-up alert when a radio button is selected

    let textArea = document.getElementById("textArea");
    let fancyRadio = document.getElementById("fancyShmancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
