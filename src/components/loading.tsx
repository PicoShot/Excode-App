import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native';
import React from 'react'

const loading = (props: { changeIsLoading: () => void; }) => {
  return (
    <View style={styles.container}>
        <Pressable 
        onPress={() => props.changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}>
        <Text style={styles.closeButton}> X </Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'#4361ee'}/>
      <Text style={styles.loadingText}>loading...</Text>
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
        marginTop:10,
    },
    closeButton:{
        fontWeight:'bold',
        fontSize:30,
        //color:'white',
    },
    closeButtonContainer:{
        width:50,
        height:50,
        backgroundColor:'#003566',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:20,
        right:10
    }
})