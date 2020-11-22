document.getElementById("tocartPage-btn").onclick = function() {
    location.href = "../ShoppingCartPage/ShoppingCartPage.html";
};


//var img=document.getElementsByID("img-area")

//function leftbtn(){
   // alert("hello")
    //img.src='images/tool.jpg'
//}
function seemore1(){
    alert("Chip 1:\n-Memory: 8GB, which can be downloaded up to 3000 songs\n-Easy to keep track\n")
    
    //img.src='images/tool.jpg'
}
function seemore2(){
    alert("Chip 2:\n-Memory: 16GB, which can be downloaded up to 6000 songs\n-Easy to keep track\n-Smoother and faster")
    
    //img.src='images/tool.jpg'
}
function buybutton(){
    alert("Added to cart")
    
    //img.src='images/tool.jpg'
}
var count = 1;  
        displaySlides(count);  
  
function rightbtn(n) {  
    displaySlides(count += n);  
}  

function leftbtn(n) {  
    displaySlides(count = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("photo");  
    if (n > slides.length) { 
        count = 1 }  
    if (n < 1) { 
        count = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[count - 1].style.display = "block";  
}  