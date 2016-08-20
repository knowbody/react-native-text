import React, { PropTypes } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';

const flattenStyle = StyleSheet.flatten;
const { width } = Dimensions.get('window');


const ScalableText = ({ style, children }) => {
  const fontSize = flattenStyle(style).fontSize || 14;
  const scaledFontSize = Math.round(fontSize * width / 375);

  return <Text style={[style, { fontSize: scaledFontSize }]}>{children}</Text>;
};

ScalableText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node.isRequired
};

export default ScalableText;
