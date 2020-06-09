const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs img");

const current2 = document.querySelector("#selected2");
const thumbs2 = document.querySelectorAll(".thumbs2 img");

const current3 = document.querySelector("#selected3");
const thumbs3 = document.querySelectorAll(".thumbs3 img");

const opacity = 0.5;

// Set opacity of first image
thumbs[0].style.opacity = opacity;
thumbs2[0].style.opacity = opacity;
thumbs3[0].style.opacity = opacity;

thumbs.forEach(img => img.addEventListener("click", imgActivate));
thumbs2.forEach(img => img.addEventListener("click",imgActivate2))
thumbs3.forEach(img => img.addEventListener("click",imgActivate3))

function imgActivate(e) {
  // Reset opacity on all thumbs
  thumbs.forEach(img => (img.style.opacity = 1));
  // Change current image to source of clicked image
  current.src = e.target.src;

  // Add fadeIn class
  current.classList.add("fade-in");

  // Remove fadeIn class after animation time elapsed
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change opacity to variable value
  e.target.style.opacity = opacity;
}

function imgActivate2(e) {
  // Reset opacity on all thumbs
  thumbs2.forEach(img => (img.style.opacity = 1));
  // Change current image to source of clicked image
  current2.src = e.target.src;

  // Add fadeIn class
  current2.classList.add("fade-in");

  // Remove fadeIn class after animation time elapsed
  setTimeout(() => current2.classList.remove("fade-in"), 500);

  // Change opacity to variable value
  e.target.style.opacity = opacity;
}

function imgActivate3(e) {
  // Reset opacity on all thumbs
  thumbs3.forEach(img => (img.style.opacity = 1));
  // Change current image to source of clicked image
  current3.src = e.target.src;

  // Add fadeIn class
  current3.classList.add("fade-in");

  // Remove fadeIn class after animation time elapsed
  setTimeout(() => current3.classList.remove("fade-in"), 500);

  // Change opacity to variable value
  e.target.style.opacity = opacity;
}


// Scroll button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}