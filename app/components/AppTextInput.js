import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles';

function AppTextInput({icon, backgroundColor=defaultStyles.colors.light, width="100%" , ...otherProps}) {
  return (
        <View 
            style={[styles.container,
            { backgroundColor: backgroundColor}, 
            {width}]}
        >
            {icon && (
                <MaterialCommunityIcons 
                name={icon} 
                size={20} 
                color={defaultStyles.colors.medium} 
                style={styles.icon}
                />
            )}
            <TextInput 
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text} 
            {...otherProps}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon : {
        marginRight: 10,
    }
})

export default AppTextInput;