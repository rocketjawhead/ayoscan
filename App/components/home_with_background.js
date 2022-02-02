import React from 'react'

import { FlatList,View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import col_wallet from '../assets/images/col_wallet.png'
import header_background from '../assets/images/header_background.png'

import addWallet from '../assets/images/col_add.png'
import add from '../assets/images/col_pemasukan1.png'
import remove from '../assets/images/col_pengeluaran.png'
import transfer from '../assets/images/col_transfer.png'
import installment from '../assets/images/col_cicilan.png'

const Home = props => (
  <SafeAreaView style={{backgroundColor:'#fff'}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={styles.header}>
          <ImageBackground source={header_background} style={
              { width:500, height:500,marginTop:heightPercentageToDP(-30),zIndex:-1}} />
      </View>
      <View style={styles.headAmount}>
        <View style={{flex:0.7}}>
              <Text style={styles.txtTitleHead}>HEYFLOW</Text>
            </View>
            <View style={{flex:0.3}}>
              <Icon name="bell" style={ styles.iconBack } onPress={props.openCategory}/>
            </View>
            
      </View>
      
      <Text style={styles.txtHeader}>Total Balance</Text>
          <Text style={styles.txtHeaderAmount}>Rp {formatNumber(props.valueCurrentBalance)}</Text>
      <View style={styles.boxHeaderLastAmount}>
      </View>
          <Text style={styles.txtLastAmount}>{props.valueLastType} Rp {formatNumber(props.valueLastTransaction)}</Text>



      <View style={styles.body}>
        <Text style={{
        textAlign:'center',
        color:'#666',
        fontSize:heightPercentageToDP(2.5),
        marginTop:heightPercentageToDP(1)
        }}>ALL WALLET</Text>
      <ScrollView style={styles.sliderCard} horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <TouchableOpacity onPress={ props.toIncome } style={styles.card}>
            <View style={styles.cardColoumn}>
              <View style={styles.col8}>
                  <Text style={styles.cardTitle}>Poin</Text>
              </View>
              <View style={styles.col2}>
              <Icon name="wallet" style={ styles.iconCard } />
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text style={styles.txtBalance}>Balance</Text>
                  <View style={styles.boxAmount}>
                    <Text style={styles.txtIdr}><Text style={styles.txtAmount}>10.000</Text></Text>  
                  </View>
                </View>
            </View>
          </TouchableOpacity>

          <FlatList 
          data = { props.dataWallet }
          renderItem = { props.renderItemWallet }
          /> 

          <TouchableOpacity onPress={ props.addWallet } style={styles.addWallet}>
              <Image source={addWallet} style={styles.iconAction }/>
          </TouchableOpacity>

        </ScrollView>
      </View>

      <View style={styles.bodyAction}>

        <TouchableOpacity onPress={ props.toIncome }>
          <View style={styles.boxIcon}>
            <Image source={add} style={styles.iconAction }/>
            <Text style={styles.txtIconAction}>Pemasukan</Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.boxIcon}>
            <Image source={remove} style={styles.iconAction }/>
          </View>
          <Text style={styles.txtIconAction}>Pengeluaran</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.boxIcon}>
            <Image source={transfer} style={styles.iconAction }/>
          </View>
          <Text style={styles.txtIconAction}>Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.boxIcon}>
            <Image source={installment} style={styles.iconAction }/>
          </View>
          <Text style={styles.txtIconAction}>Cicilan</Text>
        </TouchableOpacity>
          
    </View>

      {/* hr */}
      {/* <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(1.5),
    marginTop:widthPercentageToDP(2)}}></View> */}
      {/* end hr */}
      {/* <View style={styles.bodyHistory}>
        <View style={styles.headerColumn}>
            <View style={styles.col7}>
                <Text style={styles.txtHistory}>Histori Transaksi</Text>
            </View>
            <View style={styles.col3}>
                <Text style={styles.txtHistoryAll}>Lihat Semua</Text>
            </View>
        </View>
    </View> */}
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#fff'
  },
  bodyAction:{
    // marginTop:heightPercentageToDP(1),
    backgroundColor:'#ffffff',
    flexDirection:'row',
    alignSelf:'center'
  },
  boxIcon:{
    // borderRadius:50,
    // backgroundColor:'#3827B4',
    // shadowColor: "#3827B4",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 1.2,
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
    borderColor:'#3827B4'
    // height:heightPercentageToDP(2),
    // marginTop:heightPercentageToDP(2)
  },
  bodyHistory:{
    marginTop:heightPercentageToDP(2)
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
    top:heightPercentageToDP(7),
    right:0,
    left:0,
    bottom:0,
    textAlign:'center',
    color:'#fff',
    fontSize:heightPercentageToDP(2.5),
  },
  txtHeaderAmount:{
    position:'absolute',
    top:heightPercentageToDP(11),
    right:0,
    left:0,
    bottom:0,
    textAlign:'center',
    color:'#fff',
    fontSize:heightPercentageToDP(5),
  },
  txtLastAmount:{
    position:'absolute',
    top:heightPercentageToDP(21),
    right:0,
    left:0,
    bottom:0,
    textAlign:'center',
    color:'#666',
    fontSize:heightPercentageToDP(2),
  },
  boxHeaderLastAmount:{
    position:'absolute',
    top:heightPercentageToDP(20),
    right:0,
    flex:1,
    left:0,
    bottom:0,
    backgroundColor:'#DFD4EE',
    height:heightPercentageToDP(5),
    textAlign:'center',
    borderRadius:20,
    marginLeft:widthPercentageToDP(30),
    marginRight:widthPercentageToDP(30),
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
  sliderCard:{
    flexDirection:'row', 
    marginBottom:10
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
    color:'#042C5C', 
    fontSize:heightPercentageToDP(2.5),
    borderBottomWidth:2, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1),
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
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
    fontSize:heightPercentageToDP(2.5),
    color:'#3827B4',
    textAlign:'center',
    marginRight:widthPercentageToDP(5)
  },
  txtTitleWallet:{
    fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2.5)
  },
  card:{
    marginLeft:widthPercentageToDP(5),
    height:heightPercentageToDP(17),
    width:widthPercentageToDP(65),
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
    marginTop:heightPercentageToDP(2),
    
  },
  cardTitle:{
    fontFamily:'avenir',
    color:'#fff',
    marginLeft:widthPercentageToDP(4)
  },
  iconCard:{
    fontSize:heightPercentageToDP(3),
    color:'#fff',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5)
  },
  txtBalance:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(1.5),
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
    fontSize:heightPercentageToDP(1.5),
  },
  txtAmount:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(3),
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
    
  },
  txtIconAction:{
    fontFamily:'avenir',
    color:'#666',
    textAlign:'center',
    fontSize:heightPercentageToDP(1.8),
    marginBottom:heightPercentageToDP(2),
  },
  col8:{
    flex:0.8
  },
  col2:{
    flex:0.2
  },
})

export default Home