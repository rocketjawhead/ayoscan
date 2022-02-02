import React from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'

import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'

const ListHistory = props => (
  <TouchableOpacity onPress={ props.DetailTrx }>
  <View style={{marginHorizontal:widthPercentageToDP(5)}}>
    
    <View style={ styles.WrapperHistory }>
      {/* <Text>{props.ewalletcode}</Text> */}
      <Image source={ props.ewalletcode == props.creditAccount ? Up : Down } style={ styles.imgHistory } />
      <View style={{marginLeft:widthPercentageToDP(1)}}>
      { props.ewalletcode == props.creditAccount ?
        <Text style={ styles.txtTitleHistory }>{ props.fromTrx }</Text>:
        <Text style={ styles.txtTitleHistory }>{ props.toTrx }</Text>
      }
        <Text style={ styles.txtTime }>{ props.trxDate }</Text>
      </View>
      <View style={{flex:1}}>
        { props.ewalletcode == props.creditAccount ?
          <Text style={ styles.txtAmountIn }>Rp { formatNumber(props.amount)}</Text>:
          <Text style={ styles.txtAmountOut }>-Rp { formatNumber(props.amount)}</Text>
        }
      </View>
    </View>
    
  </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  WrapperHistory:{
    shadowColor: "#000",
    backgroundColor:'#fff',
    height:heightPercentageToDP(7),
    marginTop:heightPercentageToDP(1),
    borderRadius:heightPercentageToDP(1),
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:heightPercentageToDP(0.5)
  },
  imgHistory:{
    width:heightPercentageToDP(6), 
    height:heightPercentageToDP(6)
  },
  txtTitleHistory:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(2.5), 
    fontWeight:'400'
  },
  txtTime:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(2)
  },
  txtAmountOut:{
    marginRight:widthPercentageToDP(1), 
    fontSize:heightPercentageToDP(2), 
    textAlign:'right', 
    fontWeight:'600', 
    color:'#EE5A55'
  },
  txtAmountIn:{
    marginRight:widthPercentageToDP(1), 
    fontSize:heightPercentageToDP(2), 
    textAlign:'right', 
    fontWeight:'600', 
    color:'#29BF76'
  },
})

export default ListHistory