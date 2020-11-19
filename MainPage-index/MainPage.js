// Partners slideshow 
var index = 1;
showSlides(index);

function plusSlides(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("logoSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}

// Sponsor us section 
function sponsor() {
  var name = document.getElementById("s_name").value;
  var email = document.getElementById("s_e-mail").value;
  var cont = document.getElementById("s_cont").value;
  alert("Thank you for your $" + cont + " contribution, " + name + "! \nWe will contact you shortly at " + email + " with more information");
}