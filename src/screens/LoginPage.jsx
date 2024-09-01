import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { ExTextInput, ExLoading } from "../components";

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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={[{ fontSize: 40, textAlign: "center", top:30, position:'absolute' }, styles.TextStyle]}>
        Welcome {result}{" "}
      </Text>

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/login.png")}
      />
      
      <ExTextInput
      exTitle='Email'
      exKeyboad='email-address'
      exIsSecure={false}
      exOnChangeText={SetEmail}
      exValue={email}
      exPlaceholder='Enter Your Email'
      />

      <ExTextInput
      exTitle='Password'
      exKeyboad='numeric'
      exIsSecure={true}
      exOnChangeText={setPassword}
      exValue={password}
      exPlaceholder='Enter Your Password'
      />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#001d3d" : "#003566",
          },
          styles.loginButton,
        ]}
        onPress={() => SetIsLoading(true)}
      >
        <Text style={styles.inputBoxText}>Login</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#ffd60a" : "#ffc300" },
          styles.signupButton,
        ]}
        onPress={() => props.navigation.navigate("Signup")}
      >
        <Text style={styles.inputBoxText}>Signup</Text>
      </Pressable>

      {isLoading ? (
        <ExLoading changeIsLoading={() => SetIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000814",
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    color: "white",
  },
  TextInputStyle: {
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 20,
    marginVertical: 10,
    textAlign: "center",
    color: "white",
    borderColor: "white",
  },
  loginButton: {
    borderWidth: 1,
    width: "60%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    maxWidth: 300,
  },
  signupButton: {
    borderWidth: 1,
    width: "50%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    maxWidth: 300,
  },
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
