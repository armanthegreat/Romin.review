

// Reference of the paragraph tag
const content = document.getElementById("content");

// Reference of the copy button
const copyBtn = document.getElementById("copy");

// Copy button's onclick handler
copyBtn.onclick = copyToClipboard;

// Method responsible for copying the content
function copyToClipboard() {
    navigator.clipboard
        .writeText(content.innerText);
        location.href = "https://search.google.com/local/writereview?placeid=ChIJqytiXK0JxkcR6RBSxZwMw3U";
}
