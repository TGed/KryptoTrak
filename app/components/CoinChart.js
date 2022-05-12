import React, { useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native'
import { VictoryLine,VictoryChart } from "victory-native";


function CoinChart({coinId}) {
   const [marketData, setMarketData] = useState([]);

   const charTheme = {
      axis: {
         style: {
            tickLabels: {
               fill: 'white',
            }
         }
      }
   };
   
   const getData = async () => {
     const res =  await fetch(
           "https://api.coingecko.com/api/v3/coins/"+coinId+"/market_chart?vs_currency=usd&days=90&interval=daily"
      );
      const data = await res.json();
      const formatData = data.prices.map(function(i) {
         return{
            x: new Date(i[0]),
            y:i[1]
         }
      })
      setMarketData(formatData);
   }

   useEffect(() => {
      getData();
   },[]);

   return (
         <VictoryChart theme={charTheme}>
            <VictoryLine
               style={{
                  data: {
                     stroke: "white",
                     strokeWidth:2,

                  },
               }}
               data={marketData}
            />
         </VictoryChart>
   )



}

const styles = StyleSheet.create({
   container: {}
});

export default CoinChart;