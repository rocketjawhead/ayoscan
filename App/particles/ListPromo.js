import React from 'react'

import { StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import { ScrollView } from 'react-native-gesture-handler'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'

import { URL_API_PROMO_ASSETS } from '../env'
const ListPromo = props => (
  <TouchableOpacity onPress={ props.toDetailPromo}>
    <View style={styles.box}>
        <View style={styles.cssViewHeader}>
            <Image source={{ uri: URL_API_PROMO_ASSETS+props.gambar }}  style= {{
              flex:1 , resizeMode: 'stretch',
              width: undefined,
              height: undefined,
              borderTopLeftRadius:5,
              borderTopRightRadius:5
              }}/>
        </View>
        <Text style={
          {fontSize:heightPercentageToDP(2),
          marginTop:widthPercentageToDP(1),
          fontFamily:'Avenir',
          textAlign:'justify',
          color:'#666',
          marginLeft:widthPercentageToDP(2),
          marginRight:widthPercentageToDP(2)
          }}>{props.title}</Text>

        <View style={{borderRadius:10,
          marginTop:heightPercentageToDP(1),
          marginLeft:widthPercentageToDP(1),
          marginRight:widthPercentageToDP(1),
          marginBottom:heightPercentageToDP(1)
          }}>
            {/* <TouchableOpacity style={  styles.btnLogin }>
              <Text style={ styles.txtLogin }>Cek Promo</Text>
            </TouchableOpacity> */}
          </View>
        </View>
  
  
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  cssViewHeader:{
    // backgroundColor:'#fff',
    height:widthPercentageToDP(60),
    width:widthPercentageToDP(90),
    borderRadius:5,
    
  },
  box:{
    borderRadius:5,
    backgroundColor:'#fff',
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    elevation: 6,
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
    width:widthPercentageToDP(90),
    marginBottom:heightPercentageToDP(2)
    // marginBottom:heightPercentageToDP(2),
    // marginTop:heightPercentageToDP(2)
  },
  cssScroll:{
    flexDirection:'row', 
    marginBottom:10
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
  },
  imgIncome:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(10), 
    resizeMode:'contain', 
    marginRight:widthPercentageToDP(2.5)
  },
  wrapperIncome:{
    marginRight:widthPercentageToDP(5), 
    flexDirection:'row', 
    marginTop:heightPercentageToDP(2)
  },
})

export default ListPromo