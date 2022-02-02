import React from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'

import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { URL_API_BLOG_ASSETS } from '../env'
const ListRedeemPoin = props => (
  <TouchableOpacity>
  <View style={{marginHorizontal:widthPercentageToDP(1),marginTop:heightPercentageToDP(1)}}>
    <View style={ styles.WrapperHistory }>
        <View style={{flexDirection:'row'}}>
          

          <View style={{flex:0.7,justifyContent:'center',marginRight:widthPercentageToDP(2)}}>
            <Text style={ styles.txtTitleHistory }>{props.title }</Text>
            <Text style={ styles.txtTime }>{ props.getDate } { props.getMonth } { props.getYear }</Text>
          </View>

          <View style={{flex:0.3,justifyContent:'center',marginRight:widthPercentageToDP(2)}}>
          
              { props.debit_poin == 0 ?
              <>
              {/* kredit */}
              <Text style={ styles.txtAmountIn }>{ formatNumber(props.credit_poin)} Poin</Text>
              <View style={{backgroundColor:props.status == 1 ? '#82de3a' : '#fbcc38',height:heightPercentageToDP(3),borderRadius:50,width:'80%',
              alignSelf:'center'}}>
              <Text style={ styles.txtWallet }>{props.status == 1 ? 'Selesai' : 'Proses '}</Text>
              </View>
              </>
              :
              <>
              {/* debit */}
              <Text style={ styles.txtAmountOut }>-{ formatNumber(props.debit_poin)} Poin</Text>
              <View style={{backgroundColor:props.status == 1 ? '#82de3a' : '#fbcc38',height:heightPercentageToDP(3),borderRadius:50,width:'80%',
              alignSelf:'flex-end'}}>
              <Text style={ styles.txtWallet }>{props.status == 1 ? 'Selesai' : 'Proses '}</Text>
              </View>
              
              </>
              }
              
            
              
          </View>

        </View>
    
    </View>
  </View>
  {/* hr */}
  <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(2),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  WrapperHistory:{
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 2,
    // backgroundColor:'#fff',
    // height:heightPercentageToDP(9),
    // // marginTop:heightPercentageToDP(1),
    // borderRadius:heightPercentageToDP(1),
    // alignItems:'center',
    // flexDirection:'row',
    // paddingHorizontal:heightPercentageToDP(0.5)
  },
  iconAction:{
    width:widthPercentageToDP(7), 
    height:widthPercentageToDP(7), 
    resizeMode:'contain', 
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginLeft:widthPercentageToDP(3.5),
    marginRight:widthPercentageToDP(3.5),
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2),
    
  },
  boxIcon:{
    // marginLeft:widthPercentageToDP(2.5),
    // marginRight:widthPercentageToDP(2.5),
    borderRadius:50,
    backgroundColor:'#fff',
    shadowColor: "#666",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  imgHistory:{
    width:heightPercentageToDP(6), 
    height:heightPercentageToDP(6),
    marginBottom:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(2)
  },
  txtTitleHistory:{
    color:'#464646', 
    fontSize:heightPercentageToDP(2), 
    fontWeight:'bold',
    marginLeft:widthPercentageToDP(2)
  },
  txtTime:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.5),
    marginLeft:widthPercentageToDP(2)
  },
  txtAmountOut:{
    marginRight:widthPercentageToDP(1), 
    fontSize:heightPercentageToDP(2), 
    textAlign:'right', 
    fontWeight:'bold', 
    color:'#EE5A55'
  },
  txtAmountIn:{ 
    fontSize:heightPercentageToDP(2), 
    textAlign:'center', 
    fontWeight:'bold', 
    color:'#29BF76'
  },
  txtWallet:{
    fontSize:heightPercentageToDP(2), 
    textAlign:'center', 
    fontWeight:'bold', 
    color:'#fff',
  },
})

export default ListRedeemPoin