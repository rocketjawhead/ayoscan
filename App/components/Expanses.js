import React from 'react'

import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { StackedAreaChart, Grid, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

import ExportImg from '../assets/images/Export.png'
import { ScrollView } from 'react-native-gesture-handler'

const Expanses = props => (
  <SafeAreaView style={{backgroundColor:'#F8F9F9'}}>
    <View style={styles.container}>

      <View style={ styles.wrapperHeader }>
        <View style={{flex: 1}}>
          <Text style={ styles.title }>Expenses</Text>            
        </View>
        <View style={{flex: 1}}>
          <Image source={ExportImg} style={ styles.expImage } />
        </View>
      </View>

      <View style={ styles.mainWrapper }>
        <View style={{flex: 1}}>
          <Text style={ styles.cardBalance }>Card Balance</Text>
          <Text style={ styles.txtAmount }>Rp. 100.000</Text>        
        </View>
        <View style={{flex: 1}}>
          <View style={ styles.ContentIncome }>
            <Image source={Up} style={ styles.imgIncome }/>
            <Text style={ styles.txtIncome }>Rp. 2.500</Text>
          </View>
          <View style={ styles.ContentOutcome }>
            <Image source={Down} style={ styles.imgIncome }/>
            <Text style={ styles.txtOutcome }>Rp. 2.500</Text>
          </View>
        </View>
      </View>

      <View>

      <ScrollView horizontal={true}>
        <LineChart
          data={props.data}
          width={widthPercentageToDP(100)}
          height={220}
          chartConfig={props.chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          verticalLabelRotation={-90}
        />
      </ScrollView>

      </View>

    </View>
    
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5), 
    backgroundColor:'#F8F9F9'
  },
  wrapperHeader:{
    flexDirection: 'row', 
    marginTop:heightPercentageToDP(2)
  },
  title:{
    fontFamily:'Avenir', 
    fontWeight:'600', 
    fontSize:heightPercentageToDP(2.8), 
    color:'#042C5C'
  },
  expImage:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(7), 
    marginRight:0, 
    resizeMode:'contain', 
    alignSelf:'flex-end'
  },
  mainWrapper:{
    flexDirection: 'row', 
    marginTop:heightPercentageToDP(2)
  },
  cardBalance:{
    fontFamily:'Avenir', 
    fontWeight:'600', 
    fontSize:heightPercentageToDP(2), 
    color:'#77869E'
  },
  txtAmount:{
    fontFamily:'Avenir', 
    fontWeight:'600', 
    fontSize:heightPercentageToDP(2.8), 
    color:'#042C5C'
  },
  ContentIncome:{
    flexDirection:'row', 
    flex:1, 
    justifyContent:'flex-end'
  },
  imgIncome:{
    marginRight:widthPercentageToDP(2), 
    width:widthPercentageToDP(5), 
    height:widthPercentageToDP(5)
  },
  txtIncome:{
    color:'#1BC773', 
    textAlign:'right'
  },
  ContentOutcome:{
    flexDirection:'row', 
    flex:1, 
    justifyContent:'flex-end'
  },
  txtOutcome:{
    color:'#F24750', 
    textAlign:'right'
  }
})

export default Expanses 