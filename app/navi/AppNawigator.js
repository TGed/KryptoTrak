import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import MainNavigator from './MainNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import FavScreen from '../screens/FavScreen';
import ChartScreen from '../screens/ChartScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNawigator = () => {
   return (
       <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: "#121212"
                },
                headerShown:false,
                tabBarInactiveBackgroundColor:"#121212",
                tabBarActiveBackgroundColor:"#121212"
            }}
        >
                <Tab.Screen 
                    name="Home"
                    component={MainNavigator}
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
                {/* <Tab.Screen
                    name="Favorites"
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
                /> */}
                <Tab.Screen
                    name="Settings"
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