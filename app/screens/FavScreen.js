import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { db } from "../../firebase";
import {collection, getDocs, where, query } from "firebase/firestore"
import {user} from "../../firebase"
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';


const Stack = createStackNavigator();

function FavScreen(props) {
    const [favs, setFavs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const favCollectionsRef = query(collection(db,"favorites"), where("userId", "==", user.uid));

    const getFavs = async () => {
        const data = await getDocs(favCollectionsRef);
        setFavs(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    };

    useEffect(() => {
        getFavs();
    },[]);
    const favorites = Object.entries(favs).map((item) => {
        Object.
        return 
    })
    console.log(favs);


    
    return (
        <Screen style={styles.screen}>

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


export default FavScreen;