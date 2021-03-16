const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}
