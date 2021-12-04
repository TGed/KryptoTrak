import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';


function Screen(children) {
    return <SafeAreaView
                style={[styles.screen,style]}>
                {children}
                </SafeAreaView>
}

const styles = StyleSheet({
    screen:{
        padding: Constants.statusBarHeight,
        flex:1,
    }
})

export default Screen;