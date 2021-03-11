# Random Choice Picker

### 콤마를 기준으로 tag를 나눌 때, 어떤 것들을 고려하여 코드를 짜야할까

1. 콤마만 입력하고 내용을 넣지 않았을 때의 코드
2. 공백을 없애는 코드

```js
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
}
```

### random으로 고르는 것 같은 애니메이션을 어떻게 js로 구현할까?

- setTimeout와 setInterval을 사용해 class를 add, remove를 반복한다.
