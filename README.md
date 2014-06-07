context.clear
=============

Monkey-patches the 2D canvas context (CanvasRenderingContext2D) to include a `clear` method that clears the screen.

Usage (after including the library):

```javascript
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d')

// ...draw some stuff...
context.clear()
```

It's a very short library. Enjoy!