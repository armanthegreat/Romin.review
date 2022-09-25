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
}

const pasteBtn = document.getElementById("paste");

pasteBtn.onclick = function () {
    location.href = "https://search.google.com/local/writereview?placeid=ChIJqytiXK0JxkcR6RBSxZwMw3U";
} ;

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fpages%2Fcategory%2FBoat-Tour-Agency%2FStarboard-Boats-Amsterdam-301283120419739%2F%3Flocale%3Dfr_FR%26_rdr&psig=AOvVaw0VWhnIOTKuENPLVWyLbNQT&ust=1664233412725000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCQmOCGsfoCFQAAAAAdAAAAABAD