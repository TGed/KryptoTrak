import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ListCoin from '../components/ListCoin';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';


function ChartScreen({route}) {
    const coinId = route.params;

    const [coin, setCoin] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");

    const loadData = async () => {
        const res =  await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+coinId+"&order=market_cap_desc&per_page=1&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoin(data);
    }

    
    useEffect(() => {
        loadData();
    },[]);
    
    console.log(coin)

    return (
        <Screen style={styles.screen}>
            <View style={styles.chartContainer}>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    chartContainer:{
        bottom: 0,
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
export default ChartScreen;