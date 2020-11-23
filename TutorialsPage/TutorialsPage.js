var answer = [
    "To login in, sign in using the same email you used when you were buying the shoe. If you forgot the email, or are unsure of which email you used on the website, sign in using any email address. You will be sent a confirmation emial on the email you used to sign in on the website. Click confirm on the email to verify the new email. In case you forgot the password of the email you used to sign into the website, please contact at (111)-111-1111",
    "To pair up your chip, enter the unique identifier provided to you in the shoe packing. Then enter the pin provided to you with the shoe packing and click on pair. This process usually takes 1 to 2 minutes to pair up. If you face any problems, please contact us at (111)-111-1111",
    "To transfer Music to your RUNisic chip, switch to the transferMusic tab. Select the directory where the music is stored on your phone. You will see a list of all the .mp3 files in that folder. Select the songs you want to transfer to your chip.",
    "To get workout Data, switch to the workout tab. At the top, you will see the map which shows you the track you have walked so far in the day. You can see how much you have walked throughout the day for any day since the time you bought the chip by clicking on the date menu at the top. You can also login your daily meals to keep track of how much calories you have taken in on each day."
]

var heading = [
    "Logging In",
    "Pairing Up With The Chip",
    "Transferring Music",
    "Getting Workout Data"
]

var imageLink = [
    "appScreenImages/login.png",
    "appScreenImages/devicepair.png",
    "appScreenImages/transfermusic.png",
    "appScreenImages/workout.png",
]

var boolTrack = [false, false, false, false]





function clicked(index) {
    if (boolTrack[index] == false) {
        document.getElementById("bottom-content-" + index).innerHTML =
            `
        <div class="bottom-background">
        <div class="dropdown-card bottom-content">
            <p style="color: black; margin-right: 80px;">${answer[index]}</p>
            <img src="${imageLink[index]}">
        </div>
        </div>
        `;
        boolTrack[index] = true;
    } else {
        document.getElementById("dropdown-question-" + index).innerHTML =
            `
        <div class="dropdownquestion" id="dropdown-question-${index}">
            <!-- Heading -->
            <div class="dropdown-card" onclick="clicked(${index})">
                <p class="heading">${heading[index]}</p>
                <div class="dropdownImage"></div>
            </div>
            <!-- Other Contet Below -->
            <div id="bottom-content-${index}"></div>
        </div>
        `;
        boolTrack[index] = false;
    }
}