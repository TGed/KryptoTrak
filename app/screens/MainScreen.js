import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function MainScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.walletContainer}>
            </View>
            <View style={styles.headers}>
                <AppText style={styles.text}>Waluta</AppText>
                <AppText style={styles.text}>Cena</AppText>
                <AppText style={styles.text}>Wartość</AppText>
            </View>
            <View style={styles.addButton}>
            <AppButton title="Dodaj" color="secondary"></AppButton>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    addButton:{
        bottom: 0,
    },
    walletContainer:{
        backgroundColor:"#4d078a",
        width: '95%',
        alignSelf:'center',
        height: 100,
        borderRadius: 35,
        marginBottom: 20,
    },
    coinContainer:{

    },
    headers:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontWeight: "600",

    },
    screen:{
        backgroundColor: "#16023d",
        flex: 1,
    },
    text: {
        color: colors.white,
        fontWeight: "bold"

    }
})
export default MainScreen;