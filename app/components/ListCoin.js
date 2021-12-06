import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight, ImageComponent } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/colors';

function ListCoin({
            title, 
            price, 
            value, 
            ImageComponent : IconComponent, 
            onPress, 
            renderRightActions,
        }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
            underlayColor={colors.light} 
            onPress={onPress}
            >
                <View style={styles.container}>
                    <AppText style={styles.title}>{title}</AppText>
                    {price && <AppText style={styles.title}>{price}</AppText>}
                    {value && <AppText style={styles.title}>{value}</AppText>}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#5026a3",
        justifyContent: 'space-between'
    },
    detailsContainer:{
        marginLeft: 10,
        justifyContent: 'center',
    },
    image:{
        width:70,
        height: 70,
        borderRadius: 35,
    },
    subTitle:{
        color: colors.black,
    },
    title:{
        fontWeight: "500",
    }
})

export default ListCoin;