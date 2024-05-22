

var btns = document.querySelectorAll(".nav-item a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function toggleMenu() {
  const menuContainer = document.querySelector('.nav-menu-items-container');
  menuContainer.classList.toggle('open');
}




window.onscroll = function() {
  const backToTopButton = document.getElementById('backToTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
};

// Scroll to the top when the back-to-top button is clicked
document.getElementById('backToTop').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function toggleMoreText(){
   var moreText = document.querySelector('.more-text');
  var showLess = document.querySelector('.show-less');
   var dots = document.querySelector('.dots');
  // Toggle visibility
  if (moreText.style.display === 'block') {
    moreText.style.display = 'none';
    showLess.style.display = 'none';
    dots.style.display = 'inline';
  } else {
    moreText.style.display = 'block';
    showLess.style.display = 'inline';
    dots.style.display = 'none';
  }
}
 
document.addEventListener('DOMContentLoaded', function() {
  var dots = document.querySelector('.dots');
  var showLess = document.querySelector('.show-less');
  dots.addEventListener('click', toggleMoreText);
  showLess.addEventListener('click', toggleMoreText);
});
  

document.getElementById('searchInput').addEventListener('focus', function() {
  document.getElementById('searchButton').style.display = 'inline-block';
});
document.body.addEventListener('click', function(event) {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  // Check if the click event target is not the search input or the search button
  if (event.target !== searchInput && event.target !== searchButton) {
      searchButton.style.display = 'none'; // Hide the search button
      searchInput.value=""
  }
});