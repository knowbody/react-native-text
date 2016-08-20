React Native Text
===

### About

React Native Text scales the font size based on a device width.

### Get Started

1. `npm install --save react-native-text`
2. Example usage:

```js
import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import ScalableText from 'react-native-text';

const WelcomeText = ({ text }) => (
  <ScalableText style={styles.text}>{text}</ScalableText>
);

WelcomeText.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 28
  }
});

export default WelcomeText;
```
