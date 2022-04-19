import React from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import constants from 'expo-constants';

import colors from '../config/colors'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.png")}
            >
            <View style={styles.logoContainer}>
                {<Entypo 
                    name="credit"
                    color='yellow'
                    size= {50}
                />}
                <Text style={styles.tagline}>KryptoTrak</Text>    
            </View>
            <View style={styles.buttonContainer}>
                <AppTextInput 
                    placeholder="email" 
                    icon="account"
                    />
                <AppTextInput placeholder="password" icon="lock" secureTextEntry/>
                <AppButton title="Loguj"/>
                <AppButton title="Zarejestruj" color="secondary"/>
            </View>
        
        
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
        padding: 10,
        width: "100%",
        marginBottom: 50
    },
    logoContainer:{
        position: 'absolute',
        top: constants.statusBarHeight,
        alignItems: 'center',
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: 'yellow'
    }
})

export default LoginScreen;