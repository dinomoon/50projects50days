const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
