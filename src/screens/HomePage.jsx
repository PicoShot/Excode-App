import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ExButton, ExContainer, ExText } from "../components";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

const HomePage = ({ navigation }) => {
  const [displayName, setDisplayName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        setDisplayName(user.displayName);
        setPhotoURL(user.photoURL);
      }
    }, 2000);
  }, []);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ExContainer>
      <View style={styles.profileBox}>
        <Pressable
          style={styles.profileBox}
          onPress={() => navigation.navigate("Profile")}
        >
          {photoURL ? (
            <Image source={{ uri: photoURL }} style={styles.profileImage} />
          ) : (
            <Text>No Profile Picture</Text>
          )}
          <ExText exText={displayName ? displayName : "Unknown"} />
        </Pressable>
      </View>
        <ExText
          exText="Excode Panel (Beta)"
          exSize={30}
          exMarginBottom={60}
          exFontWidth="bold"
        />

        <ExButton
          exOnPress={() => navigation.navigate("AdSoyad")}
          exTitle="Ad Soyad"
        />

        <ExButton exOnPress={() => navigation.navigate("TC")} exTitle="TC" />

        <ExButton
          exOnPress={() => navigation.navigate("Aile")}
          exTitle="Aile"
        />

        <ExButton
          exOnPress={() => console.log("Yakında...")}
          exTitle="Sülale (Yakında...)"
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

const styles = StyleSheet.create({
  profileBox: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    top: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
