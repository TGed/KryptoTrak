import React, {useEffect, useState} from 'react';
import { StyleSheet,View } from 'react-native';
import MainScreen from './app/screens/MainScreen';
import AppNawigator from './app/navi/AppNawigator'
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './app/screens/LoginScreen';
import LogNawigator from './app/navi/LogNawigator';

export default function App() {



  return (
    <NavigationContainer>
      <LogNawigator />
    </NavigationContainer>
  ) 
  
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 100,
  }
})