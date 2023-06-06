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

# Essential Mixins

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
display: grid;
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

#### Example

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
@if $type == max ;
```

This line checks if the `$type` value is set to max.

```scss
$width: $width - 1px;
```

If `$type` is max, this line subtracts 1px from the `$width` value.

```scss
@media only screen and (#{$type}-width: $width);
```

This line generates the media query using the `$type` and `$width` values. It checks the screen width against the specified type and width.

```scss
@content;
```

This line includes the content inside the media query block. It allows you to write the styles that should be applied when the media query condition is met.

You would need to provide the `$breakpoints` map or the variables file and the desired values for `$width` and $type when using this mixin. The mixin will then generate the appropriate media query based on the provided parameters.

#### Example

```scss
$breakpoints: (
  small: 480px,
  medium: 768px,
  large: 1024px,
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
<details>
    <summary id="interpolate" style="font-size: 1.75em; font-weight: 600">Interpolate</summary>

```scss
@mixin interpolate($properties, $min-screen, $max-screen, $min-value, $max-value) {
	& {
		@each $property in $properties {
			#{$property}: $min-value;
		}

		@media screen and (min-width: $min-screen) {
			@each $property in $properties {
				#{$property}: calc-interpolation($min-screen, $min-value, $max-screen, $max-value);
			}
		}

		@media screen and (min-width: $max-screen) {
			@each $property in $properties {
				#{$property}: $max-value;
			}
		}
	}
```

This mixin is an interpolation function that allows you to define progressive values for a set of CSS properties based on the screen size.

Here's how it works:

You need to pass the following arguments to the mixin:
`$properties: `
a list of CSS properties you want to interpolate.
`$min-screen: `
the minimum screen size from which the values start changing.
`$max-screen:`
the maximum screen size at which the values reach their maximum value.
`$min-value:`
the initial value of the properties.
`$max-value:`
the maximum value of the properties.
The mixin initially sets the properties with the `$min-value`.

It then uses media queries to apply linear interpolation of values between `$min-value` and `$max-value` based on the screen size. This is done by calling a `calc-interpolation()` function with the appropriate arguments.

When the screen size is greater than or equal to `$max-screen`, the properties are set to the `$max-value.`

#### Example

```scss
.my-element {
  @include interpolate(padding, 768px, 1440px, 10px, 20px);
  @include interpolate(font-size, 768px, 1440px, 14px, 18px);
}
```

In this example, the **padding** and **font-size** properties of the element with the class **.my-element** will be interpolated between the values **10px and 20px** for **padding**, and between **14px and 18px** for **font-size**, based on the screen size. The values will start changing from a screen size of 768px and reach their maximum value at 1440px or larger.

</details>
<details>
    <summary id="calc-interpolation" style="font-size: 1.75em; font-weight: 600">Calc-interpolation</summary>

```scss
@function calc-interpolation($min-screen, $min-value, $max-screen, $max-value) {
  $a: calc(($max-value - $min-value) / ($max-screen - $min-screen));
  $b: $min-value - $a * $min-screen;

  $sign: "+";
  @if ($b < 0) {
    $sign: "-";
    $b: abs($b);
  }
  @return calc(#{$a * 100}vw #{$sign} #{$b});
}
```

This function calculates the interpolation formula used in the [interpolation mixin](#interpolate). Here's how it works:

It takes four arguments:

`$min-screen:`
the minimum screen size.
`$min-value:`
the initial value.
`$max-screen:`
the maximum screen size.
`$max-value:`
the maximum value.

It calculates the slope `$a` of the linear equation `y = ax + b`, where `x` represents the screen size and `y` represents the property value. The slope is determined by dividing the difference between the maximum and minimum values by the difference between the maximum and minimum screen sizes.

It calculates the y-intercept $b of the linear equation using the formula b = y - ax, where y is the initial value and x is the minimum screen size. This represents the value of the property when the screen size is equal to the minimum screen size.

It determines the sign for the y-intercept. If `$b` is negative, it changes the sign to a negative sign - and takes the absolute value of `$b`.

It returns the interpolated value using the calc function. The formula `#{$a*100}vw #{$sign} #{$b}` represents the interpolated value as a CSS calc expression, where **vw** represents the viewport width unit.

The calc-interpolation function is used within the interpolation mixin to calculate the interpolated values for the properties based on the screen size.

</details>
<details>
    <summary id="z-index" style="font-size: 1.75em; font-weight: 600">Z-index</summary>

```scss
@function z($name) {
  @if index($z-indexes, $name) {
    @return (index($z-indexes, $name)) + 10;
  } @else {
    @warn 'There is no item "#{$name}" in this list; choose one of: #{$z-indexes}';
    @return null;
  }
}
```

The purpose of this mixin is to determine a z-index value based on the given name.

The mixin begins with a function declaration using the `@function` directive. The function is named **"z"** and takes one parameter, `"$name"`. It checks if the provided `"$name"` exists in a list called `"$z-indexes"` using the `index()` function.

If the `"$name"` is found in the `"$z-indexes"` list, the function returns the corresponding index value incremented by **10**. This is achieved by using the return statement with the addition of **10** to the indexed value.

If the `"$name"` is not found in the `"$z-indexes"` list, the `@else` block is executed. It generates a warning message using the `@warn` directive, indicating that the provided `"$name"` is not present in the list. The warning message includes the available options from the `"$z-indexes"` list. Finally, the function returns null.

#### Example

```scss
$z-indexes: ("content", "sidebar", "header");

.my-first-element {
  z-index: z("content"); // Output: 11
}

.my-second-element {
  z-index: z("sidebar"); // Output: 12
}

.my-third-element {
  z-index: z("header"); // Output: 13
}

.my-other-element {
  z-index: z(
    "footer"
  ); // Warning: 'There is no item "footer" in this list; choose one of: 'header', 'sidebar', 'content'
}
```

</details>

# Useful Mixins

---

<details>
    <summary id="hardware" style="font-size: 1.75em; font-weight: 600">Hardware</summary>

```scss
@mixin hardware($backface: true, $perspective: 1000) {
    @if $backface {
        backface-visibility: hidden;
    }
    perspective: $perspective;
}
```
In the provided example, the `hardware` mixin is defined with two parameters: `$backface` and `$perspective`. By default, the value of `$backface` is set to true, and the value of `$perspective` is set to **1000**. However, you can override these default values when using the mixin.

The `hardware` mixin contains some CSS properties related to hardware acceleration and 3D transformations. If the `$backface` parameter is true, it sets the `backface-visibility` property to `hidden`, which hides the backface of an element during 3D transformations. Additionally, it sets the **perspective** property to the value of the `$perspective` parameter.
#### Example

```scss
.my-element {
  @include hardware($backface: false, $perspective: 1200);
}
```
In the above example, the **hardware** mixin is included in the `.my-element` selector. The `$backface` parameter is overridden with a value of false, which means the **backface-visibility** property won't be applied. The `$perspective` parameter is overridden with a value of **1200**, which sets the perspective property accordingly. The **transform-style** property is also added separately, indicating that the 3D transformations should be preserved for the element.

By using the hardware mixin, you can avoid duplicating the same CSS properties across multiple styles or selectors. It promotes code reusability and allows for easy modification of the properties in a central location, making your code more modular and maintainable.
</details>

<details>
    <summary id="responsive-ratio" style="font-size: 1.75em; font-weight: 600">Responsive-ratio</summary>

```scss
@mixin responsive-ratio($x,$y, $pseudo: false) {
    $padding: unquote( ( $y / $x ) * 100 + '%' );
    @if $pseudo {
        &:before {
            @include pseudo($pos: relative);
            width: 100%;
            padding-top: $padding;
        }
    } @else {
        padding-top: $padding;
    }
}
```
can be used to apply responsive padding based on a given aspect ratio.
Here's an explanation of the code:

The responsive-ratio mixin is defined using the `@mixin` directive, followed by the mixin name and the parameters it accepts (`$x`, `$y`, and `$pseudo` with a default value of false).

Inside the mixin, a variable `$padding` is calculated by dividing `$y` by `$x`, multiplying the result by 100, and appending a percentage sign using string interpolation (#{}). This calculates the padding percentage required to maintain the given aspect ratio.

An `@if` statement is used to check the value of $pseudo. If it's truthy (i.e., not false or null), the code block inside the `@if` statement is executed.

Inside the `@if` block, the `&:before` selector is used to target a pseudo-element. The `@include` directive is used to include the pseudo mixin (not provided in the code snippet) for generating a pseudo-element with relative positioning.

The pseudo-element is styled with a width of 100% and a padding-top value set to the calculated $padding. This ensures that the pseudo-element maintains the specified aspect ratio.

If the `$pseudo` parameter is not truthy (i.e., false or null), the code block inside the @else statement is executed. In this case, the original element (not a pseudo-element) is styled with a padding-top value set to the calculated `$padding`. This applies the responsive padding directly to the element.
#### Example

```scss
.my-element {
  @include responsive-ratio(16, 9);
}
```

</details>

<details>
    <summary id="visibility" style="font-size: 1.75em; font-weight: 600">
    Visibility
    </summary>

```scss
@mixin visibility($value) {
  @if ($value == "hide") {
    display: none;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  } @else {
    display: block;
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
}
```

This mixin is a reusable piece of code in Sass (a CSS preprocessor) that allows you to quickly define visibility properties for an HTML element. It takes a parameter **`$value`**, which can be either 'hide' or any other value.

If the value is 'hide', the mixin sets the following properties for the element:

`display: none;`
hides the element by making it invisible and removing its space in the layout.

`visibility: hidden;`
makes the element invisible while maintaining its space in the layout.
`opacity: 0;`
makes the element transparent.
`pointer-events: none;`
disables pointer events on the element, so it cannot be clicked or interacted with.

If the value is anything other than 'hide', the mixin sets the following properties for the element:

`display: block;`
displays the element as a block-level element.
`visibility: visible;`
makes the element visible.
`opacity: 1;`
makes the element fully opaque.
`pointer-events: all;`
enables all pointer events on the element, allowing it to be clicked and interacted with.

### Example

```scss
.element {
  @include visibility("hide");
}
```

In this example, the **`.element`** class will have its visibility properties set to 'hide', causing it to be hiddenfrom view and disabled for interaction.

</details>
