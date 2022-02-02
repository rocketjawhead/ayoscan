import React from 'react'

import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList, Vibration } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { formatNumber } from 'accounting'
import Gas from '../assets/images/Gas.png'
import Card from '../assets/images/card.png'
import coin from '../assets/images/coin.png'
import addWallet from '../assets/images/col_add.png'
import footer_background from '../assets/images/footer_background.png'
import header_background from '../assets/images/header_background.png'
import Loading from '../modals/Loading' 
import add from '../assets/images/col_pemasukan1.png'
import remove from '../assets/images/col_pengeluaran.png'
import transfer from '../assets/images/col_transfer.png'
import installment from '../assets/images/col_cicilan.png'
const EditWallet = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
  <ScrollView vertical={true}>
    <View style={ styles.header }>
      <View style={styles.col8}>
        <Text style={ styles.txtEmail }>Edit Wallet</Text>
        
      </View>
      <View style={styles.col2}>
      <IconAnt name="close" style={ styles.iconBack } onPress={props.goBack}/>
      </View>
      
    </View>
    <View style={styles.bodyCard}>
          <TouchableOpacity onPress={ props.toIncome } style={{
    height:heightPercentageToDP(25),
    width:widthPercentageToDP(90),
    borderRadius:12,
    backgroundColor:props.valueColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    marginBottom:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(2)
  }}>
            <View style={styles.cardColoumn}>
              <View style={styles.col8}>
              <TextInput 
                style={ styles.inputCard } 
                value={ props.valueTitle }
                maxLength={50}
                />
              </View>
              <View style={styles.col2}>
              <Icon name="wallet" style={ styles.iconCard } />
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text style={styles.txtBalance}>Balance</Text>
                  <View style={styles.boxAmount}>
                    <Text style={styles.txtIdr}>Rp 
                    <Text style={styles.txtAmount}> { formatNumber(props.valueAmount) }</Text></Text>
                    
                  </View>
                </View>
            </View>
          </TouchableOpacity>
    </View>
    
    <TouchableOpacity onPress={props.openColor}>
    <Text style={{color:'#666',textAlign:'center',fontSize:heightPercentageToDP(2)}}>Pilih Warna <Icon name="edit" style={ styles.iconPencil } /></Text>
    </TouchableOpacity>
    
    {/* hr */}
    {/* <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(0.5),
        marginTop:widthPercentageToDP(2)}}></View> */}
        {/* end hr */}
    <View style={{marginTop:heightPercentageToDP(3)}}>
        <Text style={{color:'#666',
        marginLeft:widthPercentageToDP(5),
        fontSize:heightPercentageToDP(2),
        fontFamily:'Avenir',
    }}>Judul Wallet atau Rekening</Text>
        <TextInput 
            placeholder="Ex : Gopay / BCA"
            style={ styles.input } 
            onChangeText={ props.onChangeTitle } 
            value={ props.valueTitle }
            maxLength={50}
            />

    {/* <Text style={{color:'#666',
    marginLeft:widthPercentageToDP(5),
    fontSize:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(2),
    fontFamily:'Avenir',
    }}>Jumlah Saldo</Text>
        <TextInput 
            placeholder="10.000"
            style={ styles.input } 
            onChangeText={ props.onChangeAmount } 
            value={ formatNumber(props.valueAmount) }
            maxLength={50}
            /> */}
    </View>

    <View style={{borderRadius:10,marginTop:heightPercentageToDP(1),
      marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
                <TouchableOpacity onPress={ props.saveIt } style={ styles.btnLogin } >
                  <Text style={ styles.txtLogin }>Simpan</Text>
                </TouchableOpacity>
              </View>


  </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{  
    backgroundColor:'#ffffff'
  },
  inputCard:{
      color:'#fff',
      fontSize:heightPercentageToDP(5),
      marginLeft:widthPercentageToDP(3),
      fontWeight:'bold',
      fontFamily:'avenir',
      justifyContent:'center'
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
  header:{
    flexDirection:'row'
  },
  bodyCard:{
      alignContent:'center',
      alignItems:'center',
    marginTop:heightPercentageToDP(1)
  },
  bodyAction:{
    // marginTop:heightPercentageToDP(1),
    flexDirection:'row',
    alignSelf:'center'
  },
  bodyHistory:{
    marginTop:heightPercentageToDP(2)
  },
  col8:{
    flex:0.8
  },
  col2:{
    flex:0.2
  },
  txtGreating:{
    fontFamily:'avenir',
    fontSize:heightPercentageToDP(2),
    color:'#666',
    marginTop:heightPercentageToDP(2),
    marginLeft:widthPercentageToDP(5),
    textAlign:'left'
  },
  txtEmail:{
    fontFamily:'avenir',
    fontSize:heightPercentageToDP(2.5),
    color:'#666',
    marginLeft:widthPercentageToDP(5),
    textAlign:'left',
    fontWeight:'bold',
    marginTop:heightPercentageToDP(2)
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    marginTop:heightPercentageToDP(2),
    color:'#464646',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5)
  },
  iconRight:{
    fontSize:heightPercentageToDP(20),
    color:'#666',
  },
  sliderCard:{
    flexDirection:'row', 
    marginBottom:10
  },
  boxIcon:{
    borderRadius:12,
    // backgroundColor:'#3827B4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    marginLeft:widthPercentageToDP(1),
    marginRight:widthPercentageToDP(1),
    // height:heightPercentageToDP(2),
    // marginTop:heightPercentageToDP(2)
  },
  card:{
    height:heightPercentageToDP(25),
    width:widthPercentageToDP(90),
    borderRadius:12,
    backgroundColor:'#3827B4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    marginBottom:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(2)
  },
  cardColoumn:{
    flexDirection:'row',
    justifyContent:'center'
    
  },
  cardTitle:{
    fontFamily:'avenir',
    color:'#fff',
    marginLeft:widthPercentageToDP(4)
  },
  iconCard:{
    fontSize:heightPercentageToDP(5),
    color:'#fff',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5),
    justifyContent:'center',
    marginTop:heightPercentageToDP(2),
  },
  txtBalance:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(2.5),
    marginTop:heightPercentageToDP(3),
    marginLeft:widthPercentageToDP(4)
  },
  txtBalance1:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(1.5),
    marginTop:heightPercentageToDP(3),
    // marginLeft:widthPercentageToDP(4)
  },
  boxAmount:{
    // flexDirection:'row', 
    // flex:1,
    marginLeft:widthPercentageToDP(4)
  },
  boxAmount1:{
    // flexDirection:'row', 
    // flex:1,
    // marginLeft:widthPercentageToDP(4)
  },
  txtIdr:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(2),
  },
  txtAmount:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(3.5),
    fontWeight:'bold',
    marginRight:widthPercentageToDP(4)
  },
  txtAmount1:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(3),
    fontWeight:'bold'
  },
  txtPoin:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(3),
    fontWeight:'bold'
  },
  addWallet:{
    marginLeft:widthPercentageToDP(2),
    alignContent:'center',
    top:0,
    left:0,right:0,bottom:0,
    alignSelf:'center',
    marginRight:widthPercentageToDP(8)
  },
  iconAddWallet:{
    fontSize:heightPercentageToDP(8),
    color:'#3827B4',
    alignContent:'center',
    top:0,
    left:0,right:0,bottom:0,
    alignSelf:'center',
    justifyContent:'center'
  },
  iconAction:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(10), 
    resizeMode:'contain', 
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
    marginTop:heightPercentageToDP(2),
    
  },
  txtIconAction:{
    fontFamily:'avenir',
    color:'#666',
    textAlign:'center',
    fontSize:heightPercentageToDP(1.5),
    marginBottom:heightPercentageToDP(2),
  },
  headerColumn:{
    flexDirection:'row',
  },
  col7:{
    flex:0.6
  },
  col3:{
    flex:0.4
  },
  txtHistory:{
    fontFamily:'avenir',
    color:'#666',
    marginLeft:widthPercentageToDP(5),
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2),
  },
  txtHistoryAll:{
    fontFamily:'avenir',
    color:'#3827B4',
    textAlign:'right',
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2),
    marginRight:widthPercentageToDP(5)
  },
  iconCoin:{
    width:widthPercentageToDP(6), 
    height:widthPercentageToDP(6), 
    resizeMode:'contain', 
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginLeft:widthPercentageToDP(6)
  },
  txtCoin:{
    fontFamily:'avenir',
    color:'#fff',
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2.5),
    marginLeft:widthPercentageToDP(2)
  },
  iconPencil:{
    fontSize:heightPercentageToDP(2),
    color:'#13a699',
    textAlign:'center'
    // marginRight:widthPercentageToDP(5)
  },
  btnLogin:{
    backgroundColor:'#13a699', 
    borderRadius: 5, 
    height:heightPercentageToDP(6), 
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
  
})

export default EditWallet