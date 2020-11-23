function toShoePage(index) {
    if (window.localStorage.getItem('Email') == null) {
        window.localStorage.setItem('itemNumber', index)
        location.href = "../LoginPage/LoginPage.html";
    } else {
        window.localStorage.setItem('itemNumber', index)
        location.href = "../ShoeSelectionPage/ShoeSelectionPage.html";
    }
}