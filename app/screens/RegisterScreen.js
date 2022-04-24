import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import constants from 'expo-constants';
import * as Yup from 'yup';

import {signUp} from '../../firebase';

import {AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    confirmPassword: Yup.string().required().min(8).label("confirm Password"),
});

function RegisterScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        signUp(email,password);
    }

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
            <View style={styles.formContainer}>
                <AppForm
                    initialValues={{email:"", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage
                        error="Niepoprawny email i/lub hasło."
                        //visible={loginFailed}
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Zarejestruj" color='secondary'/>
                </AppForm>
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
    formContainer: {
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

export default RegisterScreen;