function clicked(index, imagePath) {
    document.getElementById("dropown-question-" + index).innerHTML =
        `<div class="dropown-card 1">
        <p>Question 1</p>
        <div class="dropdownImage"></div>
    </div>

    <div class="dropown-card">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus risus eu orci eleifend interdum. Vestibulum hendrerit arcu tortor, nec malesuada sem egestas vel. Sed ultricies nisl nec felis rutrum, at commodo diam semper. Nunc
            tincidunt velit scelerisque nisi ullamcorper vulputate. Morbi rutrum pellentesque mauris ac rhoncus. Curabitur at vestibulum lorem. In massa velit, volutpat et aliquet a, aliquam tincidunt turpis. Quisque lacus magna, ultricies vitae molestie
            ut, aliquam at quam. In accumsan vel ipsum eu tincidunt. </p>
        <img class="logo" style="margin-left: auto;" src="${imagePath}" alt="logo.png">
    </div>`;
    console.log("function triggered");
}