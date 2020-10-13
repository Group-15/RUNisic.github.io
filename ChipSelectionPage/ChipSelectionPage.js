function checkSignIn() {
    if (window.localStorage.getItem("Email").length > 0) {
        changePage(3, 'subjectToChange');
    } else {
        changePage(5, 'subjectToChange');
    }
}