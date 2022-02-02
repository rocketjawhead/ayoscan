import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground,Linking  } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import footer_background from '../assets/images/footer_background.png'
const Register = props => (
  <SafeAreaView style={{backgroundColor:'#fff', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={ styles.container }>
        <View>
          <TouchableOpacity onPress={ props.toLogin }>
            <Icon name="arrowleft" style={ styles.iconBack } onPress={props.goBack}/>
          </TouchableOpacity>
          <Text style={ styles.txtGreating }>Daftar Akun</Text>
        </View>

        <View style={styles.fieldBox}>
        <TextInput 
            style={ styles.txtInput }
            onChangeText={ props.onChangeFullname }
            value={ props.valueFullname }
            placeholder='Nama Lengkap'
          />
        </View>

        <View style={styles.fieldBox}>
        <TextInput 
            style={ styles.txtInput }
            keyboardType = 'numeric'
            onChangeText={ props.onChangePhonenumber }
            value={ props.valuePhonenumber }
            placeholder='No. Telepone'
          />
        </View>

    
        <View style={styles.fieldBox}>
        <TextInput 
            style={ styles.txtInput }
            onChangeText={ props.onChangeEmail }
            value={ props.valueEmail }
            onEndEditing={ props.validationEmail }
            placeholder='Email'
          />
        </View>

        <View style={styles.fieldBox}>
        <View style={{flexDirection:'row'}}>
              <View style={{flex:0.9}}>
                  <TextInput 
                    style={ styles.txtInput }
                    onChangeText={ props.onChangePassword }
                    value={ props.valuePassword }
                    onEndEditing={ props.validationPassword }
                    placeholder='Password'
                    secureTextEntry={props.valueShowPass}
                  />
              </View>
              <View style={{flex:0.1}}>
                    <TouchableOpacity onPress={props.showPass}>
                      <Image source={props.valueShowPass == true ? CloseEye : OpenEye } style={styles.icon}/>
                    </TouchableOpacity>
              </View>
        </View>
        </View>


        

        <View style={{marginTop:heightPercentageToDP(2)}}>
          <TouchableOpacity onPress={ props.doRegister } style={ props.valueEmail == '' || props.valuePassword == '' ? styles.btnLoginDisabled : styles.btnLogin } disabled={ props.valuePassword == '' || props.valueEmail == '' ? true : false }>
            <Text style={ styles.txtLogin }>Daftar</Text>
          </TouchableOpacity>
        </View>
        
      </View>

    </ScrollView>
    {/* <ImageBackground source={footer_background} style={{
      width:'100%', height:'100%',
      position:'absolute',
      marginTop:heightPercentageToDP(65)}}/> */}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    marginVertical:widthPercentageToDP(5),
    color:'#13a699'
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
    color:'#13a699',
    // marginTop:heightPercentageToDP(10),
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
    // marginLeft:widthPercentageToDP(4)
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
    backgroundColor:'#13a699', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  btnLoginDisabled:{
    backgroundColor:'#BFB8B7', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center',
    borderRadius:5,
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 20,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.67,
    // elevation: 4,
    // backgroundColor:'#fff',
    // borderRadius:5,
    borderBottomWidth:1,
    borderBottomColor:'#D9D4D4',
    marginTop:heightPercentageToDP(2)
  },
  icon:{
    marginTop:heightPercentageToDP(1.2),
    height:heightPercentageToDP('4%'),
    width:widthPercentageToDP('7%'),
    marginRight:5
  },
})

export default Register