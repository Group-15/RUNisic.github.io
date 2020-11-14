var pageLinks = [
    "LoginPage/LoginPage.html",
    "ShoeSelectionPage/ShoeSelectionPage.html",
    "chipSelectionPage/chipSelectionPage.html"
];

function changePage(index, divToChange) {
    fetch(pageLinks[index])
        // Getting the content from the file in form of text
        .then(response => response.text())
        .then(html => {
            document.getElementById(divToChange).innerHTML = html;
        })
        .catch((err) => console.log("Can’t access " + pageLinks[index] + " response. Blocked by browser?" + err));
}