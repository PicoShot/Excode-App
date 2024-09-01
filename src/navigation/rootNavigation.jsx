import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import app from '../../firebase.config'


const rootNavigation = () => {

  const {isAuth} = useSelector((state) => state.user)
  console.log('isAuth: ', isAuth)

  return (
   <NavigationContainer>
    {
      !isAuth ? <AuthStack/> : <UserStack/>
    }
   </NavigationContainer>
  )
}

export default rootNavigation

const styles = StyleSheet.create({})