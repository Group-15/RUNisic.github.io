function checkSignIn() {
    var userIsLoggedIn = `<button onclick="changePage(3)">click me</button>`;
    var userIsNotLoggedIn = `<button onclick="changePage(5)">click me</button>`;
    if (window.localStorage.getItem("Email").length > 0) {
        document.getElementById("chipSelection").innerHTML = changePage(3, 'subjectToChange');
    } else {
        document.getElementById("chipSelection").innerHTML = changePage(5, 'subjectToChange');
    }
}