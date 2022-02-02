import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import footer_background from '../assets/images/footer_background.png'
import money_bag from '../assets/images/money2.png'
const Cash = props => (
  <SafeAreaView style={{backgroundColor:'#F8F9F9', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={ styles.container }>
      {/* <Image source={money_bag} style={styles.iconWallet}/> */}
        <View>
          <Image source={money_bag} style={styles.iconWallet}/>
          <Text style={ styles.txtGreating }>Saldo Cash</Text>
        </View>

        <View style={styles.fieldBox}>
        <TextInput 
            style={ styles.txtInput }
            onChangeText={ props.onChangeCash }
            // value={ props.valueCash }
            value={ formatNumber(props.valueCash) }
            placeholder='0'
            keyboardType="number-pad"
          />
          </View>
          <Text style={{color:'#666', marginTop:heightPercentageToDP(1)}}>Uang tunai yang Anda miliki di dompet fisik</Text>
        


        <View style={{marginTop:heightPercentageToDP(2)}}>
          <TouchableOpacity onPress={ props.doCash } style={ styles.btnLoginDisabled } >
            <Text style={ styles.txtLogin }>Lanjut</Text>
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
    backgroundColor:'#F8F9F9'
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
    color:'#666',
    marginTop:heightPercentageToDP(1),
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
    fontSize:heightPercentageToDP(4), 
    // borderBottomWidth:1,
    // borderBottomColor:'#666',
    textAlign:'center'
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
    backgroundColor:'#00e78e', 
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
  iconWallet:{
    width:widthPercentageToDP(32), 
    height:widthPercentageToDP(32), 
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:heightPercentageToDP(15)
  },
})

export default Cash