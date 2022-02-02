import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import footer_background from '../assets/images/footer_background.png'
import { convertHeightPercentToDP, responsiveFontSize, } from '../particles/converter'
const Register = props => (
  <SafeAreaView style={{backgroundColor:'#13a699', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={ styles.container }>
        <View>
          <TouchableOpacity onPress={ props.goBack }>
            <Icon name="close" style={ styles.iconBack } />
          </TouchableOpacity>
          <Text style={ styles.txtGreating }>PIN</Text>
          <Text style={{textAlign:'center',color:'#fff'}}>Membuat PIN untuk keamanan data</Text>
        </View>

        <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
          <View style={props.valuePIN.length >= 1 ? styles.circleFull : styles.circle}/>
          <View style={props.valuePIN.length >= 2 ? styles.circleFull : styles.circle}/>
          <View style={props.valuePIN.length >= 3 ? styles.circleFull : styles.circle}/>
          <View style={props.valuePIN.length >= 4 ? styles.circleFull : styles.circle}/>
          <View style={props.valuePIN.length >= 5 ? styles.circleFull : styles.circle}/>
          <View style={props.valuePIN.length >= 6 ? styles.circleFull : styles.circle}/>
        </View>

        <View style={styles.boxNumber}>
          <View style={{ flexDirection:'row'}}>
            <TouchableOpacity onPress={ props.press1 }>
              <View style={styles.Button}>
                <Text style={styles.number}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press2 }>
              <View style={styles.Button}>
                <Text style={styles.number}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press3 }>
              <View style={styles.Button}>
                <Text style={styles.number}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity onPress={ props.press4 }>
              <View style={styles.Button}>
                <Text style={styles.number}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press5 }>
              <View style={styles.Button}>
                <Text style={styles.number}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press6 }>
              <View style={styles.Button}>
                <Text style={styles.number}>6</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity onPress={ props.press7 }>
              <View style={styles.Button}>
                <Text style={styles.number}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press8 }>
              <View style={styles.Button}>
                <Text style={styles.number}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press9 }>
              <View style={styles.Button}>
                <Text style={styles.number}>9</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity disabled>
              <View style={styles.ButtonTransparent}>
                {/* <Text style={styles.number}>0</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.press0 }>
              <View style={styles.Button}>
                <Text style={styles.number}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.pressX }>
              <View style={styles.Button}>
                <Text style={styles.number}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        
      </View>

    </ScrollView>
    {/* <ImageBackground source={footer_background} style={{width:'100%', 
    height:'100%',position:'absolute',
    marginTop:heightPercentageToDP(65),zIndex:-1}}/> */}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#13a699',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    marginVertical:widthPercentageToDP(5),
    color:'#fff'
  },
  wrapperLoginWith:{
    flexDirection:'row', 
    justifyContent:'center', 
    marginTop:heightPercentageToDP(10)
  },
  txtGreating:{
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(4),
    fontWeight:'bold',
    color:'#fff',
    marginTop:heightPercentageToDP(1.5),
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
    borderBottomColor:'#309abb',
    paddingBottom:heightPercentageToDP(0.5)
  },
  txtInput:{
    fontSize:heightPercentageToDP(2), 
    marginLeft:widthPercentageToDP(4)
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
    backgroundColor:'#3827B4', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  btnLoginDisabled:{
    backgroundColor:'#E61EAD', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center',
    borderRadius:10,
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
  fieldBox:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:heightPercentageToDP(2)
  },
  icon:{
    marginTop:heightPercentageToDP(1.2),
    height:heightPercentageToDP('4%'),
    width:widthPercentageToDP('7%'),
    marginRight:5
  },
  circle:{
    width:convertHeightPercentToDP(4.5),
    height:convertHeightPercentToDP(4.5),
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:50,
    margin:5
  },
  circleFull:{
    width:convertHeightPercentToDP(4.5),
    height:convertHeightPercentToDP(4.5),
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:50,
    margin:5,
    backgroundColor:'#fff'
  },
  Button:{
    width:convertHeightPercentToDP(9),
    height:convertHeightPercentToDP(9),
    borderWidth:2,
    borderColor:'#fff',
    backgroundColor:'#fff',
    borderRadius:convertHeightPercentToDP(9)/2,
    margin:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTransparent:{
    width:convertHeightPercentToDP(9),
    height:convertHeightPercentToDP(9),
    borderWidth:2,
    borderColor:'rgba(30, 39, 46,0.0)',
    backgroundColor:'rgba(30, 39, 46,0.0)',
    borderRadius:convertHeightPercentToDP(9)/2,
    margin:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxNumber:{
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:convertHeightPercentToDP(2),
    // backgroundColor:'#666',
  },
  number:{
      color:'#666',
      fontWeight:'900', 
      fontFamily:'Avenir', 
      alignSelf:'center', 
      fontSize:heightPercentageToDP(4),
  },
  txtSlogan:{
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2),
    color:'#666',
    marginTop:heightPercentageToDP(1),
    textAlign:'center'
  },
})

export default Register