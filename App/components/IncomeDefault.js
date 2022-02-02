import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import { formatNumber } from 'accounting'
import Gas from '../assets/images/Gas.png'
import Card from '../assets/images/card.png'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { ScrollView } from 'react-native-gesture-handler'
// import fbIcon from '../assets/images/facebook.png'
// import googleIcon from '../assets/images/google.png'
import { TextInputMask } from 'react-native-masked-text'

const Income = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
<ScrollView vertical={true}>
    <View style={ styles.container }>


    <View style={ styles.headerAmount }>
      <View style={{flexDirection:'row',marginHorizontal:widthPercentageToDP(5)}}>
        <View style={{flex:0.2}}>
        <Icon name="arrowleft" style={ styles.iconBack }/>
        </View>
        <View style={{flex:0.6}}>
        <Text style={ styles.txtGreating }>Pemasukan</Text>
        </View>
        <View style={{flex:0.2}}>
        <Icon name="notification" style={ {fontSize:heightPercentageToDP(2.5),
      marginVertical:widthPercentageToDP(5),
      color:'#ffc12e',alignSelf:'flex-end'} }/>
        </View>  
      </View>
        
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>
        <Text style={{color:'#ffffff',fontSize:heightPercentageToDP(2.5)}}>Saldo Utama</Text>
        <Text style={styles.txtAmount}>Rp { formatNumber(props.mainSaldo) }</Text>
        
      
      </View>
      

    </View>
    
    {/* forminput */}
    <View style={{marginHorizontal:widthPercentageToDP(5)}}>
    <View style={{ marginTop:heightPercentageToDP(5)}}>
        <View style={ styles.contentInput }>
          <Text style={ styles.titleInput }>Judul</Text>
          <TextInput 
            style={ styles.input } 
            onChangeText={ props.onChangeTitle } 
            value={ props.valueTitle }
            maxLength={50}
          />
        </View>
      </View>
      
      <View style={{ marginTop:heightPercentageToDP(2)}}>
        <View style={ styles.contentInput }>
          <Text style={ styles.titleInput }>Kategori</Text>
          <TextInput 
          placeholder="Masukkan kategori atau pilih list dibawah"
            onFocus={ props.onChangeFocusCategories }
            style={ styles.input }
            onChangeText={ props.onChangeCategory } 
            value={ props.valueCategory}
          />
        </View>
        { props.openListCategories ?
          <View style={ styles.wrapperListCategories }>
            <ScrollView>
              { props.renderListCategories }
            </ScrollView>
          </View>:<View/>
        }
        
      </View>

      <View style={{ marginTop:heightPercentageToDP(2)}}>
        <View style={ styles.contentInput }>
          <Text style={ styles.titleInput }>Jumlah</Text>
          <TextInput
            style={ styles.input } 
            onChangeText={ props.onChangeAmount } 
            value={ props.valueAmount }
            keyboardType="number-pad"
          />
        </View>
      </View>

      <View style={{ marginTop:heightPercentageToDP(2)}}>
        <View style={ styles.contentInput }>
          <Text style={ styles.titleInput }>Tanggal</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'YYYY/MM/DD'
            }}
            style={ styles.input } 
            onChangeText={ props.onChangeDate } 
            value={ props.valueDate }
          />
        </View>
      </View>

        <TouchableOpacity onPress={ props.saveIt } style={ styles.btnLogin } >
          <Text style={ styles.txtLogin }>Simpan Pemasukan</Text>
        </TouchableOpacity>
    </View>
          
    {/* end forminput */}
        
      
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
    backgroundColor:'#309abb',
    borderBottomLeftRadius:35,borderBottomRightRadius:35
    
  },
  iconBack:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#ffffff'
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
  contentInput:{
    borderBottomWidth:1, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1)
  },
  titleInput:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.7)
  },
  input:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(1.8)
  },
})

export default Income