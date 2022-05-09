import React from 'react';
import { View, StyleSheet, Alert, Modal} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import { auth, user } from '../../firebase';
import { signOut, deleteUser } from 'firebase/auth';
import AppText from '../components/AppText';

const menuItems = [
    // {
    //     title: "Moje ustawienia",
    //     icon: {
    //         name: "format-list-bulleted", 
    //         backgroundColor : colors.secondary
    //     }
    // },
    {
        title: "Zmień hasło",
        icon: {
            name: "lock", 
            backgroundColor : "blue"
        }
    },
    {
        title: "Usuń konto",
        icon: {
            name: "delete", 
            backgroundColor : colors.danger
        }
    },
    {
        title: "Wyloguj",
        icon: {
            name: "logout" ,
            backgroundColor: "#ffe66d"
        },
        // onPress: {handleLogOut}
    }
]



function SettingsScreen(props) {
    const handleLogOut = () => {
        signOut(auth);
    }

    const deleteAccount = () => {
        return (
            <Modal
              animationType="slide"
              transparent={true}
              onBackdropPress={() => console.log('Pressed')}
              visible={props.modalVisible}
              >
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: '#4D4D4D',
                  width: (500),
                  height: (500)
                }}>
                
          
              </View>
            </Modal>
          );
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
                ImageComponent={ <Icon name="lock" backgroundColor="blue"
                /> 
                }
                // onPress={handlePasswordChange}
            />
            <ListItemSeparatorComponent/>
            <ListItem
                title="Delete account"
                ImageComponent={ <Icon name="delete" backgroundColor="red"
                /> 
                }
                onPress={deleteAccount}
            />
            <ListItemSeparatorComponent/>
            <ListItem
                title="Log out"
                ImageComponent={ <Icon name="logout" backgroundColor="#ffe66d"
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
        backgroundColor: "#121212"
    }
})
export default SettingsScreen;