import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import SText from '../src/index';

/**
 * instead of using the ScalableText component you can use the useScaleText hook or scaleText function
 * and either apply it to the React Native's core Text component style or use it outside of React Native components
 *
 * EXAMPLE:
 * import { useScaleText, scaleText } from 'react-native-text';
 *
 * const { fontSize, lineHeight } = useScaleText({ fontSize: 18 });
 * const textScaleStyle = scaleText({ fontSize: 20 });
 * */

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView>
        <SText style={styles.headerText}>Welcome to react-native-text</SText>

        <View style={styles.textContainer}>
          <SText style={styles.text}>
            This component scales the font size based on a device width.
          </SText>

          <SText style={styles.text}>
            It means that once you pick the style of your text on one device, the text should look
            exactly{' '}
            <SText style={StyleSheet.flatten([styles.text, styles.bold])}>
              the same on different devices
            </SText>
            .
          </SText>

          <SText style={styles.text}>
            For example this paragraph was previewed on iPhone Xs and it takes 4 lines of text. And
            it will take 4 lines of text on iPhone 8, iPhone 11 Plus, etc.
          </SText>

          <Text style={styles.text}>
            And this is the Text component from React Native's core with exactly the same style as
            the paragraphs above. On one device it will take 5 lines and on the other 6, or 7 lines
            of text.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  textContainer: {
    margin: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: 'tomato',
  },
  text: {
    marginTop: 12,
    fontSize: 20,
  },
  bold: {
    fontWeight: '600',
  },
});
