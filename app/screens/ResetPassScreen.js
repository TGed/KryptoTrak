import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, } from 'react-native';
import * as Yup from 'yup';

import {changePassword} from '../../firebase';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    newpassword: Yup.string().required().min(8).label("New Password"),
    confirmpassword: Yup.string().oneOf([Yup.ref('newpassword'),null], "Password must match"),
});

function ResetPassScreen(props) {

    const handleSubmit = ({password, newpassword}) => {
        changePassword(password,newpassword);
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.formContainer}>
                <KeyboardAvoidingView 
                    behavior='position'
                    keyboardVerticalOffset={Platform.OS == "ios" ? 50:-100 }
                >
                    <AppText style={styles.text}>
                        Confirm your informations
                    </AppText>
                    <AppForm
                        initialValues={{email:"", password: "", newpassword:"",confirmpassword:"" }}
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
                            placeholder="Old password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppText style={styles.text}>
                            Create new password
                        </AppText>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="newpassword"
                            placeholder="New password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="confirmpassword"
                            placeholder="Confirm password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="Change Password" color='secondary'/>
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

export default ResetPassScreen;