# Mixins

Bihua SCSS Mixins

## Table of Contents

- [Essential Mixins](#essential-mixins)
  - [Grid](#grid)
  - [Media Queries](#media-queries)
  - [Interpolate](#interpolate)
  - [Calc interpolation](#calc-interpolation)
  - [Z-index](#z-index)
- [Useful-Mixins](#useful-mixins)
  - [Hardware](#hardware)
  - [Responsive-ratio](#responsive-ratio)
  - [Visibility](#visibility)

# Must-haves Mixins

---

<details>
    <summary id="grid" style="font-size: 1.75em; font-weight: 600">Grid</summary>

```scss
@mixin grid($grid, $column-gap, $margin) {
  display: grid;
  grid-template-columns: repeat($grid, 1fr);
  column-gap: $column-gap;
  padding-left: $margin;
  padding-right: $margin;
}
```

This SCSS/SASS mixin is used to create a CSS grid with equal columns. Here's a line-by-line explanation of what this mixin does:

```scss
@mixin grid($grid, $column-gap, $margin): ;
```

This line defines the grid mixin with three parameters: $grid, $column-gap, and $margin. These parameters will be used to customize the grid based on your needs.

```scss
display: grid; :
```

This line applies the CSS property display: grid; to the element where the mixin will be used. This creates a grid with columns.

```scss
grid-template-columns: repeat($grid, 1fr);
```

This line sets the width of the grid columns. The repeat() function is used to repeat the column pattern, where $grid is the desired number of columns, and 1fr indicates that each column should have an equal fraction of the available space.

```scss
column-gap: $column-gap;
```

This line defines the horizontal spacing between columns in the grid. The value of $column-gap is used to specify the desired spacing.

```scss
padding-left: $margin;
```

This line adds spacing to the left of the grid. The value of $margin is used to set the size of the spacing.

```scss
padding-right: $margin;
```

This line adds spacing to the right of the grid. The value of $margin is used to set the size of the spacing.

Now, here's an example of using this mixin:

```scss
.container {
  @include grid(3, 10px, 20px);
}
```

In this example, the `.container` class will use the grid mixin with the following values: `$grid = 3` (3 columns), `$column-gap = 10px` (horizontal spacing between columns), and `$margin = 20px` (spacing on the left and right of the grid). This will create a grid with 3 equal columns, a 10px spacing between columns, and a 20px spacing on the left and right of the grid.

</details>

<details>
    <summary id="media-queries" style="font-size: 1.75em; font-weight: 600">Media Queries</summary>

```scss
@mixin mq($width, $type: min) {
  @if map_has_key($breakpoints, $width) {
    $width: map_get($breakpoints, $width);
    @if $type == max {
      $width: $width - 1px;
    }
    @media only screen and (#{$type}-width: $width) {
      @content;
    }
  }
}
```

This SCSS/SASS mixin is used for creating media queries with breakpoint values. Let's go through the explanation line by line:

```scss
@mixin mq($width, $type: min);
```

This line defines the mq mixin with two parameters: `$width` and `$type`. The `$type` parameter is optional and its default value is set to min.

```scss
@if map_has_key($breakpoints, $width) ;
```

This line checks if the `$width` value exists as a key in the `$breakpoints` map.

```scss
$width: map_get($breakpoints, $width);
```

If the `$width` value exists as a key in the `$breakpoints` map, this line retrieves its corresponding value and assigns it to the `$width` variable.

```scss
@if $type == max
```
This line checks if the `$type` value is set to max.

```scss
$width: $width - 1px;
```

If `$type` is max, this line subtracts 1px from the `$width` value.

```scss
@media only screen and (#{$type}-width: $width)
```
This line generates the media query using the `$type` and `$width` values. It checks the screen width against the specified type and width.

```scss
@content;
```
This line includes the content inside the media query block. It allows you to write the styles that should be applied when the media query condition is met.

You would need to provide the `$breakpoints` map and the desired values for `$width` and $type when using this mixin. The mixin will then generate the appropriate media query based on the provided parameters.


```scss
$breakpoints: (
  small: 480px,
  medium: 768px,
  large: 1024px
);

.container {
  background-color: red;

  @include mq(medium) {
    background-color: blue;
  }

  @include mq(large, max) {
    background-color: green;
  }
}
```

</details>

# Useful Mixins


