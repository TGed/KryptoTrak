import React from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'

import colors from '../config/colors'
import AppButton from '../components/AppButton'

function RegisterScreen(props) {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.png")}
            >
          
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: 'yellow'
    }
})

export default RegisterScreen;