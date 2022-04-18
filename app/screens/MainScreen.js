import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ListCoin from '../components/ListCoin';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import AppText from '../components/AppText';



const menuItems = [
    {
        title: "Ethereum",
        price: "4000",
        value: "2200",
    },
    {
        title: "Bitcoin",
        price: "47450",
        value: "10000",
        
    },
    {
        title: "Binance Coin",
        price: "430",
        value: "1200",
        
    }
]

function MainScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.headers}>
            <AppText style={styles.text}>Nazwa</AppText>
                <AppText style={styles.text}>Cena</AppText>
                <AppText style={styles.text}>Wartość</AppText>
            </View>
            <View style={styles.text}>
                <View style={styles.text}>
                    <AppText>Obraz</AppText>
                    <View style={styles.text}>
                        <AppText>nazwa</AppText>
                        <AppText>symbol</AppText>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    addButton:{
        bottom: 0,
    },
    coinContainer:{
        backgroundColor: colors.black,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        
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