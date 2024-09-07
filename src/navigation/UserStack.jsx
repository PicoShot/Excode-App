import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomePage,
  ProfilePage,
  AdSoyadPage,
  TCPage,
  AilePage,
  TCGSMPage,
  GSMTCPage,
  SulalePage,
} from "../screens";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="AdSoyad" component={AdSoyadPage} />
      <Stack.Screen name="TC" component={TCPage} />
      <Stack.Screen name="Aile" component={AilePage} />
      <Stack.Screen name="TCGSM" component={TCGSMPage} />
      <Stack.Screen name="GSMTC" component={GSMTCPage} />
      <Stack.Screen name="Sulale" component={SulalePage} />
    </Stack.Navigator>
  );
};

export default UserStack;

