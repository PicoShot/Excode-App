import { StyleSheet, Pressable } from 'react-native';
import ExText from './ExText';
import React from 'react';

const ExButton = ({ exTitle = 'ExButton', exColor = '#003566', exPressedColor = '#001D3D', exOnPress, exWidth = '60%', exMaxWidth = '270' }) => {
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
