import React from 'react';
import { View, StyleSheet } from 'react-native'
import * as shape from 'd3-shape';
import {Defs, LinearGradient, Stop, Path } from 'react-native-svg'
import {AreaChart, Grid, Yaxis, XAxis} from 'react-native-svg-charts'

function CoinChart({coinId, selectedTimeFrame}) {
   const handleTimeFrame = (selectedTimeFrame) => {
      switch (selectedTimeFrame) {
         case 0:
            return 'vs_currency=usd&days=1&interval=hourly';
         case 1:
            return 'vs_currency=usd&days=7&interval=daily';
         case 2:
            return 'vs_currency=usd&days=30&interval=daily';
         default:
            return 'vs_currency=usd&days=30&interval=daily';
      }
   };

   const renderChart = () => {
      <YAxis
      />
   }


   return (
       renderChart()
   );
}

const styles = StyleSheet.create({
   container: {}
});

export default CoinChart;