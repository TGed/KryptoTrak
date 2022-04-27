import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "./Icon";
import ListItemSeparator from "./ListItemSeparator";

const CoinItem = ({ coin }) => (
<>
<View style={styles.containerItem}>
    <View style={styles.coinName}>
        <Text style={styles.marketRank}>{coin.market_cap_rank}</Text>
        <Image source={{ uri: coin.image }} style={styles.image} />
        <View style={styles.containerNames}>
            <Text style={styles.text}>{coin.name}</Text>
            <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
        </View>
    <View style={styles.coinName}>
        <View>   
            <Text style={styles.textPrice}>${coin.current_price}</Text>
            <Text
                style={[
                styles.pricePercentage,
                coin.price_change_percentage_24h > 0
                    ? styles.priceUp
                    : styles.priceDown,
                ]}
            >
                {coin.price_change_percentage_24h.toFixed(2)}%
            </Text>
        </View>
        <View style={styles.icon} >
        <Icon name="star" style={styles.icon}/> 
        </View>
    </View>
</View>
<ListItemSeparator/>
</>

);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  marketRank: {
    color: "#fff",
    alignItems: "center",
    fontSize: 25,
    marginRight:5,
    marginLeft: 2,
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  icon: {
    margin:1,
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;