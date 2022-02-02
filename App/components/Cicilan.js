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


const Cicilan = props => (
  <SafeAreaView style={{backgroundColor:'#F8F9F9'}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      {/* <View style={styles.header}>
          <ImageBackground source={header_background} style={
              { width:500, height:500,marginTop:heightPercentageToDP(-30),zIndex:-1}} />
      </View>
      <View style={styles.headAmount}>
        <View style={{flex:0.7}}>
              <Text style={styles.txtTitleHead}>Transfer</Text>
            </View>
            <View style={{flex:0.3}}>
              <IconAnt name="close" style={ styles.iconBack } onPress={props.goBack}/>
            </View>
            
      </View> */}
      
      {/* <Text style={styles.txtHeader}>Nominal Transaksi</Text>
      <View style={styles.formNominal}>        
        <TextInput 
            style={ styles.txtInput }
            placeholder='0.00'
            keyboardType={'numeric'}
            placeholderTextColor="#fff" 
            value = { formatNumber(props.valueAmount) }
            onChangeText = {props.onChangeAmount}
          />
      </View> */}
      <View style={styles.body}>

            <View style={{direction:'row'}}>
            {/* <View style={{flex:0.7}}> */}
              <Text style={styles.txtTitleHead}>Cicilan</Text>
            {/* </View> */}
            </View>

            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(2),
            marginTop:widthPercentageToDP(1)}}></View>
            {/* end hr */}

            <TouchableOpacity onPress={props.openWallet}>
            <View style={styles.fieldBox}>
            {/* <Text style={styles.txtChooseWallet}>Pilih Wallet <IconAnt name="down" style={ styles.iconRight }/></Text> */}
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
                  <View style={{flex:0.2,justifyContent:'center'}}>
                    <Icon name="wallet" style={ styles.iconCard } onPress={props.goBack}/>
                  </View>
                  <View style={{flex:0.8}}>
                    <Text style={styles.txtTitleWallet}>{props.valueTitleWallet} </Text>
                    <Text style={styles.txtAmountWallet}>Rp {formatNumber(props.valueAmountWallet)}</Text>
                  </View>
            </View>
            </View>
            </TouchableOpacity>
            

            {/* <Text style={styles.txtChooseWallet}>Rekening Tujuan <IconAnt name="down" style={ styles.iconRight }/></Text> */}
            <View style={styles.fieldBox}>
            {/* <Text style={styles.txtChooseWallet}>Daftar Cicilan <IconAnt name="down" style={ styles.iconRight }/></Text> */}
            
            {props.valueListCicilan == '' ? 
              <TouchableOpacity onPress={props.newCicilan}>
                {/* <Text style={styles.chooseCicilan}>+ Tambah Daftar Cicilan</Text>  */}
                <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
                  <View style={{flex:0.2}}>
                    <IconAnt name="creditcard" style={ styles.iconCard } onPress={props.goBack}/>
                  </View>
                  <View style={{flex:0.8}}>
                    <Text style={styles.chooseRekening}>Daftar Cicilan</Text>
                  </View>
                </View>
              </TouchableOpacity>
              : 
            props.valueListCicilan != '' && props.valueIdCicilan == '' ? 
              <TouchableOpacity onPress={props.openCicilan}>
                {/* <Text style={styles.chooseCicilan}>Pilih Cicilan</Text>  */}
                <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
                  <View style={{flex:0.2}}>
                    <IconAnt name="creditcard" style={ styles.iconCard } onPress={props.goBack}/>
                  </View>
                  <View style={{flex:0.8}}>
                    <Text style={styles.chooseRekening}>Pilih Cicilan</Text>
                  </View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={props.openCicilan}>
              <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
                    <View style={{flex:0.2,justifyContent:'center'}}>
                      <Icon name="wallet" style={ styles.iconCard } onPress={props.goBack}/>
                    </View>
                    <View style={{flex:0.8}}>
                      <Text style={styles.txtTitleWallet}>{props.valueNamaCicilan}</Text>
                      <Text style={styles.txtAmountWallet}>Cicilan Ke - {props.valueTotalCicilan}</Text>
                    </View>
              </View>
              </TouchableOpacity>
            }
            </View>


            {/* <Text style={styles.chooseRekening}>
                      {props.valueListRekening == '' ? '+ Tambah Rekening' : 
                      props.valueListRekening != '' && props.valueIdRekening == '' ? 'Pilih Rekening':
                      props.valueIdRekening
                      }
                      </Text> */}
            {/* <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2)}}>
                  <View style={{flex:0.2,justifyContent:'center'}}>
                    <Icon name="wallet" style={ styles.iconCard } onPress={props.goBack}/>
                  </View>
                  <View style={{flex:0.8}}>
                    <Text style={styles.txtTitleWallet}>{props.valueNamaRekening} </Text>
                    <Text style={styles.txtAmountWallet}>{props.valueNamaBank} | {props.valueNomorRekening}</Text>
                  </View>
            </View> */}
            
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(2.5),
            marginTop:widthPercentageToDP(3)}}></View>
            {/* end hr */}
            <View>
              {/* <Text style={styles.txtDetailTransaction}>Detail Transaksi</Text> */}
                  {/* <Text style={styles.txtChooseWallet}>Judul</Text>
                  <TextInput 
                  placeholder="Judul Transaksi"
                    style={ styles.input } 
                    onChangeText={ props.onChangeTitle } 
                    value={ props.valueTitle }
                    maxLength={50}
                  /> */}

                  <Text style={styles.txtChooseWallet}>Nominal Transaksi</Text>
                  <TextInput 
                  // placeholder="Judul Transaksi"
                    style={ styles.input } 
                    value = { formatNumber(props.valueAmount) }
                    onChangeText = {props.onChangeAmount}
                    maxLength={50}
                    editable={false}
                  />

                {/* <TextInput 
                  style={ styles.txtInput }
                  placeholder='0.00'
                  keyboardType={'numeric'}
                  placeholderTextColor="#fff" 
                  value = { formatNumber(props.valueAmount) }
                  onChangeText = {props.onChangeAmount}
                /> */}

                  <Text style={styles.txtChooseWallet}>Tanggal</Text>
                  <DatePicker
                    style={{width: 200,marginTop:widthPercentageToDP(2),marginLeft:widthPercentageToDP(5)}}
                    date={props.valueDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1945-01-01"
                    maxDate="2100-12-12"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                        borderRadius : 5,
                        // shadowColor: "#000",
                        // shadowOffset: {
                        //   width: 0,
                        //   height: 2,
                        // },
                        // shadowOpacity: 0.23,
                        // shadowRadius: 2.62,
                        elevation: 1,
                        backgroundColor:'#fff'
                      }
                    }}
                    onDateChange={props.onChangeDate}
                  />

                  {/* <TouchableOpacity onPress={props.openCategory}>
                  <Text style={styles.txtChooseWallet}  onPress={props.openCategory}>Kategori <IconAnt name="down" style={ styles.iconRight }/></Text>
                  <Text style={{
                    marginLeft:widthPercentageToDP(8),
                    fontSize:heightPercentageToDP(2),
                    color:'#042C5C',
                    marginTop:heightPercentageToDP(1)
                    }}>{props.valueCategory == '' ? 'Pilih Kategori' :props.valueCategory}</Text>
                  </TouchableOpacity> */}

                  <Text style={styles.txtChooseWallet}>Catatan</Text>
                  <TextInput 
                  placeholder="(optional)"
                    style={ styles.input } 
                    onChangeText={ props.onChangeNote } 
                    value={ props.valueNote }
                    maxLength={50}
                  /> 
            </View>
              <View style={{marginTop:heightPercentageToDP(2)}}>
              </View>

              <View style={{borderRadius:10,marginTop:heightPercentageToDP(1),marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
                <TouchableOpacity onPress={ props.saveIt } style={ styles.btnLogin } >
                  <Text style={ styles.txtLogin }>Simpan</Text>
                </TouchableOpacity>
              </View>

              <View style={{borderRadius:10,marginTop:heightPercentageToDP(1),marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
                <TouchableOpacity onPress={ props.goBack } style={ styles.btnLoginDisabled } >
                  <Text style={ styles.txtBack }>Kembali</Text>
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
    borderRadius:5,
    marginTop:heightPercentageToDP(1),
    marginLeft:heightPercentageToDP(2),
    marginRight:heightPercentageToDP(2)
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
    color:'#666',
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
    width:widthPercentageToDP(80),
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
    top:heightPercentageToDP(8),
    right:0,
    left:0,
    bottom:0,
    textAlign:'center',
    color:'#fff',
    fontSize:heightPercentageToDP(3),
  },
  formNominal:{
    position:'absolute',
    top:heightPercentageToDP(11),
    right:0,
    left:0,
    bottom:0,alignContent:'center',alignItems:'center'
  },
  body:{
    backgroundColor:'#fff'
  },
  txtChooseWallet:{
    color:'#464646',
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
    height:heightPercentageToDP('6%'),
    width:widthPercentageToDP('9%'),
    marginRight:5,
    justifyContent:'center'
  },
  contentInput:{
    
  },
  titleInput:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.7)
  },
  input:{
    color:'#464646', 
    fontSize:heightPercentageToDP(2),
    borderBottomWidth:2, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1),
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
  },
  btnLogin:{
    backgroundColor:'#13a699', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  btnLoginDisabled:{
    backgroundColor:'#fff', 
    borderColor:'#13a699',
    borderWidth :1,
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center',
  },
  txtBack:{
    fontWeight:'700', 
    fontFamily:'Avenir', 
    alignSelf:'center', 
    color:'#13a699', 
    fontSize:heightPercentageToDP(2)
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
    color:'#13a699',
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
    color:'#13a699',
  },
  txtTitleWallet:{
    // fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2)
  },
  chooseRekening:{
    // marginLeft:widthPercentageToDP(2),
    fontSize:heightPercentageToDP(2),
    color:'#464646',
    marginTop:heightPercentageToDP(1)
  },
})

export default Cicilan