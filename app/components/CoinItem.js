import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

import routes from "../navi/routes";
import Icon from "./Icon";
import ListItemSeparator from "./ListItemSeparator";

function CoinItem ({ coin }) {
const navigation = useNavigation();

return (
<>
  <TouchableHighlight onPress={() => navigation.navigate(routes.CHARTS, {coin})}>
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
                    {coin.price_change_percentage_24h != null && coin.price_change_percentage_24h.toFixed(2)}%
                </Text>
            </View>
            <View style={styles.isFavIcon} >
            <Icon 
              name="star"
              onPress={()=>(console.log(coin.name))}
            /> 
            </View>
        </View>
    </View>
  </TouchableHighlight>
  <ListItemSeparator/>
</>


)};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center",
    alignItems:"center",
    paddingBottom:5,
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
    marginRight:15,
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
  isFavIcon: {
    marginLeft:10,
    borderRadius:5
  },
  isNotFavIcon:{

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