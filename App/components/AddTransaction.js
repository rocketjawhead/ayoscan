import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import col_wallet from '../assets/images/col_wallet.png'
import header_background from '../assets/images/header_background.png'
import { formatNumber } from 'accounting'

import up from '../assets/images/Up.png'
import down from '../assets/images/Down.png'

const AddTransaction = props => (
  <SafeAreaView style={{backgroundColor:'#F8F9F9'}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={styles.header}>
          <ImageBackground source={header_background} style={
              { width:500, height:500,marginTop:heightPercentageToDP(-30),zIndex:-1}} />
      </View>
      <View style={styles.headAmount}>
        <View style={{flex:0.7}}>
              <Text style={styles.txtTitleHead}>Tambah Transaksi</Text>
            </View>
            <View style={{flex:0.3}}>
              <IconAnt name="close" style={ styles.iconBack } onPress={props.openCategory}/>
            </View>
            
      </View>
      
      <Text style={styles.txtHeader}>Nominal Transaksi</Text>
      <View style={styles.formNominal}>        
        <TextInput 
            style={ styles.txtInput }
            placeholder='0.00'
            placeholderTextColor="#fff" 
            value = { formatNumber(props.valueAmount) }
          />
      </View>
      <View style={styles.body}>
            
            <TouchableOpacity onPress={props.openTypeTransaction}>
            <Text style={styles.txtChooseWallet}>Pilih Transaksi <IconAnt name="down" style={ styles.iconRight }/></Text>
            
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2)}}>
                  <View style={{flex:0.1,justifyContent:'center',marginLeft:widthPercentageToDP(5)}}>
                    <Image source={up} style={styles.iconWallet}/>
                  </View>
                  <View style={{flex:0.9,justifyContent:'center'}}>
                    <Text style={styles.txtTypeTransaksi}>Pemasukan</Text>
                  </View>
            </View>
            </TouchableOpacity>
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.6),
            marginTop:widthPercentageToDP(3),
            marginLeft:widthPercentageToDP(5),
            marginRight:widthPercentageToDP(5)
            }}></View>
            {/* end hr */}
            <Text style={styles.txtChooseWallet}>Pilih Wallet</Text>
            <TouchableOpacity onPress={props.openCategory}>
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2)}}>
                  <View style={{flex:0.2,justifyContent:'center'}}>
                    {/* <Image source={col_wallet} style={styles.iconWallet}/> */}
                    <Icon name="wallet" style={ styles.iconCard } onPress={props.goBack}/>
                  </View>
                  <View style={{flex:0.4}}>
                    <Text style={styles.txtTitleWallet}>Wallet <IconAnt name="down" style={ styles.iconRight }/></Text>
                    <Text style={{color:'#666',fontSize:heightPercentageToDP(2)}}>085714579626</Text>
                  </View>
                  <View style={{flex:0.4,justifyContent:'center'}}>
                    <Text style={styles.txtAmountWallet}>Rp 1.000.000.000</Text>
                  </View>
            </View>
            </TouchableOpacity>
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(2.5),
            marginTop:widthPercentageToDP(3)}}></View>
            {/* end hr */}
            <View style={{marginTop:heightPercentageToDP(2)}}>
              <Text style={styles.txtDetailTransaction}>Detail Transaksi</Text>
                  <Text style={styles.txtChooseWallet}>Judul Pemasukan</Text>
                  <TextInput 
                  placeholder="Ex : Gaji bulan januari"
                    style={ styles.input } 
                    onChangeText={ props.onChangeTitle } 
                    value={ props.valueTitle }
                    maxLength={50}
                  />

                  <Text style={styles.txtChooseWallet}>Tanggal</Text>
                  <DatePicker
                    style={{width: 200,marginTop:widthPercentageToDP(2),marginLeft:widthPercentageToDP(5)}}
                    date={props.valueTrxDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1945-01-01"
                    maxDate="2020-12-12"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={props.onChangeTrxDate}
                  />

                  <Text style={styles.txtChooseWallet}>Kategori</Text>
                  <TextInput 
                  placeholder="Pilih Kategori"
                    style={ styles.input } 
                    onChangeText={ props.onChangeTitle } 
                    value={ props.valueTitle }
                    maxLength={50}
                  />

                  <Text style={styles.txtChooseWallet}>Catatan</Text>
                  <TextInput 
                  placeholder="(optional)"
                    style={ styles.input } 
                    onChangeText={ props.onChangeTitle } 
                    value={ props.valueTitle }
                    maxLength={50}
                  /> 
            </View>
              <View style={{marginTop:heightPercentageToDP(2)}}>
              </View>

              <View style={{borderRadius:10,marginTop:heightPercentageToDP(1),marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
                <TouchableOpacity onPress={ props.doLogin } style={ props.valueEmail == '' || props.valuePassword == '' ? styles.btnLoginDisabled : styles.btnLogin } disabled={ props.valuePassword == '' || props.valueEmail == '' ? true : false }>
                  <Text style={ styles.txtLogin }>Simpan</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop:heightPercentageToDP(10)}}>
              </View>
            
      </View>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#fff'
  },
  iconRight:{
    fontSize:heightPercentageToDP(2),
    color:'#666',
  },
  headAmount:{
    flexDirection:'row',
    position:'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtTitleHead:{
    marginTop:heightPercentageToDP(2),
    color:'#fff',
    fontFamily:'sans-serif',
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2.5),
    marginBottom:heightPercentageToDP(2),
    marginLeft:widthPercentageToDP(5),
  },
  iconBack:{
    marginTop:heightPercentageToDP(2),
    fontSize:heightPercentageToDP(3),
    color:'#fff',
    marginLeft:widthPercentageToDP(5),
    marginBottom:heightPercentageToDP(2),
    textAlign:'right',
    marginRight:widthPercentageToDP(5),
  },
  txtInput:{
    color:'#fff',
    borderBottomWidth:1, 
    borderColor:'#fff', 
    paddingVertical:heightPercentageToDP(1),
    width:widthPercentageToDP(55),
    fontSize:heightPercentageToDP(6),
    textAlign:'center'
  },
  boxAmount:{
    flexDirection:'row',
    position:'absolute',
    top:heightPercentageToDP(15),
    right:0,
    left:0,
    bottom:0,
    alignContent:'center',
    alignItems:'center',
    flex:1
  },
  txtHeader:{
    position:'absolute',
    top:heightPercentageToDP(10),
    right:0,
    left:0,
    bottom:0,
    textAlign:'center',
    color:'#fff',
    fontSize:heightPercentageToDP(3),
  },
  formNominal:{
    position:'absolute',
    top:heightPercentageToDP(14),
    right:0,
    left:0,
    bottom:0,alignContent:'center',alignItems:'center'
  },
  body:{
    backgroundColor:'#fff'
  },
  txtChooseWallet:{
    color:'#666',
    fontFamily:'Avenir',
    marginLeft:widthPercentageToDP(5),
    marginTop:heightPercentageToDP(1.5),
  },
  txtDetailTransaction:{
    fontFamily:'avenir',
    color:'#666',
    fontSize:heightPercentageToDP(1.5),
    marginLeft:widthPercentageToDP(5),
    marginTop:heightPercentageToDP(1.5),
    fontWeight:'bold'
  },
  txtTitleForm:{
    color:'#666',
    marginLeft:widthPercentageToDP(5),
    marginTop:heightPercentageToDP(1),
    fontSize:heightPercentageToDP(2.5),
  },
  iconWallet:{
    height:heightPercentageToDP('4%'),
    width:widthPercentageToDP('7%'),
    marginRight:5,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'
  },
  contentInput:{
    
  },
  titleInput:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.7)
  },
  input:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(2.5),
    borderBottomWidth:2, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1),
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
    fontWeight:'bold'
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
    fontWeight:'700', 
    fontFamily:'Avenir', 
    alignSelf:'center', 
    color:'#fff', 
    fontSize:heightPercentageToDP(2)
  },
  iconCard:{
    fontSize:heightPercentageToDP(5),
    color:'#3827B4',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    justifyContent:'center',
    marginRight:widthPercentageToDP(5)
  },
  txtAmountWallet:{
    fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2),
    color:'#3827B4',
    textAlign:'center',
    marginRight:widthPercentageToDP(5)
  },
  txtTitleWallet:{
    fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2)
  },
  txtTypeTransaksi:{
    // fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2.5),
    justifyContent:'center'
  }
})

export default AddTransaction