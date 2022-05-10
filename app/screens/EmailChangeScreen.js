import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import constants from 'expo-constants';
import * as Yup from 'yup';

import {changeEmail, signUp} from '../../firebase';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    newemail: Yup.string().required().email().label("New email"),
});

function EmailChangeScreen(props) {

    const handleSubmit = async ({newemail}) => {
        changeEmail(newemail);
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.formContainer}>
                <AppText style={styles.text}>
                    Confirm your informations
                </AppText>
                <AppForm
                    initialValues={{email:"", password: "", newemail: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
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
                    <AppText style={styles.text}>
                        Enter new email address
                    </AppText>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="newemail"
                        placeholder="New email"
                    />
                    <SubmitButton title="Change Email" color='secondary'/>
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

export default EmailChangeScreen;