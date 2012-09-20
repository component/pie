
# pie

  Pie charts for [component/piecon](https://github.com/component/piecon)
  inspired by the original [piecon](https://github.com/lipka/piecon). Styled
  with CSS!

  ![](http://f.cl.ly/items/360n3W0D2I451205041b/Screen%20Shot%202012-09-19%20at%204.35.54%20PM.png)

## Installation

    $ component install component/pie

## Styling

  Pie utilizes [component/style](https://github.com/component/style)
  to enable CSS styling for Canvas rasters. For example the default
  style is:

```css
.pie {
  color: #EC4E89;
  background: #bbb;
  border: 2px solid white;
}
```

## API

### new Pie([selector])

  Initialize a new `Pie` with optional CSS `selector` used
  for styling, this defaults to ".pie".

### Pie#update(n)

  Update the percentage to `n`.

### Pie#size(n)

  Set the diameter to `n`.

### Pie#draw(ctx)

  Draw on `ctx`.

# License

  MIT

