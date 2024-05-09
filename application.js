document.getElementById('menu-btn').addEventListener('click', function() {
    var items = document.getElementById('menu-items');
    var menuButton = document.getElementById('menu-btn');
    if (items.style.display === 'block') {
        items.style.display = 'none';
        menuButton.classList.remove('open');  // Remove the 'open' class to revert to hamburger icon
    } else {
        items.style.display = 'block';
        menuButton.classList.add('open');  // Add the 'open' class to change to 'X' icon
    }
});

// Reset menu display on window resize
window.addEventListener('resize', function() {
    var items = document.getElementById('menu-items');
    var menuButton = document.getElementById('menu-btn');
    if (window.innerWidth > 768) {
        items.style.display = 'flex'; // Ensure it's visible and using flex layout
        menuButton.classList.remove('open');  // Ensure it reverts to hamburger icon on larger screens
    } else {
        items.style.display = 'none'; // Ensure it's hidden on mobile when menu button is not clicked
        menuButton.classList.remove('open');  // Ensure it reverts to hamburger icon
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
