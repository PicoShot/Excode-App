import React from "react";
import { Pressable} from "react-native";
import ExText from "./ExText";

const ExHyperText = ({ exText, exOnPress, exColor = "gray", exTop = 0 }) => {
  return (
    <Pressable onPress={exOnPress} style={[{ top: exTop }]}>
      <ExText exText={exText} exColor={exColor} />
    </Pressable>
  );
};

export default ExHyperText;

//const styles = StyleSheet.create({});
