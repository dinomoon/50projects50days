const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const target = +counter.getAttribute('data-target');
  const increment = target / 200;
  const updateCounter = () => {
    const c = +counter.innerText;

    if (c < target) {
      console.log(`c: ${c}, increment: ${increment}`);
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
