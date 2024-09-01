import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ExTextInput = ({exTitle, exKeyboard, exIsSecure, exOnChangeText, exValue, exPlaceholder}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.TextStyle}>{exTitle}</Text>
        <TextInput
          placeholderTextColor="gray"
          keyboardType={exKeyboard}
          secureTextEntry={exIsSecure}
          style={styles.TextInputStyle}
          placeholder={exPlaceholder}
          onChangeText={exOnChangeText}
          value={exValue}
        />
      </View>
  )
}

export default ExTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        borderColor:'white',
        maxWidth: 500,
        marginVertical:5
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
      TextStyle: {
        color: "white",
      },
})