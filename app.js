

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
  const menu=document.getElementById("menu");
  // Check if the click event target is not the search input or the search button
  if (event.target !== searchInput && event.target !== searchButton && event.target !== menu) {
     // searchButton.style.display = 'none'; // Hide the search button
     // searchInput.value=""
  }
});

//search functionnalities
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener to the search form
  document.getElementById('search-form').addEventListener('submit', function(event) {
      const query = document.getElementById('searchInput').value;
      if (!query) {
          event.preventDefault(); // Prevent submission if the query is empty
      } else {
          // Store the query in localStorage and redirect
          localStorage.setItem('searchQuery', query);
          // Redirect to search-results.html
          window.location.href = 'search-results.html';
      }
  });

  // If on the search results page, perform the search
  if (window.location.pathname.includes('search-results.html')) {
      const query = localStorage.getItem('searchQuery');
      if (query) {
          performSearch(query);
      }
  }
});

// Function to load JSON data and perform the search
function performSearch(query) {
  fetch('src/data/products.json')
      .then(response => response.json())
      .then(data => {
          const resultsContainer = document.getElementById('results-container');
          resultsContainer.innerHTML = ''; // Clear previous results
          const filteredProjects = data.filter(project => {
              return project.title.toLowerCase().includes(query.toLowerCase()) ||
                     project.description.toLowerCase().includes(query.toLowerCase()) ||
                     project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
          });

          if (filteredProjects.length > 0) {
              filteredProjects.forEach(project => {
                  const projectElement = document.createElement('div');
                  projectElement.classList.add('col--1-3');
                  projectElement.innerHTML = `
                      <div class="product-card">
                        <img src="${project.image}" alt="">
                       <h1>${project.title}</h1>
                       <h3>product</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}">View Project</a>
                    </div>
                  `;
                  resultsContainer.appendChild(projectElement);
              });
          } else {
              resultsContainer.innerHTML = '<p>No results found.</p>';
          }

          // Clear the search query from localStorage
          localStorage.removeItem('searchQuery');
      })
      .catch(error => {
          console.error('Error loading projects:', error);
          const resultsContainer = document.getElementById('results-container');
          resultsContainer.innerHTML = '<p>There was an error loading the projects.</p>';
      });
}


//search functionnalities end