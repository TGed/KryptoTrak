import React, {useEffect, useState} from 'react';
import { StyleSheet,View } from 'react-native';
import MainScreen from './app/screens/MainScreen';
import AppNawigator from './app/navi/AppNawigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {



  return (
    <NavigationContainer>
      <AppNawigator/>
    </NavigationContainer>
  ) 
  
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 100,
  }
})