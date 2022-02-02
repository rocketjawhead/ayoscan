import React from 'react'

import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList, Vibration } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { formatNumber } from 'accounting'
import Gas from '../assets/images/Gas.png'
import Card from '../assets/images/card.png'
import coin from '../assets/images/coin.png'

import footer_background from '../assets/images/footer_background.png'
import header_background from '../assets/images/header_background.png'
import addWallet from '../assets/images/col_add.png'
import add from '../assets/images/col_pemasukan1.png'
import remove from '../assets/images/col_pengeluaran.png'
import transfer from '../assets/images/col_transfer.png'
import installment from '../assets/images/col_cicilan.png'
const Home = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
  <ScrollView vertical={true}>
    <View style={ styles.header }>
      <View style={styles.col8}>
        <Text style={ styles.txtGreating }>{ props.infoGreeting }</Text>
        <Text style={ styles.txtEmail }>{ props.email }</Text>
        
      </View>
      <View style={styles.col2}>
      <Icon name="bell" style={ styles.iconBack } onPress={props.goBack}/>
      </View>
      
    </View>
    <View style={styles.bodyCard}>
        <ScrollView style={styles.sliderCard} horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <TouchableOpacity onPress={ props.toIncome } style={styles.card}>
            <View style={styles.cardColoumn}>
              <View style={styles.col8}>
                  <Text style={styles.cardTitle}>All Wallet</Text>
              </View>
              <View style={styles.col2}>
              <Icon name="wallet" style={ styles.iconCard } />
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.6}}>
                  <Text style={styles.txtBalance}>Balance</Text>
                  <View style={styles.boxAmount}>
                    <Text style={styles.txtIdr}>Rp <Text style={styles.txtAmount}>10.000.000</Text></Text>  
                  </View>
                </View>
                <View style={{flex:0.5}}>
                <Text style={styles.txtBalance}>Poin</Text>
                  <View style={styles.boxAmount}>
                    <Text style={styles.txtAmount}>100.000</Text>  
                  </View>
                </View>
            </View>
          </TouchableOpacity>

          {/* start flatlist wallet disini */}
          <FlatList 
          data = { props.dataWallet }
          renderItem = { props.renderItemWallet }
          /> 
          {/* end flatlist wallet disini */}

          <TouchableOpacity onPress={ props.addWallet } style={styles.addWallet}>
              <Image source={addWallet} style={styles.iconAction }/>
          </TouchableOpacity>

        </ScrollView>
    </View>
    {/* hr */}
    {/* <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(1.5),
    marginTop:widthPercentageToDP(1)}}></View> */}
      {/* end hr */}
    <View style={styles.bodyAction}>
        <TouchableOpacity onPress={ props.toIncome }>
          <View style={styles.boxIcon}>
            <Image source={add} style={styles.iconAction }/>
          </View>
          <Text style={styles.txtIconAction}>Pemasukan</Text>
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
    <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(1.5),
    marginTop:widthPercentageToDP(2)}}></View>
      {/* end hr */}
    <View style={styles.bodyHistory}>
        <View style={styles.headerColumn}>
            <View style={styles.col7}>
                <Text style={styles.txtHistory}>Histori Transaksi</Text>
            </View>
            <View style={styles.col3}>
                <Text style={styles.txtHistoryAll}>Lihat Semua</Text>
            </View>
        </View>
    </View>
  </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{  
    backgroundColor:'#ffffff'
  },
  header:{
    flexDirection:'row'
  },
  bodyCard:{
    // marginTop:heightPercentageToDP(2)
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
    fontWeight:'bold'
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    marginTop:heightPercentageToDP(4),
    color:'#3827B4',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5)
  },
  sliderCard:{
    flexDirection:'row', 
    marginBottom:10
  },
  boxIcon:{
    borderRadius:50,
    // backgroundColor:'#3827B4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1.2,
    marginLeft:widthPercentageToDP(2),
    marginRight:widthPercentageToDP(2),
    // height:heightPercentageToDP(2),
    // marginTop:heightPercentageToDP(2)
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
    marginLeft:widthPercentageToDP(3.5),
    marginRight:widthPercentageToDP(3.5),
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2),
    
  },
  txtIconAction:{
    fontFamily:'avenir',
    color:'#666',
    textAlign:'center',
    fontSize:heightPercentageToDP(1.5),
    marginBottom:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(1),
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
  }
  
})

export default Home