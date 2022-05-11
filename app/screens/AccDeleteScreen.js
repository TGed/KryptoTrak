import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import {deleteAccount} from '../../firebase';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
});

function AccDeleteScreen(props) {

    const handleSubmit = ({password}) => {
        deleteAccount(password);
    }


    return (
        <Screen style={styles.screen}>
            <View style={styles.formContainer}>
                <KeyboardAvoidingView 
                    behavior='position'
                    keyboardVerticalOffset={Platform.OS == "ios" ? 70:0 }
                >
                    <AppText style={styles.text}>
                        Confirm your informations
                    </AppText>
                    <AppForm
                        initialValues={{email:"", password: "" }}
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
                        <SubmitButton title="Delete Account" color='secondary'/>
                    </AppForm>
                </KeyboardAvoidingView>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
        width: "100%",
        height: Platform.OS == "ios" ? "100%":null ,
        justifyContent:"center",
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