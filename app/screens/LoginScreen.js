import React from 'react';
import {
    Text, 
    View, 
    ImageBackground, 
    StyleSheet,
    Platform, 
    KeyboardAvoidingView 
} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import constants from 'expo-constants';
import * as Yup from 'yup';

import {logIn} from '../../firebase';

import routes from '../navi/routes';
import AppButton from '../components/AppButton';
import {AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
});


function LoginScreen({ navigation }) {
    
    const handleSubmit = ({email,password}) => {
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
                    <KeyboardAvoidingView 
                        behavior='position'
                        keyboardVerticalOffset={Platform.OS == "ios" ? 0:-300 }
                    >
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
                        <SubmitButton title="Login" color='secondary'/>
                    </AppForm>
                    <AppButton 
                        title="Register Account"
                        onPress={() => navigation.navigate(routes.REGISTER)}
                    />
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

export default LoginScreen;