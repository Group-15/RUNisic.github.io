function toShoePage() {
    if (window.localStorage.getItem('Email') == null) {
        location.href = "../LoginPage/LoginPage.html";
    } else {
        location.href = "../ShoeSelectionPage/ShoeSelectionPage.html";
    }
}