import React from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'

import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { URL_API_BLOG_ASSETS } from '../env'
const ListTrx = props => (
  <TouchableOpacity onPress={props.DetailTrx}>
  <View style={{marginHorizontal:widthPercentageToDP(1),marginTop:heightPercentageToDP(1)}}>
    <View style={ styles.WrapperHistory }>
        <View style={{flexDirection:'row'}}>
          
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.boxIcon}>
            <Image source={{uri: URL_API_BLOG_ASSETS+props.imageurl}} style={ styles.iconAction } />
            </View>
            
          </View>

          <View style={{flex:0.5,justifyContent:'center',marginRight:widthPercentageToDP(2)}}>
          {props.trxType == '4' ?
            <Text style={ styles.txtTitleHistory }>{props.title} Ke {props.nama_rekening} ({props.nama_bank})</Text>
            :props.trxType == '3' ?
            <Text style={ styles.txtTitleHistory }>{props.title} {props.judul_kategori.toUpperCase()}</Text>
            :
            <Text style={ styles.txtTitleHistory }>{props.title }</Text>
            }
            <Text style={ styles.txtTime }>{ props.getDate } { props.getMonth } { props.getYear }</Text>
          </View>

          <View style={{flex:0.3,justifyContent:'center',marginRight:widthPercentageToDP(2)}}>
          { props.trxType == '1' ?
              <>
              <Text style={ styles.txtAmountIn }>Rp { formatNumber(props.amount)}</Text>
              <Text style={ styles.txtWallet }>{props.wallet.toUpperCase()}</Text>
              </>
              :
              <>
              <Text style={ styles.txtAmountOut }>-Rp { formatNumber(props.amount)}</Text>
              <Text style={ styles.txtWallet }>{props.wallet.toUpperCase()}</Text>
              </>
            }
          </View>

        </View>
    
    </View>
  </View>
  {/* hr */}
  <View style={{backgroundColor:'#F2F2F2',marginLeft:heightPercentageToDP(2),marginRight:heightPercentageToDP(2),
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
    marginRight:widthPercentageToDP(1), 
    fontSize:heightPercentageToDP(2), 
    textAlign:'right', 
    fontWeight:'bold', 
    color:'#29BF76'
  },
  txtWallet:{
    marginRight:widthPercentageToDP(1), 
    fontSize:heightPercentageToDP(1.5), 
    textAlign:'right', 
    fontWeight:'bold', 
    color:'#77869E'
  },
})

export default ListTrx