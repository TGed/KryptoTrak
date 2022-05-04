import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const LogNawigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name = "LoginScreen"
            component={LoginScreen}
            options={{headerShown:false}}
        />
        <Stack.Screen 
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
                headerBackTitleVisible:false,
                headerTransparent:true,
                headerTitle:"",
            }}
        />
    </Stack.Navigator>
);



export default LogNawigator;