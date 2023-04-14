

//hover
/*
const colorButton = document.querySelector("#color-button");
const HoversubNav = document.querySelector(".hover-sub-nav");

colorButton.addEventListener("mouseover", () => {
  HoversubNav.style.display = "block";
});

colorButton.addEventListener("mouseout", () => {
  HoversubNav.style.display = "none";
});
*/

  

//button light up

document.addEventListener('DOMContentLoaded', function() {
        // Remove "active" class from all buttons
        document.querySelectorAll('nav a').forEach(function(button) {
            button.classList.remove('active');
        });
    
    // Check which page we're on and activate the appropriate button
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html') {
      document.querySelector('#home-button a').classList.add('active');
    } else if (currentPage === 'digital.html') {
      document.querySelector('#digital-button a').classList.add('active');
    } else if (currentPage === 'analog.html') {
      document.querySelector('#analog-button a').classList.add('active');
    } else if (currentPage === 'about.html') {
      document.querySelector('#about-button a').classList.add('active');
    } else if (currentPage === 'color-gallery.html') {
        document.querySelector('#digital-button a').classList.add('active');
      document.querySelector('#color-button a').classList.add('active');
    } else if (currentPage === 'bw-gallery.html') {
        document.querySelector('#digital-button a').classList.add('active');
      document.querySelector('#bw-button a').classList.add('active');
    } else if (currentPage === 'color_23.html') {
        document.querySelector('#digital-button a').classList.add('active');
      document.querySelector('#color-button a').classList.add('active');
      document.querySelector('#button-2023 a').classList.add('active');
    } else if (currentPage === 'color_13.html') {
        document.querySelector('#digital-button a').classList.add('active');
      document.querySelector('#color-button a').classList.add('active');
      document.querySelector('#button-2013 a').classList.add('active');
    }
  



  });

  
  