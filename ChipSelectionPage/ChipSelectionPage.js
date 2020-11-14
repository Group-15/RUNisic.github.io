document.getElementById("tocartPage-btn").onclick = function() {
    location.href = "../ShoppingCartPage/ShoppingCartPage.html";
};

function checkSignIn() {
    if (window.localStorage.getItem("Email").length > 0) {
        changePage(3, 'subjectToChange');
    } else {
        changePage(5, 'subjectToChange');
    }
}