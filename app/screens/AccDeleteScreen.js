import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import constants from 'expo-constants';
import * as Yup from 'yup';

import {signUp} from '../../firebase';

import Screen from '../components/Screen';
import {AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    confirmPassword: Yup.string().required().min(8).label("confirm Password"),
});

function AccDeleteScreen(props) {

    const handleSubmit = async ({email, password}) => {
        signUp(email,password);
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.formContainer}>
                <AppText style={styles.text}>
                    Confirm your informations
                </AppText>
                <AppForm
                    initialValues={{email:"", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage
                        error="Niepoprawny email i/lub hasło."
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
                        placeholder="Old password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Delete Account" color='secondary'/>
                </AppForm>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
        width: "100%",
        marginBottom: 50,
        alignSelf:"flex-end"
    },
    screen: {
        backgroundColor: "#121212",
        justifyContent:"center"
    },
    text:{
        color:"white",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:17,

    }
})

export default AccDeleteScreen;