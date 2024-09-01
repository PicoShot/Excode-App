import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExTextInput,
  ExLoading,
  ExText,
} from "../components";

const ResetPage = ({navigation}) => {
  const [isLoading, SetIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <ExContainer>
      <ExText
        exText="Reset Password"
        exSize={40}
        exMarginBottom={60}
        exFontWidth="bold"
      />

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/reload.png")}
      />

      <ExTextInput
        exTitle="Email"
        exKeyboad="default"
        exIsSecure={false}
        exOnChangeText={setEmail}
        exValue={email}
        exPlaceholder="Enter Your Email"
      />

      <ExButton
        exTitle="Send Password Reset Mail"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => SetIsLoading(true)}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExHyperText
        exText="Create a new account? Click here"
        exOnPress={() => navigation.navigate("Signup")}
        exTop={30}
      />

      {isLoading ? <ExLoading changeIsLoading={() => SetIsLoading(false)} /> : null }

    </ExContainer>
  );
};

export default ResetPage;

const styles = StyleSheet.create({
  imageStyle: {
    width: 125,
    height: 125,
    shadowColor: "#003566",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,
    elevation: 24,
    resizeMode: "stretch",
    marginVertical:10,
  },
});
