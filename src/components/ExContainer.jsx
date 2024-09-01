import { StyleSheet, View, StatusBar, } from 'react-native'
import React from 'react'

const ExContainer = ({ children }) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {children}
    </View>
  )
}

export default ExContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000814",
        alignItems: "center",
        justifyContent: "center",
      },
})