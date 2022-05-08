import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ValueFormat from '../components/ValueFormat';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


function ChartScreen({route,navigation}) {
    const {coin} = route.params;

    useFocusEffect(() => {
        navigation.setOptions({title: coin.name})
    });

    const [data, setData] = useState([]);
    // const [refreshing, setRefreshing] = useState(false);
    // const [search, setSearch] = useState("");

    // const loadData = async () => {
    //     const res =  await fetch(
    //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+coinId+"&order=market_cap_desc&per_page=1&page=1&sparkline=false"
    //     );
    //     const data = await res.json();
    //     setCoin(data);
    // }

    
    // useEffect(() => {
    //     loadData();
    // },[]);
    console.log(coin)

    return (
        <Screen style={styles.screen}>
            <View style={styles.chartContainer}>

            </View>
            <View style={styles.statsContainer}>
                <View styles={styles.nestedStatsContainer}>
                    <AppText style={styles.text}>Current Price : {"\n"} $ {ValueFormat(coin.current_price)}</AppText>
                    <AppText style={styles.text}>Circulating supply: {"\n"} {ValueFormat(coin.circulating_supply)}</AppText>
                    <AppText style={styles.text}>Market capitalization: {"\n"} {ValueFormat(coin.market_cap)}</AppText>
                </View>
                <View styles={styles.nestedStatsContainer}>
                    <AppText style={styles.text}>All Time High : {"\n"} $ {ValueFormat(coin.ath)}</AppText>
                    <AppText style={styles.text}>All Time Low: {"\n"} {ValueFormat(coin.atl)}</AppText>
                    <AppText style={styles.text}>From ATH: {"\n"} {ValueFormat(coin.ath_change_percentage.toFixed(2))}%</AppText>
                </View>    
            </View>
            <View style={styles.statsContainer}>
                <View styles={styles.nestedStatsContainer}>
                    <AppText style={styles.text}>Current Price : {"\n"} $ {coin.current_price}</AppText>
                    <AppText style={styles.text}>Circulating supply: {"\n"} {coin.circulating_supply}</AppText>
                    <AppText style={styles.text}>Market capitalization: {"\n"} {coin.market_cap}</AppText>
                </View>
                <View styles={styles.nestedStatsContainer}>
                    <AppText style={styles.text}>Current Price : {"\n"} $ {coin.current_price}</AppText>
                    <AppText style={styles.text}>Circulating supply: {"\n"} {coin.circulating_supply}</AppText>
                    <AppText style={styles.text}>Market capitalization: {"\n"} {coin.market_cap}</AppText>
                </View>   
            </View>
            <View style={styles.favButton}>
                <AppButton title={"Dodaj do ulubionych"}/> 
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    chartContainer:{
        bottom: 0,
        width:'100%',
        height:250,
        backgroundColor: "white",
        marginTop:50
    },
    statsContainer:{
        flexDirection:'row',
        marginTop:15,
        alignContent:"center",
        justifyContent:"space-evenly",
        marginLeft:5,
        marginRight:5,
    },
    nestedStatsContainer:{
        backgroundColor:"black",
    },
    favButton:{
        padding:10,
    },
    screen:{
        backgroundColor: "#121212",
        flex: 1,
    },
    text: {
        color: colors.light,
        fontWeight: "bold",
        fontSize:18,
    }
})
export default ChartScreen;