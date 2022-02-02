import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

// import fbIcon from '../assets/images/facebook.png'
// import googleIcon from '../assets/images/google.png'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import footer_background from '../assets/images/footer_background.png'
import Loading from '../modals/Loading' 
const SplashScreen = props => (
  <SafeAreaView style={{backgroundColor:'#fff', flex:1}}>
    <Text style={ styles.txtGreating }>DemoPAY</Text>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    // marginHorizontal:widthPercentageToDP(5),
  },
  txtGreating:{
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(4),
    fontWeight:'bold',
    color:'#13a699',
    marginTop:heightPercentageToDP(40),
    textAlign:'center'
  },
  txtSlogan:{
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2),
    color:'#13a699',
    marginTop:heightPercentageToDP(1),
    textAlign:'center'
  }
})

export default SplashScreen