import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
const flattenStyle = StyleSheet.flatten;
const realWidth = height > width ? width : height;

const ScalableText = ({ style, children, ...props }) => {
  const fontSize = flattenStyle(style).fontSize || 14;
  const scaledFontSize = Math.round(fontSize * realWidth / 375);

  return (
    <Text style={[style, { fontSize: scaledFontSize }]} {...props}>
      {children}
    </Text>
  );
};

ScalableText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node.isRequired
};

ScalableText.defaultProps = {
  style: {}
};

export default ScalableText;
