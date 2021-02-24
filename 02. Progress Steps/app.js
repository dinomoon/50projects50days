const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else if (currentActive === 1) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }

  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + '%';
}
