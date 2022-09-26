// Reference of the paragraph tag
const content = document.getElementById("content");

    


const pasteBtn = document.getElementById("paste");

    window.onload = (event) => {
        navigator.clipboard
        .writeText(document.getElementById("content").innerText);
        location.href = "https://search.google.com/local/writereview?placeid=ChIJqytiXK0JxkcR6RBSxZwMw3U";    };
