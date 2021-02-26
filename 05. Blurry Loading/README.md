# Blurry Loading

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
