import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;

function ScalableText({
  // iPhone 6 width
  deviceBaseWidth = 375,
  style = {},
  children,
  ...props
}) {
  const { fontSize, lineHeight } = StyleSheet.flatten(style);

  return (
    <Text
      style={[
        style,
        scaleText({
          deviceBaseWidth,
          fontSize,
          lineHeight,
        }),
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

ScalableText.propTypes = {
  deviceBaseWidth: PropTypes.number,
  style: Text.propTypes.style,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default ScalableText;

export function scaleText({
  deviceBaseWidth,
  fontSize = 14,
  // Default line height is 120% of the font size.
  lineHeight = fontSize * 1.2,
}) {
  return {
    fontSize: Math.round((fontSize * realWidth) / deviceBaseWidth),
    lineHeight: Math.round((lineHeight * realWidth) / deviceBaseWidth),
  };
}
