import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

const ExContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.exContainer}>
        <StatusBar barStyle="light-content" />
        {children}
    </SafeAreaView>
  )
}

export default ExContainer

const styles = StyleSheet.create({
    exContainer: {
        flex: 1,
        backgroundColor: "#000814",
        alignItems: "center",
        justifyContent: "center",
      },
})