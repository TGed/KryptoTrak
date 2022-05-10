import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ValueFormat from '../components/ValueFormat';
import AppText from '../components/AppText';
import CoinChart from '../components/CoinChart';


function ChartScreen({route,navigation}) {
    const {coin} = route.params;

    useFocusEffect(() => {
        navigation.setOptions({title: coin.name})
    });

    return (
        <Screen style={styles.screen}>
            <CoinChart coinId={coin.id} curPrice={coin.current_price}/>
            <View style={styles.statsContainer}>
                <View>
                    <AppText style={styles.text}>Current Price : {"\n"} $ {ValueFormat(coin.current_price)}</AppText>
                    <AppText style={styles.text}>Circulating supply : {"\n"} {ValueFormat(coin.circulating_supply)}</AppText>
                    <AppText style={styles.text}>Market cap. : {"\n"} {ValueFormat(coin.market_cap)}</AppText>
                </View>
                <View>
                    <AppText style={styles.text}>All Time High : {"\n"} $ {ValueFormat(coin.ath)}</AppText>
                    <AppText style={styles.text}>All Time Low : {"\n"} {ValueFormat(coin.atl)}</AppText>
                    <AppText style={styles.text}>From ATH :</AppText>
                    <AppText style={[
                        styles.pricePercentage,
                        coin.ath_change_percentage > 0
                        ? styles.valueUp
                        : styles.valueDown,
                    ]}> 
                        {ValueFormat(coin.ath_change_percentage.toFixed(2))}%
                    </AppText>
                </View>    
            </View>
            <View style={styles.statsContainer}>
                <View>
                    <AppText style={styles.text}>Total volume : {"\n"} {ValueFormat(coin.total_volume)}</AppText>
                    <AppText style={styles.text}>Total supply : {"\n"} {ValueFormat(coin.total_supply)}</AppText>
                    <AppText style={styles.text}>Max supply : {"\n"} {ValueFormat(coin.max_supply)}</AppText>
                </View>
                <View>
                    <AppText style={styles.text}>High 24H price : {"\n"} $ {ValueFormat(coin.high_24h)}</AppText>
                    <AppText style={styles.text}>Low 24H price : {"\n"} $ {ValueFormat(coin.low_24h)}</AppText>
                    <AppText style={styles.text}>Price change :</AppText>
                    <AppText style={[
                        styles.pricePercentage,
                        coin.price_change_percentage_24h > 0
                        ? styles.valueUp
                        : styles.valueDown,
                    ]}> 
                        {ValueFormat(coin.price_change_percentage_24h.toFixed(2))}%
                    </AppText>
                </View>   
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    chartContainer:{
        bottom: 0,
        width:'100%',
        height:250,
        marginTop:50,
    },
    statsContainer:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20,

    },
    screen:{
        backgroundColor: "#121212",
        flex: 1,
    },
    text: {
        color: colors.light,
        fontWeight: "bold",
        fontSize:18,
    },
    valueUp: {
        fontWeight: "bold",
        fontSize:18,
        color: "#00B589",
    },
    valueDown: {
        fontWeight: "bold",
        fontSize:18,
        color: "#fc4422",
    },
})
export default ChartScreen;