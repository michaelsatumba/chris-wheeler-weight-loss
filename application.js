document.getElementById('menu-btn').addEventListener('click', function() {
    console.log("Menu button clicked.");
    toggleMenu();
});

document.querySelectorAll('#menu-items a').forEach(item => {
    item.addEventListener('click', function() {
        console.log("Menu item clicked: " + this.innerText);
        closeMenu(); // Specifically close the menu when an item is clicked
    });
});

function toggleMenu() {
    var items = document.getElementById('menu-items');
    if (items.style.display === 'none' || !items.style.display) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    var items = document.getElementById('menu-items');
    items.style.display = 'block';
    items.classList.add('fullscreen');
    document.getElementById('menu-btn').classList.add('open');
    document.body.classList.add('body-no-scroll'); // Prevent scrolling
    console.log("Menu opened.");
}

function closeMenu() {
    var items = document.getElementById('menu-items');
    items.style.display = 'none';
    items.classList.remove('fullscreen');
    document.getElementById('menu-btn').classList.remove('open');
    document.body.classList.remove('body-no-scroll'); // Allow scrolling again
    console.log("Menu closed.");
}

// Ensure scrolling is enabled again if resizing might have closed the menu implicitly
window.addEventListener('resize', function() {
    if (!document.getElementById('menu-items').classList.contains('fullscreen')) {
        document.body.classList.remove('body-no-scroll');
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
