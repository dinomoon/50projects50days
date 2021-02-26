# Blurry Loading

## filter: blur()

- blur()를 사용하면 가장자리 부분이 하얗게 변해서 크기를 더 크게 만들어줌

```css
.bg {
  background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
    no-repeat center/cover;
  position: absolute;
  top: -40px;
  left: -40px;
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  z-index: -1;
  filter: blur(0px);
}
```

## background 단축

```css
div {
  background-image: url(image.jpg);
  background-position: 0 -100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: border-box;
  background-clip: padding-box;
  background-color: #333;
}
```

```css
/* * bg-image bg-position / bg-size bg-repeat bg-attachment bg-origin bg-clip */
div {
  background: url('image.jpg') 0 -100px / contain no-repeat fixed border-box
    padding-box #333;
}
```
