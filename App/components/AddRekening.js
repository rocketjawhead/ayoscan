import React from 'react'

import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList, Vibration } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { formatNumber } from 'accounting'
import pencil from '../assets/images/pencil.png'
import { URL_API_BLOG_ASSETS } from '../env'
import Loading from '../modals/Loading' 
const AddRekening = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
  <ScrollView vertical={true}>
    <View style={ styles.header }>
      <View style={styles.col8}>
        <Text style={ styles.txtEmail }>Tambah Rekening</Text>
      </View>
      <View style={styles.col2}>
      {/* <IconAnt name="close" style={ styles.iconBack } onPress={props.goBack}/> */}
      </View>
      
    </View>
    
    <View style={{marginTop:heightPercentageToDP(1),
        marginHorizontal:widthPercentageToDP(2)}}>

        <TouchableOpacity onPress={props.openBank}>
            <View style={styles.fieldBox}>
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
              <View style={{flex:0.2}}>
                <IconAnt name="creditcard" style={ styles.iconCard } onPress={props.goBack}/>
              </View>
              <View style={{flex:0.8}}>
              {props.valueNamaBank == '' ?
                <Text style={styles.txtTitleWallet}>Pilih Bank</Text>:   
                <Text style={styles.txtTitleWallet}>{props.valueNamaBank}</Text> 
                }
              </View>
            </View>
            
            </View>

        </TouchableOpacity>

        {/* <Text style={{color:'#666',
    fontFamily:'Avenir',
    marginTop:heightPercentageToDP(1.5)}}>Nama Rekening</Text> */}
        <TextInput 
            placeholder="Judul Rekening"
            style={ styles.input } 
            onChangeText={ props.onChangeNamarek } 
            value={ props.valueNamarek }
            maxLength={50}
        />

        {/* <Text style={{color:'#666',
    fontFamily:'Avenir',
    marginTop:heightPercentageToDP(1.5)}}>Nomor Rekening</Text> */}
        <TextInput 
            placeholder="Nomor Rekening"
            keyboardType={'numeric'}
            style={ styles.input } 
            onChangeText={ props.onChangeNorek } 
            value={ props.valueNorek }
            maxLength={50}
        />

        
    </View>

    <View style={{borderRadius:10,marginTop:heightPercentageToDP(3),
      marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
                <TouchableOpacity onPress={ props.AddRekening } style={ styles.btnLogin } >
                  <Text style={ styles.txtLogin }>Simpan</Text>
                </TouchableOpacity>
              </View>
    <View style={{borderRadius:10,marginTop:heightPercentageToDP(1),marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5)}}>
      <TouchableOpacity onPress={ props.goBack } style={ styles.btnLoginDisabled } >
        <Text style={ styles.txtBack }>Kembali</Text>
      </TouchableOpacity>
    </View>


  </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{  
    backgroundColor:'#ffffff'
  },
  txtTitleWallet:{
    fontSize:heightPercentageToDP(2),
    color:'#464646',
    marginTop:heightPercentageToDP(1)
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
  inputCard:{
      color:'#fff',
      fontSize:heightPercentageToDP(5),
      marginLeft:widthPercentageToDP(3),
      fontWeight:'bold',
      fontFamily:'avenir',
      justifyContent:'center'
  },
  input:{
    color:'#464646', 
    fontSize:heightPercentageToDP(2),
    borderBottomWidth:2, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1),
    marginRight:widthPercentageToDP(5),
    // fontWeight:'bold'
    marginHorizontal:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(1)
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
    color:'#13a699',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    justifyContent:'center',
    marginRight:widthPercentageToDP(5)
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
    color:'#3827B4',
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
  
})

export default AddRekening