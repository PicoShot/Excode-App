import {StyleSheet, Image,} from "react-native";
import React, { useState } from "react";
import { ExTextInput, ExLoading, ExText, ExButton, ExContainer, } from "../components";

const LoginPage = (props) => {
  const [isLoading, SetIsLoading] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResults] = useState("");

  console.log("_______________________________");
  console.log(`isLoading: ${isLoading}`);
  console.log(email ? `Email: ${email}` : "Email: undefined");
  console.log(password ? "Pin: " + parseInt(password, 10) : "Pin: undefineSd");

  return (
    <ExContainer>
      

      <ExText exText='Welcome' exSize={50} exMarginBottom={60} exFontWidth='bold'/>

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/login.png")}
      />
      
      <ExTextInput
      style={styles.test}
      exTitle='Email'
      exKeyboad='email-address'
      exIsSecure={false}
      exOnChangeText={SetEmail}
      exValue={email}
      exPlaceholder='Enter Your Email'
      />

      <ExTextInput
      exTitle='Password'
      exKeyboad='default'
      exIsSecure={true}
      exOnChangeText={setPassword}
      exValue={password}
      exPlaceholder='Enter Your Password'
      />

      <ExButton 
      exTitle='Login' 
      exColor='#003566' 
      exPressedColor='#001D3D' 
      exOnPress={() => SetIsLoading(true)}
      exWidth='60%'
      exMaxWidth={300}
      />

      <ExButton 
      exTitle='SignUp' 
      exColor='#ffc300' 
      exPressedColor='#ffd60a' 
      exOnPress={() => props.navigation.navigate("Signup")}
      exWidth='50%'
      exMaxWidth={250}
      />

      {isLoading ? (
        <ExLoading changeIsLoading={() => SetIsLoading(false)} />
      ) : null}
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
