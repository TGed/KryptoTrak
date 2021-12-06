import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListCoin from '../components/ListCoin';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

let data = await CoinGeckoClient.ping();


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
            <View style={styles.walletContainer}>
            </View>
            <View style={styles.headers}>
                <AppText style={styles.text}>Waluta</AppText>
                <AppText style={styles.text}>Cena</AppText>
                <AppText style={styles.text}>Wartość</AppText>
            </View>
            <View style={styles.coinContainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor = {menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item}) => 
                        <ListCoin
                            title={item.title}
                            price={item.price}
                            value={item.value}
                            
                        />
                    }
                />
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
    coinContainer:{
        marginVertical: 20,
        backgroundColor: colors.blackss
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