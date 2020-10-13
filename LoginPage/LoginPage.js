function formSubmit() {
    var credentials = readUserCredentials();
    storInLocalStorage(credentials["uname"], credentials["psw"]);
}

function readUserCredentials() {
    var userCredentials = {};
    userCredentials["uname"] = document.getElementById("uname").value;
    userCredentials["psw"] = document.getElementById("psw").value;
    return userCredentials;
}

function storInLocalStorage(email, password) {
    window.localStorage.setItem('Email', email)
    window.localStorage.setItem('Password', password)
}

function redirectToPreviousPage(link) {
    window.location.replace(link)
}