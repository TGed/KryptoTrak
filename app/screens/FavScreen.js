import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ChartScreen from '../screens/ChartScreen';

const Stack = createStackNavigator();

const FavScreen = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="ChartScreen"
            component={ChartScreen}
            options={{
                headerBackTitleVisible:false,
                headerTransparent:true,
                headerTitle:" s",
            }}
        />
    </Stack.Navigator>
)

export default FavScreen;