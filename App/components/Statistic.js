import React from 'react'

import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList, Vibration } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { formatNumber } from 'accounting'
import pencil from '../assets/images/pencil.png'
import { URL_API_BLOG_ASSETS } from '../env'
import DatePicker from 'react-native-datepicker'
import colors from '../assets/colors';
import Loading from '../modals/Loading' 

const Statistic = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
  <ScrollView vertical={true}>
    <View style={{flexDirection:'row'} }>
      <View style={{flex:0.8}}>
        <Text style={ styles.txtEmail }>Total Transaksi 2020</Text>
      </View>
      <View style={{flex:0.2}}>
      <IconAnt name="close" style={ styles.iconBack } onPress={props.goBack}/>
      </View>
    </View>


  </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  iconBack:{
    fontSize:heightPercentageToDP(4),
    marginTop:heightPercentageToDP(2),
    color:'#3827B4',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5)
  },
  
})

export default Statistic