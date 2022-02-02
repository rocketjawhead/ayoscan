import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList,RefreshControl,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import Loading from '../modals/Loading' 
import { formatNumber } from 'accounting'
import Gas from '../assets/images/Gas.png'
import Card from '../assets/images/card.png'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
// import { ScrollView } from 'react-native-gesture-handler'
// import fbIcon from '../assets/images/facebook.png'
// import googleIcon from '../assets/images/google.png'
import Slideshow from 'react-native-image-slider-show';
import Carousel from 'react-native-banner-carousel'

const History = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView style={{zIndex:2}} refreshControl={
        <RefreshControl 
          refreshing={ props._onRefresh }
          onRefresh = { props._doRefresh }
        />
      }>
    <View style={ styles.container }>


      <View>
      <View style={{marginLeft:widthPercentageToDP(5),marginTop:heightPercentageToDP(2),marginBottom:heightPercentageToDP(1),backgroundColor:'#13a699', borderRadius:5,width:'26%',height:heightPercentageToDP(3)}}>
        <Text style={{color:'#fff', textAlign:'center',fontSize:heightPercentageToDP(2)}}>History</Text>
      </View>
          <FlatList 
            data = { props.dataHistory }
            renderItem = { props.renderItemHistory }
          />
     </View>


    
    </View>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    //marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#ffffff'
  },
  headerAmount:{
    backgroundColor:'#ffffff',
  },
  iconBack:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#ffffff'
  },
  cssColmd6:{flex:0.5,
    borderRadius:10,
    elevation: 1,
    marginHorizontal:widthPercentageToDP(1),
    marginTop:widthPercentageToDP(2)
  },
  iconSetting:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#042C5C'
  },
  iconNotif:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#042C5C'
  },
  wrapperLoginWith:{
    flexDirection:'row', 
    justifyContent:'center', 
    marginTop:heightPercentageToDP(10)
  },
  txtGreating:{
    fontFamily:'avenir',
    fontSize:heightPercentageToDP(3.5),
    fontWeight:'800',
    color:'#ffffff',
    marginTop:heightPercentageToDP(2),
    textAlign:'center'
  },
  btnLoginWith:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    marginRight:widthPercentageToDP(5),
    justifyContent:'center',
  },
  imageFB:{
    width:widthPercentageToDP(3.5),
    height:heightPercentageToDP(2.5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  btnLoginWithGoogle:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    justifyContent:'center'
  },
  imageGoogle:{
    width:widthPercentageToDP(5),
    height:widthPercentageToDP(5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  txtUsername:{
    color:'#77869E',
  },
  underlineInput:{
    borderBottomWidth:2,
    borderBottomColor:'#d6d6cd',
    paddingBottom:heightPercentageToDP(0.5)
  },
  txtInput:{
    fontSize:heightPercentageToDP(2), 
  },
  circle:{
    width:widthPercentageToDP(5), 
    height:widthPercentageToDP(5), 
    borderWidth:0.5, 
    borderRadius:widthPercentageToDP(2.5),
  },
  txtRememberMe:{
    textAlign:'center', 
    marginLeft: widthPercentageToDP(2)
  },
  txtForgotPass:{
    color:'#0047CC', 
    fontStyle:'italic', 
    fontFamily:'avenir', 
    fontWeight:'800', 
    textAlign:'right', 
    alignSelf:'flex-end', 
    right:0
  },
  btnLogin:{
    backgroundColor:'#41cee2', 
    borderRadius: 5, 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  btnLoginDisabled:{
    backgroundColor:'#77869E', 
    borderRadius: 5, 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  txtLogin:{
    fontWeight:'600', 
    fontFamily:'Avenir', 
    alignSelf:'center', 
    color:'#fff', 
    fontSize:heightPercentageToDP(2)
  },
  txtDontHave:{
    color:'#77869E', 
    fontFamily:'Avenir', 
    fontSize:heightPercentageToDP(1.8), 
    alignSelf:'center', 
    marginTop:heightPercentageToDP(2)
  },
  txtSignUp:{
    color:'#042C5C',
    fontFamily:'Avenir', 
    fontSize:heightPercentageToDP(1.8), 
    alignSelf:'center', 
    marginTop:heightPercentageToDP(2)
  },
  wrapperIncome:{
    marginRight:widthPercentageToDP(5), 
    flexDirection:'row', 
    marginTop:heightPercentageToDP(2)
  },
  imgIncome:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(10), 
    resizeMode:'contain', 
    marginRight:widthPercentageToDP(2.5)
  },
  txtAmount:{
    color:'#ffffff',fontSize:heightPercentageToDP(2.5),
    fontSize:heightPercentageToDP(5),
    marginBottom:heightPercentageToDP(2)
  },
  btnSetting:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor:'#fff',
    height:heightPercentageToDP(7),
    marginTop:heightPercentageToDP(1),
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:heightPercentageToDP(0.5),
    borderRadius:10,
    marginHorizontal:widthPercentageToDP(5)
    // borderBottomLeftRadius:10,
    // borderTopLeftRadius:10
  },
  btnSearch:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor:'#309abb',
    height:heightPercentageToDP(7),
    marginTop:heightPercentageToDP(1),
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:heightPercentageToDP(0.5),
    borderBottomRightRadius:10,
    borderTopRightRadius:10
  },
})

export default History