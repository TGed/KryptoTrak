import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import CoinItem from '../components/CoinItem';
import AppButton from '../components/AppButton';

function MainScreen({}) {
    const [coins, setCoins] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const loadData = async () => {
        const res =  await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page="+page+"&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
    }

    const handleIncrement = () => {
        const newPage = page+1;
        setPage(newPage)
    }

    const handleDecrement = () => {
        const newPage = page-1;
        if (page > 0) {
            setPage(newPage);
        }
    }



    useEffect(() => {
        loadData();
    },[page]);



    return (
        <Screen style={styles.screen}>
            <AppTextInput
                autoCapitalize="none"
                icon="magnify" 
                style={styles.searchCoin}
                backgroundColor="#121212"
                autoCorrect={false}
                placeholder= "Search cryptocurrency"
                onChangeText={(text) => setSearch(text)}
                extraData={coins}
            />

            <FlatList
                data={coins.filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                        coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                )}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({ item }) => 
                        <CoinItem coin={item}/>
                }
                refreshing={refreshing}
                onRefresh={async () => {
                    setRefreshing(true);
                    await loadData();
                    setRefreshing(false);
                }}
                extraData={coins}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.previousButton}>
                    {page <= 1 
                        ?   <AppButton 
                                title="Previous" 
                                color='5c5b5b' 
                                textColor='7a7979'
                                disabled='true'
                            />
                        :   <AppButton
                                title="Previous" 
                                color='5c5b5b'
                                onPress={handleDecrement} 
                            />
                    }
                </View>
                <View style={styles.nextButton}>
                    <AppButton 
                        title="next"  
                        color='5c5b5b'
                        onPress={handleIncrement}
                    />
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
    buttonsContainer:{
        flexDirection:"row",
    },
    previousButton:{
        width:"50%",
    },
    nextButton:{
        width:"50%"
    },
    walletContainer:{
        backgroundColor:"#4d078a",
        width: '95%',
        alignSelf:'center',
        height: 100,
        borderRadius: 35,
        marginBottom: 20,
    },
    searchCoin:{
        width:"80%",
        textAlign:"center",
        color:colors.light,
    },
    headers:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:65,
        marginRight:70,
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