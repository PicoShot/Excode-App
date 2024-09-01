import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
  ExTextInput,
  ExLoading,
  ExText,
  ExButton,
  ExContainer,
  ExHyperText,
} from "../components";

const LoginPage = ({ navigation }) => {
  const [isLoading, SetIsLoading] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResults] = useState("");

  return (
    <ExContainer>
      <ExText
        exText="Welcome"
        exSize={50}
        exMarginBottom={60}
        exFontWidth="bold"
      />

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/login.png")}
      />

      <ExTextInput
        exTitle="Email"
        exKeyboad="email-address"
        exIsSecure={false}
        exOnChangeText={SetEmail}
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
        exTitle="Login"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => SetIsLoading(true)}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="SignUp"
        exColor="#ffc300"
        exPressedColor="#ffd60a"
        exOnPress={() => navigation.navigate("Signup")}
        exWidth="50%"
        exMaxWidth={250}
      />

      <ExHyperText
        exText="Forgot password? Click here"
        exOnPress={() => navigation.navigate("Reset")}
        exTop={30}
      />

      {isLoading 
      ? (<ExLoading changeIsLoading={() => SetIsLoading(false)} />) 
      : null}
    </ExContainer>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
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
