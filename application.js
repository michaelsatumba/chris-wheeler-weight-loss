document.getElementById('menu-btn').addEventListener('click', function() {
    var items = document.getElementById('menu-items');
    if (items.style.display === 'block') {
        items.style.display = 'none';
    } else {
        items.style.display = 'block';
    }
});

// Reset menu display on window resize
window.addEventListener('resize', function() {
    var items = document.getElementById('menu-items');
    if (window.innerWidth > 768) {
        items.style.display = 'flex'; // ensure it's visible and using flex layout
    } else {
        items.style.display = 'none'; // ensure it's hidden on mobile when menu button is not clicked
    }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
