# React Native Text

## About

React Native Text scales the font size based on a device width.

This is the comparison of two screens (iPhone 4s and iPhone 6s Plus),
with applied style:

```js
welcome: {
  fontSize: 31,
  textAlign: 'center',
  margin: 10,
},
instructions: {
  fontSize: 16,
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
}
```

You can also check out the example usage on Snack: https://snack.expo.io/@knowbody/react-native-text-example

### With react-native-text

![with](https://cloud.githubusercontent.com/assets/3802023/17853378/08e0c0f6-6864-11e6-80ac-161b5735c2f3.png)

### Without (using `<Text />` from React Native Core)

![without](https://cloud.githubusercontent.com/assets/3802023/17853397/225601ae-6864-11e6-9742-55f2ad527e48.png)

## Get Started

1. `yarn add react-native-text`
2. Example usage:

```js
import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import ScalableText from 'react-native-text';

const WelcomeText = ({ text }) => <ScalableText style={styles.text}>{text}</ScalableText>;

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 28,
  },
});

export default WelcomeText;
```

### Cool! Can I get the same effect outside a `<Text />` element?

Yes, you can! The `scaleText` function is a named export. Invoke it with the following signature:

```js
import { scaleText } from 'react-native-text';

const style = scaleText({
  deviceBaseWidth: 375,
  fontSize: 14,
  lineHeight: 14 * 1.2,
}); // returns: { fontSize, lineHeight }
```

Or with a React Hook `useScaleText`:

```js
import { useScaleText } from 'react-native-text';

const { fontSize, lineHeight } = useScaleText({ fontSize: 18 });
```

## LICENSE

MIT
