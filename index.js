import React, { PropTypes } from 'react';
import {Dimensions, Text, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const flattenStyle = StyleSheet.flatten;
const realWidth = height > width ? width : height;

const ScalableText = ({ style, children, ...props }) => {
  const fontSize = flattenStyle(style).fontSize || 14;
  var scaledFontSize = Math.round(fontSize * realWidth / 375);
  if (scaledFontSize > fontSize && onlyScaleDown) {
    scaledFontSize = fontSize
  }
  return (
    <Text style={[style, {fontSize: scaledFontSize}]} {...props}>
      {children}
    </Text>
  );
};

ScalableText.propTypes = {
  style: Text.propTypes.style,
  onlyScaleDown: propTypes.boolean
  children: PropTypes.node
};

ScalableText.defaultProps = {
  onlyScaleDown: false
  style: {}
};

export default ScalableText;
