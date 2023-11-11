
function openGalerry() {
  if (window.innerWidth < 567){
    document.getElementById("my_gallery").style.display = "none";
  }
  else {document.getElementById("my_gallery").style.display = "block";}
}

// Close the Modal
function closeGallery() {
  document.getElementById("my_gallery").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("my_Slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
}
