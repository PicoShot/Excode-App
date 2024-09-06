import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ExButton, ExContainer, ExText, ExTextInput } from "../components";
import { getAuth } from "firebase/auth";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        setDisplayName(user.displayName);
        setPhotoURL(user.photoURL);
        setEmail(user.email);
      }
    }, 400);
  }, []);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ExContainer style={styles.container}>
      <ExText
        exText="Profile"
        exSize={30}
        exMarginBottom={40}
        exFontWidth="bold"
      />

      <Pressable
        style={styles.profileBox}
      >
        {photoURL ? (
          <Image source={{ uri: photoURL }} style={styles.profileImage} />
        ) : (
          <Text>No Profile Picture</Text>
        )}
        <ExText exSize={20} exText={displayName ? displayName : "Unknown"} />
      </Pressable>

      <ExTextInput
        exTitle="Name"
        exIsSecure={false}
        exOnChangeText={(name) => setDisplayName(name)}
        exValue={displayName}
        exPlaceholder="Enter New Name"
      />

      <ExButton exOnPress={(displayName) => console.log(displayName)} exTitle="Save Name (Yakında)" />

      <ExTextInput
        exTitle="Email"
        exKeyboad="email-address"
        exIsSecure={false}
        exValue={email}
        exPlaceholder="Enter Your Email"
      />

      <ExButton exOnPress={(email) => console.log(email)} exTitle="Save Email (Yakında)" />

      <ExButton
        exOnPress={handleLogout}
        exTitle="Logout"
        exColor="#C70039"
        exPressedColor="#F94C10"
      />
    </ExContainer>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  profileBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 50,
  },
});
