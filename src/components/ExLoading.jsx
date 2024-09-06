import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react'

const loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#4361ee'}/>
      <Text style={styles.loadingText}>Please wait while loading...</Text>
    </View>
  )
}

export default loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'#000814',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    loadingText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginVertical:10,
    },
})