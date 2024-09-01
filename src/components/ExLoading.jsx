import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native';
import React from 'react'

const loading = (props) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#4361ee'}/>
      <Text style={styles.loadingText}>Please wait while loading...</Text>
      <Pressable 
        onPress={() => props.changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}>
        <Text style={styles.closeButton}> Cencel </Text>
        </Pressable>
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
    closeButton:{
        fontWeight:'bold',
        fontSize:20,
        //color:'white',
    },
    closeButtonContainer:{
        width:100,
        height:50,
        backgroundColor:'#003566',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:50
    }
})