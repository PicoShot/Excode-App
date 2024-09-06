import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExLoading,
  ExText,
  ExTextInput,
  ExList,
  ExTest,
} from "../components";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { Provider as PaperProvider } from "react-native-paper";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {}, [isSaved]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ExContainer>
      <ExText
        exText="Excode Panel"
        exSize={35}
        exMarginBottom={60}
        exFontWidth="bold"
      />

      <ExButton
        exOnPress={() => navigation.navigate("AdSoyad")}
        exTitle="Ad Soyad"
      />

      <ExButton exOnPress={() => navigation.navigate("TC")} exTitle="TC" />

      <ExButton exOnPress={() => navigation.navigate("Aile")} exTitle="Aile" />

      <ExButton
        exOnPress={() => console.log("Bakımda")}
        exTitle="Sülale (Bakımda)"
      />

      <ExButton
        exOnPress={() => navigation.navigate("TCGSM")}
        exTitle="TC-GSM"
      />

      <ExButton
        exOnPress={() => navigation.navigate("GSMTC")}
        exTitle="GSM-TC"
      />

      <ExButton
        exOnPress={handleLogout}
        exTitle="Logout"
        exColor="#C70039"
        exPressedColor="#F94C10"
      />
    </ExContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
