# SparkleButton

A customizable, animated circular button component for React applications. The SparkleButton features an icon in the center, surrounded by sparkles that animate in a clockwise rotation. The button has customizable colors, sizes, and sparkles.

![Sparkle Button](https://media.discordapp.net/attachments/810326308780245045/1096225626601570464/sparkle-button.gif?width=250&height=250)

## Installation

To install the SparkleButton package, run:

```bash
npm install sparkle-button
```
Or if using yarn:
```bash
yarn add sparkle-button
```

## Usage

First, import the SparkleButton component:

```tsx
import SparkleButton from 'sparkle-button';
```

Then, use the SparkleButton component in your React application:

```tsx
<SparkleButton />
```

## Customization

You can customize various aspects of the SparkleButton component, such as the icon, size, colors, and more. Here are some examples:

### Changing the Icon
**NOTE: If there is an issue with the size not working correctly you may have to remove the "width=" attribute from the svg**
To change the SVG icon, pass the icon prop to the SparkleButton component:
```tsx
const rocketIcon = (
  <svg viewBox="0 0 512 512">
    <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
  </svg>
);
<SparkleButton icon={rocketIcon} />
```
![Changing the button's icon](https://media.discordapp.net/attachments/810326308780245045/1096232406400381038/sparkle-button-change-icon.gif?width=1200&height=422)

### Changing the Size

To change the size of the button, pass the size prop to the SparkleButton component:

```tsx
<SparkleButton size={60} />
```

The size prop accepts a number representing the diameter of the button in pixels.
![Changing the button's size](https://media.discordapp.net/attachments/810326308780245045/1096234837607718962/sparkle-button-change-size.gif?width=1200&height=422)

### Customizing Colors

You can customize the background and icon colors by passing the backgroundColor, hoverBackgroundColor, activeBackgroundColor, and iconColor props:

```tsx
<SparkleButton
  backgroundColor="#333"
  hoverBackgroundColor="#555"
  activeBackgroundColor="#222"
  iconColor="#FFF"
/>
```
![Changing Button's normal, hover, active colors](https://media.discordapp.net/attachments/810326308780245045/1096222817512595596/sparkle-button-color-change.gif?width=1200&height=412)

### Customizing Sparkles

To customize the sparkles, pass the sparkleColors prop to the SparkleButton component:

```tsx
<SparkleButton sparkleColors={['red', 'yellow', 'green', 'fuchsia', 'white', 'pink', 'PaleGreen', 'SlateGray']} />
```

The sparkleColors prop accepts an array of color strings.
![Changing the button's sparkles's colors](https://media.discordapp.net/attachments/810326308780245045/1096238115619876964/sparkle-button-change-sparkle-colors.gif?width=1200&height=530)

### Positioning the Icon

To customize the icon's position within the button, pass the iconOffsetX and iconOffsetY props:

```tsx
<SparkleButton iconOffsetX={-2} iconOffsetY={3} />
```

The iconOffsetX and iconOffsetY props accept numbers representing the horizontal and vertical offset in percentages, respectively.\
![Changing icon position](https://media.discordapp.net/attachments/810326308780245045/1096239897251164270/sparkle-button-change-icon-position.gif?width=1200&height=530)

### Stop Sparkles on Click

To make the sparkles stop animating after the button is clicked, pass the stopSparklesOnClick prop:

```tsx
<SparkleButton stopSparklesOnClick />
```
![Stop sparkling after button click](https://media.discordapp.net/attachments/810326308780245045/1096242233809834086/sparkle-button-stop-sparkles.gif?width=1200&height=530)

## Props
| Prop                | Type                    | Required | Description                                                                  | Default Value |
|---------------------|-------------------------|----------|------------------------------------------------------------------------------|---------------|
| `icon`              | ReactNode               | No       | The SVG icon or React component to display in the center of the button       | Rocket Icon   |
| `size`              | number                  | No       | The diameter of the button in pixels                                         | 60            |
| `backgroundColor`   | string                  | No       | The background color of the button                                           | '#333'        |
| `hoverBackgroundColor` | string               | No       | The background color of the button when hovered                              | '#555'        |
| `activeBackgroundColor` | string              | No       | The background color of the button when active (pressed)                     | '#222'        |
| `iconColor`         | string                  | No       | The color of the icon                                                        | '#FFF'        |
| `sparkleColors`     | Array<string>           | No       | An array of color strings for the sparkles                                   | (see below)   |
| `iconOffsetX`       | number                  | No       | The horizontal offset of the icon in percentage                                  | 0             |
| `iconOffsetY`       | number                  | No       | The vertical offset of the icon in percentage                                    | 0             |
| `stopSparklesOnClick` | boolean               | No       | If `true`, the sparkles will stop animating when the button is clicked       | false         |

Default `sparkleColors`:
['red', 'yellow', 'green', 'fuchsia', 'white', 'pink', 'PaleGreen', 'SlateGray']



## License

This project is licensed under the MIT License.