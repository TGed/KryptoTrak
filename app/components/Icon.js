import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({
    type,
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
    ...otherProps
}) {
    return (
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
    );
}

export default Icon;