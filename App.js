import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OfflineInfo from './app/components/OfflineInfo'


import { AuthUserProvider } from './app/auth/AuthUserProvider';
import RootNawigator from './app/navi/RootNavigator'

export default function App() {

  return (
    <AuthUserProvider>
      <SafeAreaProvider>
        <OfflineInfo/>
        <RootNawigator/>
      </SafeAreaProvider>
    </AuthUserProvider>

  ) 
  
}


