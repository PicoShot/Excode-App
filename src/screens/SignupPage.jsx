import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import {
  ExButton,
  ExText,
  ExLoading,
  ExTextInput,
  ExContainer,
  ExHyperText,
} from "../components";

const SignupPage = ({ navigation }) => {
  const [isLoading, SetIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResults] = useState("");

  return (
    <ExContainer>
      <ExText
        exText="SignUp"
        exSize={50}
        exMarginBottom={60}
        exFontWidth="bold"
      />

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/register.png")}
      />

      <ExTextInput
        exTitle="Full Name"
        exKeyboad="default"
        exIsSecure={false}
        exOnChangeText={setFullName}
        exValue={fullName}
        exPlaceholder="Enter Your Email"
      />

      <ExTextInput
        exTitle="Email"
        exKeyboad="email-address"
        exIsSecure={false}
        exOnChangeText={setEmail}
        exValue={email}
        exPlaceholder="Enter Your Email"
      />

      <ExTextInput
        exTitle="Password"
        exKeyboad="default"
        exIsSecure={true}
        exOnChangeText={setPassword}
        exValue={password}
        exPlaceholder="Enter Your Password"
      />

      <ExButton
        exTitle="SignUp"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => SetIsLoading(true)}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExHyperText
        exText="Already have account? Click here"
        exOnPress={() => navigation.navigate("Login")}
        exTop={30}
      />

      {isLoading ? <ExLoading changeIsLoading={() => SetIsLoading(false)} /> : null}

    </ExContainer>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 100,
    shadowColor: "#003566",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,
    elevation: 24,
  },
});
