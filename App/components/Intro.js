import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import intro from '../assets/images/intro.png'

const Intro = props => (
  <SafeAreaView>
    <View style={{height:hp(100)}}>
      <View>
        <TouchableOpacity>
          <Text style={ styles.txtSkip }>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={intro} style={ styles.image }/>
      </View>
      <View style={ styles.bottomArea }>
        <Text style={ styles.title }>In hac habitasse platea dictumst.</Text>
        <Text style={ styles.txtContent }>Donec facilisis tortor ut augue lacinia, at viverra est semper.</Text>

        <View style={ styles.wrapperBottom }>
          <TouchableOpacity>
            <View style={ styles.btnLogin }>
              <Text style={ styles.txtLogin }>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={ styles.btnSignup }>
              <Text style={ styles.txtSignup }>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  txtSkip:{
    color:'#77869E',
    textAlign:'right',
    margin:wp('5%'),
    fontSize: hp('2%'),
    fontFamily:'avenir'
  }, 
  image:{
    width:wp('80'), 
    height:hp('80%'), 
    resizeMode:'contain', 
    alignSelf:'center',
  },
  bottomArea:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    position:'absolute', 
    height:hp('35'), 
    backgroundColor:'#fff', 
    zIndex:10, 
    bottom:0, 
    width:wp(100),
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingTop:hp(2)
  },
  title:{
    textAlign:'center',
    color:'#042C5C',
    fontFamily:'avenir',
    fontWeight:'800',
    fontSize:hp(2.5)
  },
  txtContent:{
    textAlign:'center',
    marginHorizontal:wp(20),
    marginTop:hp(1.5),
    fontFamily:'avenir',
    color:'#77869E'
  },
  wrapperBottom:{
    flexDirection:'row', 
    justifyContent:'center', 
    marginTop:hp('10')
  },
  btnLogin:{
    backgroundColor:'#0047CC', 
    borderRadius:10, 
    width:wp(38), 
    height:hp(6), 
    justifyContent:'center', 
    marginRight:wp(5)
  },
  txtLogin:{
    color:'#fff', 
    textAlign:'center', 
    fontWeight:'600', 
    fontFamily:'avenir', 
    fontSize:hp('2')
  },
  btnSignup:{
    borderRadius:10, 
    width:wp(38), 
    height:hp(6), 
    justifyContent:'center', 
    borderWidth:1, 
    borderColor:'#77869E'
  },
  txtSignup:{
    color:'#77869E', 
    textAlign:'center', 
    fontWeight:'600', 
    fontFamily:'avenir', 
    fontSize:hp('2')
  }
})

export default Intro