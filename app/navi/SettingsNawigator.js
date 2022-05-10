import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/SettingsScreen';
import ResetPassScreen from '../screens/ResetPassScreen'
import EmailChangeScreen from '../screens/EmailChangeScreen';
import AccDeleteScreen from '../screens/AccDeleteScreen';
import { Settings } from 'react-native-web';

const Stack = createStackNavigator();

const SettingsScreenNawigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:'modal',
        
    }}>
        <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ResetPassScreen"
            component={ResetPassScreen}
            options={{
                headerBackTitleVisible:false,
                headerTransparent:true,
                headerTitle:"",
                
            }}
        />
        <Stack.Screen
            name="EmailChangeScreen"
            component={EmailChangeScreen}
            options={{
                headerBackTitleVisible:false,
                headerTransparent:true,
                headerTitle:"",
            }}
        />
        <Stack.Screen
            name="AccDeleteScreen"
            scre
            component={AccDeleteScreen}
            options={{
                headerBackTitleVisible:false,
                headerTransparent:true,
                headerTitle:"",
                
            }}
        />
    </Stack.Navigator>
)

export default SettingsScreenNawigator;