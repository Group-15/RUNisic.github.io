// const divToChange = "subjectToChange";

var pageLinks = [
    "MainPage/MainPage.html",
    "ShoppingPage/ShoppingPage.html",
    "TutorialsPage/TutorialsPage.html",
    "ShoppingCartPage/ShoppingCartPage.html",
    "FAQPage/FaqPage.html",
    "LoginPage/LoginPage.html",
    "ShoeSelectionPage/ShoeSelectionPage.html",
    "chipSelectionPage/chipSelectionPage.html"
];

function changePage(index, divToChange) {
    fetch(pageLinks[index])
        // Getting the content from the file in form of text
        .then(response => response.text())
        // 
        .then(html => {
            console.log(html)
            document.getElementById(divToChange).innerHTML = html;
        })
        .catch((err) => console.log("Can’t access " + mainPageUrl + " response. Blocked by browser?" + err));
}