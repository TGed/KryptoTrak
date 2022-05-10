import React from 'react';
import {
    Text, 
    View, 
    ImageBackground, 
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import constants from 'expo-constants';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {signUp} from '../../firebase';

import {AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import routes from '../navi/routes';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'),null], "Password must match"),
});

function RegisterScreen() {

    const navigation = useNavigation();

    const handleSubmit = ({email, password}) => {
        signUp(email,password);
        console.log("rejestrowanie")
        navigation.navigate(routes.LOGIN)
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
                <KeyboardAvoidingView 
                    behavior='position'
                    keyboardVerticalOffset={Platform.OS == "ios" ? 0:0 }
                >
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
                            placeholder="Password"
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
                        <SubmitButton title="Register Account" color='secondary'/>
                    </AppForm>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        padding: 10,
        width: "100%",
        height: "100%",
        justifyContent:"center",
        marginBottom: 50,
        backgroundColor:"transparent"
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