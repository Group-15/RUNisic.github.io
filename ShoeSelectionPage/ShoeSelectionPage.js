var links = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
]

document.getElementById("tochipSelectPage-btn").onclick = function() {
    location.href = "../ChipSelectionPage/ChipSelectionPage.html";
};

function seeImage() {
    console.log("function called")
    if (window.localStorage.getItem("itemNumber") != null) {
        var index = window.localStorage.getItem("itemNumber");
        document.getElementById("shoeImage-div").innerHTML = `    
    <img src="${links[index]}" alt="shoe 1"> 
    `;
    } else {
        document.getElementById("shoeImage-div").innerHTML = `    
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="shoe 1"> 
        `;
    }
}