document.getElementById("toShoeSelectPage-btn").onclick = function() {
    location.href = "../ShoeSelectionPage/ShoeSelectionPage.html";
};



document.getElementById("toLoginPage-btn").onclick = function() {

    if (window.localStorage.getItem)

        location.href = "../LoginPage/Loginpage.html";
};