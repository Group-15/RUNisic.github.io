function formSubmit() {
    var credentials = readUserCredentials();
    storInLocalStorage(credentials["uname"], credentials["psw"]);
    redirect()
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

function redirect() {
    if (window.localStorage.getItem('Email') == null || window.localStorage.getItem('Password') == null) {
        alert("Not all fields have been filled")
    } else {
        location.href = "../ShoeSelectionPage/ShoeSelectionPage.html";
    }
}