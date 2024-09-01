import { StyleSheet, Text, } from 'react-native'
import React from 'react'

const ExText = ({exText, exColor='white', exSize=14, exMarginBottom=0, exFontWidth='bold'}) => {
  return (
      <Text style={[{fontSize:exSize, marginBottom:exMarginBottom, fontWeight:exFontWidth, color:exColor}]}>{exText}</Text>
  )
}

export default ExText

// const styles = StyleSheet.create({})