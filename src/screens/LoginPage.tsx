import { StyleSheet, Text, View, TextInput, Pressable, Image, StatusBar  } from 'react-native';
import React, {useState} from 'react';
import Loading from "../components/loading";

const LoginPage = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
    const [isLoading, SetIsLoading] = useState(false)
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResults] = useState('')
    
    console.log('_______________________________')
    console.log(`isLoading: ${isLoading}`)
    console.log( email ? `Email: ${email}` : 'Email: undefined')
    console.log(password ? 'Pin: '+ parseInt(password, 10) : 'Pin: undefined')
  
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text style={[{fontSize:40, textAlign:'auto'},styles.TextStyle]}>Welcome {result} </Text>
  
        <Image 
        style={styles.imageStyle}
        source={require('../../assets/images/login.png')}
        />
  
        <Text style={styles.TextStyle}>Email</Text>
        <TextInput
        placeholderTextColor='gray'
        keyboardType='email-address'
        style={styles.TextInputStyle} 
        placeholder='Enter Your Email'
        onChangeText={SetEmail}
        value={email}
        />
  
        <Text style={styles.TextStyle}>Password (Pin)</Text>
        <TextInput 
        secureTextEntry={true}
        placeholderTextColor='gray'
        keyboardType='numeric' 
        style={styles.TextInputStyle} 
        placeholder='Enter Your Password (Pin)'
        onChangeText={setPassword}
        value={password}
        />
  
        <Pressable 
        style={({pressed}) => [{
          backgroundColor:pressed ?'#001d3d' : '#003566',
        },styles.loginButton]} 
        onPress={() => SetIsLoading(true)}>
  
          <Text style={styles.buttonText}>Login</Text>
  
        </Pressable>

        <Pressable 
        style={({pressed}) => [{backgroundColor:pressed ?'#ffd60a' : '#ffc300',}, styles.signupButton]}
        onPress={() => props.navigation.navigate('Signup')}>

          <Text style={styles.buttonText}>Signup</Text>
  
        </Pressable>
  
        { isLoading 
        ? <Loading changeIsLoading={() => SetIsLoading(false)} /> 
        : null }
        
      </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#000814',
      alignItems:'center',
      justifyContent:'center',
    },
    TextStyle:{
      color:'white'
    },
    TextInputStyle:{
      borderBottomWidth:1,
      width:'80%',
      height:50,
      borderRadius:20,
      marginVertical:10,
      textAlign:'center',
      color:'white',
      borderColor:'white',
      maxWidth:500,
    },
    loginButton:{
      borderWidth:1,
      width:'60%',
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      maxWidth:300
    },
    signupButton:{
      borderWidth:1,
      width:'50%',
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      maxWidth:300
    },
    buttonText:{
      fontWeight:'bold',
      color:'white',
    },
    imageStyle:{
      width:150,
      height:150
    }
  })