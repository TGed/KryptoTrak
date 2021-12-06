import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "Moje ustawienia",
        icon: {
            name: "format-list-bulleted", 
            backgroundColor : colors.secondary
        }
    },
    {
        title: "Typ Waluty",
        icon: {
            name: "wallet", 
            backgroundColor : "blue"
        }
    },
    {
        title: "Usuń konto",
        icon: {
            name: "delete", 
            backgroundColor : colors.danger
        }
    }
]

function AccScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}> 
                <ListItem
                    title="Moje imie"
                    subTitle="costam@gmail.com"
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor = {menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                                />                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Wyloguj"
                ImageComponent={ <Icon name="logout" backgroundColor="#ffe66d"/> 
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        backgroundColor: colors.black
    },
    screen: {
        backgroundColor: "#16023d"
    }
})
export default AccScreen;