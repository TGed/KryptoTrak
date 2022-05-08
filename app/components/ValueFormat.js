import React from 'react';
import { View, StyleSheet } from 'react-native'

function ValueFormat(value) {
    if (value < 1e3) return value;
    if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(2) + ' K';
    if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(2) + ' M';
    if (value >= 1e9 && value < 1e12) return +(value / 1e9).toFixed(2) + ' B';
    if (value >= 1e12) return +(value / 1e12).toFixed(2) + ' T';
}


export default ValueFormat;