import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import CoinItem from '../components/CoinItem';

function MainScreen(props) {
    const [coins, setCoins] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");

    const loadData = async () => {
        const res =  await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
    }

    useEffect(() => {
        loadData();
    },[]);

    // console.log(coins);

    return (
        <Screen style={styles.screen}>
            <View style={styles.headers}>
            <AppText style={styles.text}>Nazwa</AppText>
            <AppText style={styles.text}>Cena</AppText>
            </View>
            <FlatList
                data={coins.filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                        coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                )}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CoinItem coin={item}/>}
                refreshing={refreshing}
                onRefresh={async () => {
                    setRefreshing(true);
                    await loadData();
                    setRefreshing(false);
                }}
            />
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
        backgroundColor: "#121212",
        flex: 1,
    },
    text: {
        color: colors.white,
        fontWeight: "bold"

    }
})
export default MainScreen;