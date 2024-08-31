import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [discordUser, SetDiscordUser] = useState('')
  const [discordId, setDiscordId] = useState()
  const [state, setState] = useState()

  return (
    <View style={styles.container}>
      <Text>Discord Username</Text>
      <TextInput style={styles.TextInputStyle} placeholder='Enter Discord Username'/>

      <Text>Discord ID</Text>
      <TextInput keyboardType='numeric' style={styles.TextInputStyle} placeholder='Enter Discord ID'/>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  TextInputStyle:{
    borderBottomWidth:1,
    width:'80%',
    height:50,
    borderRadius:20,
    marginVertical:10,
    textAlign:'center',
    
  }
})