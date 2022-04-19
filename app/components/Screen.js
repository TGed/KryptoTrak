import React from 'react';
import constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({children,style}) {
    return  <SafeAreaView 
                style={[styles.screen, style]}>
                {children}
            </SafeAreaView>
    
}

const styles = StyleSheet.create({
    screen:{
        padding: constants.statusBarHeight,
        flex: 1,
    },
})

export default Screen;