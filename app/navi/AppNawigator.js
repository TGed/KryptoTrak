import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavScreen from '../screens/FavScreen';

const Tab = createBottomTabNavigator();

const AppNawigator = () => {
   return (
       <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
                name="Główna"
                component={MainScreen}
                options= {{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons 
                            name="home"
                            color={color}
                            size={size}
                        />
                    )

                }}
            />
            <Tab.Screen
                name="Ulubione"
                component={FavScreen}
                options= {{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons 
                            name="star"
                            color={color}
                            size={size}
                        />
                    )

                }}
            />
            <Tab.Screen
                name="Ustawienia"
                component={SettingsScreen}
                options= {{
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons 
                            name="account"
                            color={color}
                            size={size}
                        />
                    )

                }}
            />

       </Tab.Navigator>
   );
};



export default AppNawigator;