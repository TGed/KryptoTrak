import React, {useEffect, useState} from 'react';
import { StyleSheet,View } from 'react-native';
import AppNawigator from './app/navi/AppNawigator';
import AppText from './app/components/AppText'
import MainScreen from './app/screens/MainScreen';
import RegisterScreen from './app/screens/RegisterScreen'
import LoginScreen from './app/screens/LoginScreen';

export default function App() {



  return (
    <MainScreen/>
  ) 
  
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 100,
  }
})