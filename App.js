import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNawigator from './app/navi/AppNawigator';
import Screen from './app/components/Screen';



export default function App() {
  return (
    <NavigationContainer>
      <AppNawigator/>
    </NavigationContainer>
  ) 
  
}


