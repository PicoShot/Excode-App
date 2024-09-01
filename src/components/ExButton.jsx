import { StyleSheet, Pressable } from 'react-native';
import ExText from './ExText';
import React from 'react';

const ExButton = ({ exTitle, exColor, exPressedColor, exOnPress, exWidth, exMaxWidth }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? exPressedColor : exColor, 
          width: exWidth,
          maxWidth: exMaxWidth,
        },
        styles.exButton,
      ]}
      onPress={() => exOnPress()}
    >
      <ExText exText={exTitle} />
    </Pressable>
  );
};

export default ExButton;

const styles = StyleSheet.create({
  exButton: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
