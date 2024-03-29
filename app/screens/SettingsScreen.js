import React from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import { auth } from '../../firebase';
import { signOut, deleteUser } from 'firebase/auth';
import AppText from '../components/AppText';
import routes from '../navi/routes';



function SettingsScreen() {

    const navigation = useNavigation();

    const user = auth.currentUser;

    const handleLogOut = () => {
        signOut(auth);
    }
    
    const handleDelete = () => {
        Alert.alert(
            "Deleting Account",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => deleteUser(auth)
                    
                }
            ]
        );
    }

    return (
        <Screen style={styles.screen}>
            
            <View style={styles.headerContainer}> 
                <AppText style={styles.header}>
                    Email : {user ? user.email:"unknown user"}
                </AppText>
            </View>
            <ListItemSeparatorComponent/>
            <ListItem
                title="Change password"
                ImageComponent={ <Icon name="lock" backgroundColor="#09b858"
                /> 
                }
                onPress={() => navigation.navigate(routes.RESET)}
            />
            <ListItemSeparatorComponent/>
            <ListItem
                title="Change email"
                ImageComponent={ <Icon name="email" backgroundColor="blue"
                /> 
                }
                onPress={() => navigation.navigate(routes.EMAIL)}
            />
            <ListItemSeparatorComponent/>
            <ListItem
                title="Delete account"
                ImageComponent={ <Icon name="delete" backgroundColor="#1fb6d1"
                /> 
                }
                onPress={() => navigation.navigate(routes.DELETE)}
            />
            <ListItemSeparatorComponent/>
            <ListItem
                title="Log out"
                ImageComponent={ <Icon name="logout" backgroundColor="#d11f55"
                /> 
                }
                onPress={handleLogOut}
            />
            <ListItemSeparatorComponent/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    header:{
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center"
    },
    headerContainer: {
        padding:10,
    },
    screen: {
        backgroundColor: "#121212",
        flex: 1,
    }
})
export default SettingsScreen;