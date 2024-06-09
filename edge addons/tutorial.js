let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("prev").addEventListener("click", prev);
});
function prev() {
plusSlides(-1);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("next").addEventListener("click", next);
});
function next() {
plusSlides(1);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide1").addEventListener("click", currentSlide1);
});
function currentSlide1() {
currentSlide(1);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide2").addEventListener("click", currentSlide2);
});
function currentSlide2() {
currentSlide(2);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide3").addEventListener("click", currentSlide3);
});
function currentSlide3() {
currentSlide(3);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide4").addEventListener("click", currentSlide4);
});
function currentSlide4() {
currentSlide(4);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide5").addEventListener("click", currentSlide5);
});
function currentSlide5() {
currentSlide(5);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide6").addEventListener("click", currentSlide6);
});
function currentSlide6() {
currentSlide(6);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide7").addEventListener("click", currentSlide7);
});
function currentSlide7() {
currentSlide(7);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide8").addEventListener("click", currentSlide8);
});
function currentSlide8() {
currentSlide(8);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide9").addEventListener("click", currentSlide9);
});
function currentSlide9() {
currentSlide(9);
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("currentSlide10").addEventListener("click", currentSlide10);
});
function currentSlide10() {
currentSlide(10);
}
