import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import constants from 'expo-constants';
import * as Yup from 'yup';

import {auth, logIn} from '../../firebase';

import AppButton from '../components/AppButton'
import {AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        auth
        .signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Zalogowany:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleSubmit1 = ({email,password}) => {
        logIn(email,password);
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
                    onSubmit={handleSubmit1}
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
                    <SubmitButton title="Login" color='secondary'/>
                </AppForm>
                <AppButton title="Zarejestruj"/>
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

export default LoginScreen;