import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight, ImageComponent } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/colors';
import { render } from 'react-dom';

function ListItem({
            title, 
            subTitle, 
            image, 
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
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#5026a3"
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

export default ListItem;