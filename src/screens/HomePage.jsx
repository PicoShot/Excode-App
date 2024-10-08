import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ExButton, ExContainer, ExText } from "../components";

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

  return (
    <ExContainer>
      <Pressable
        style={styles.profileBox}
        onPress={() => navigation.navigate("Profile")}
      >
        {photoURL ? (
          <Image source={{ uri: photoURL }} style={styles.profileImage} />
        ) : (
          <Text>No Profile Picture</Text>
        )}
        <ExText exText={displayName ? displayName + " ▼" : "Unknown ▼"} />
      </Pressable>

      <ExText
        exText="Excode Panel (Beta)"
        exSize={30}
        exMarginBottom={40}
        exFontWidth="bold"
      />

      <ExButton
        exOnPress={() => navigation.navigate("AdSoyad")}
        exTitle="Ad Soyad"
        exMaxWidth={300}
      />

      <ExButton
        exOnPress={() => navigation.navigate("TC")}
        exTitle="TC"
        exMaxWidth={300}
      />

      <ExButton
        exOnPress={() => navigation.navigate("Aile")}
        exTitle="Aile"
        exMaxWidth={300}
      />

      <ExButton
        exOnPress={() => navigation.navigate("Sulale")}
        exTitle="Sülale"
        exMaxWidth={300}
      />

      <ExButton
        exOnPress={() => navigation.navigate("TCGSM")}
        exTitle="TC-GSM"
        exMaxWidth={300}
      />

      <ExButton
        exOnPress={() => navigation.navigate("GSMTC")}
        exTitle="GSM-TC"
        exMaxWidth={300}
      />
    </ExContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  profileBox: {
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 50,
  },
});
