import React, {useEffect, useState, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase';
import { AuthUserProviderContext } from '../auth/AuthUserProvider';
import AppNawigator from './AppNawigator';
import LogNawigator from './LogNawigator';

export default function App() {
  const {user, setUser } = useContext(AuthUserProviderContext);

  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null)
      }
    );

    return unsubscribeAuthStateChanged;
  }, [user]);







  return (
    <NavigationContainer>
        {user? <AppNawigator/> : <LogNawigator/>}
    </NavigationContainer>

  ); 
  
};


