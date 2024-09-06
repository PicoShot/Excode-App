import { StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const ExContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.exContainer}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExContainer;

const styles = StyleSheet.create({
  exContainer: {
    flex: 1,
    backgroundColor: "#000814",
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    padding: 5,
  },
});