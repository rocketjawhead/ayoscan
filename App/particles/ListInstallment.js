import React from 'react'

import { StyleSheet, View, Text} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'

const ListInstallment = props => (
  <View style={ styles.List }>
    <View style={{ backgroundColor:'rgba(223, 230, 233,0.4)', ...styles.wrapperDate }}>
      <Text>{ props.month }</Text>
      <Text style={ styles.txtDate }>{ props.paymentDate }</Text>
    </View>
    <View style={{flex:1, justifyContent:'center', paddingLeft:widthPercentageToDP(2)}}>
      <Text style={{fontSize:heightPercentageToDP(2), fontWeight:'400',}}>{ props.title }</Text>
      <Text style={{color:'#1836F0', fontSize:heightPercentageToDP(2.5), fontWeight:'600'}}>Rp. { formatNumber(props.amount) }</Text>
      <View style={{backgroundColor:'#74b9ff', maxWidth:widthPercentageToDP(15), alignSelf:'flex-end', marginRight:widthPercentageToDP(5), borderRadius:8, padding:2}}>
        <Text style={{textAlign:'right', marginRight:widthPercentageToDP(2), fontSize:heightPercentageToDP(1.7), fontWeight:'500', color:'#fff'}}>{props.tenor}x</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  List:{
    backgroundColor:'#fff',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius:10,
    elevation: 5,
    height:heightPercentageToDP(10),
    // paddingHorizontal:widthPercentageToDP(2),
    // paddingVertical:10,
    marginBottom:heightPercentageToDP(1),
    marginHorizontal:widthPercentageToDP(5)
  },
  wrapperDate:{
    alignItems:'center',
    justifyContent:'center',
    width:widthPercentageToDP(15),
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    // backgroundColor:'#ecf0f1'
  },
  txtDate:{
    fontSize:heightPercentageToDP(2.5),
    fontWeight:'600'
  }
})

export default ListInstallment