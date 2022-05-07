import React from 'react';
import { View,TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

function Icon({
    type,
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
    onPress,
    ...otherProps
}) {
    return (
        <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
            <View style={{
                width: size,
                height: size,
                borderRadius: size /2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                ...otherProps
            }}>
                {<MaterialCommunityIcons 
                    name={name} 
                    color={iconColor} 
                    size={size * 0.5}
                />}

            </View>
        </TouchableHighlight>
    );
}

export default Icon;