import { StyleSheet, Text, } from 'react-native'
import React from 'react'

const ExText = ({exText, exSize, exMarginBottom, exFontWidth}) => {
  return (
      <Text style={[{fontSize:exSize, marginBottom:exMarginBottom, fontWeight:exFontWidth},styles.ExText]}>{exText}</Text>
  )
}

export default ExText

const styles = StyleSheet.create({
    ExText:{
        color:'white',
    }
})