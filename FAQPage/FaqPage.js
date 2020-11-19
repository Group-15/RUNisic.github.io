document.getElementById("prod").onclick = function() { 
  
    document.getElementById("product").style.display = "block";
    document.getElementById("general").style.display = "none"; 
    document.getElementById("tech").style.display = "none";  
    document.getElementById("Qsection").innerText = "Product Specification";

} 

document.getElementById("gen").onclick = function() { 

    document.getElementById("general").style.display = "block"; 
    document.getElementById("product").style.display = "none"; 
    document.getElementById("tech").style.display = "none"; 
    document.getElementById("Qsection").innerText = "General Questions";

} 

document.getElementById("tec").onclick = function() { 

    document.getElementById("tech").style.display = "block"; 
    document.getElementById("product").style.display = "none"; 
    document.getElementById("general").style.display = "none"; 
    document.getElementById("Qsection").innerText = "Tech Questions";

} 

document.getElementById("all").onclick = function() { 
  
    document.getElementById("general").style.display = "block"; 
    document.getElementById("tech").style.display = "block"; 
    document.getElementById("product").style.display = "block"; 
    document.getElementById("Qsection").innerText = "All Questions";

} 