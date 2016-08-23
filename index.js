import React, { PropTypes } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';

const flattenStyle = StyleSheet.flatten;


const ScalableText = ({ style, children, ...props }) => {
  const fontSize = flattenStyle(style).fontSize || 14;
  const { width } = Dimensions.get('window');
  const scaledFontSize = Math.round(fontSize * width / 375);

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

export default ScalableText;
