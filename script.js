const slides = document.querySelectorAll('.slideshow-slide');
let currentSlideIndex = 0;

setInterval(() => {
  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add('active');
}, 6000);

// Animate on scroll (AOS)
AOS.init({
  duration: 1000 // specify the duration of the animation in milliseconds
});

const myImage = document.querySelector('.my-image');
window.addEventListener('scroll', function() {
  if (isScrolledIntoView(myImage)) {
    myImage.classList.add('fade-in');
  }
});

function isScrolledIntoView(elem) {
  const rect = elem.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}
