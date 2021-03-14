# Dring Water

1. 클릭한 컵 이전의 컵들도 채우기.
2. 마지막으로 마신 컵은 toggle 가능하게 하기

```js
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  // 마지막으로 마신 컵은 toggle
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  // 이전의 컵들도 채우기
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}
```
