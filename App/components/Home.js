import React from 'react'

import { FlatList,View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, 
  ScrollView,ImageBackground,RefreshControl } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'

import Loading from '../modals/Loading' 
import ModalVersion from '../modals/ModalVersion' 
const Home = props => (
  <SafeAreaView style={{backgroundColor:'#FFF'}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    {/* { props.valueVersion == 1 ? <ModalVersion /> : <View /> } */}
    <ScrollView style={{zIndex:2}} refreshControl={
        <RefreshControl 
          refreshing={ props._onRefresh }
          onRefresh = { props._doRefresh }
        />
      }>
      <View style={styles.header}>
        <View style={{flex:0.8}}>
          <Text style={styles.txtGreeting}>{props.valueGreeting}</Text>
          <Text style={styles.txtName}>{props.fullname}</Text>
        </View>
        <View style={{flex:0.2}}>
          {props. valueTotalNotif > 0 ?
          <IconFA name="bell" style={ styles.iconNotif } onPress={props.toMessage}/>
          :
          <IconFA name="bell-o" style={ styles.iconNotif } onPress={props.toMessage}/>
          }
        </View>
      </View>

      <View style={{marginHorizontal:heightPercentageToDP(2)}}>
          {/* saldo */}
          <View style={{flexDirection:'row'}}>
              <View style={{flex:0.8}}>
                  <Text style={{fontSize:heightPercentageToDP(4.5),fontStyle:'bold'}}>Rp {formatNumber(props.CurrentBalance)}</Text>
                  <Text>My Balance</Text>
              </View>
              <View style={{flex:0.2}}>
                  <Image source={{uri: 'https://www.bobobox.co.id/blog/wp-content/uploads/2021/01/Screen-Shot-2021-01-26-at-12.28.01-PM.jpg'}} 
                  style={{height:heightPercentageToDP(8),width:heightPercentageToDP(8),borderRadius:50}}
                  />
              </View>
          </View>

          {/* box */}
          <View style={styles.viewBox}>
              <View style={styles.flex25}>
                  <IconAnt name="scan1" style={ styles.iconBox }/>
                  <Text style={{color:'#fff'}}>Scan</Text>
              </View>
              <View style={styles.flex25}>
                  <IconAnt name="qrcode" style={ styles.iconBox }/>
                  <Text style={{color:'#fff'}}>Pay</Text>
              </View>
              
              <View style={styles.flex25}>
                  <IconAnt name="rocket1" style={ styles.iconBox }/>
                  <Text style={{color:'#fff'}} onPress={props.toTransfer}>Transfer</Text>
              </View>
              

              <View style={styles.flex25}>
                  <IconAnt name="download" style={ styles.iconBox }/>
                  <Text style={{color:'#fff'}}>Topup</Text>
              </View>
          </View>


          {/* menu */}
          <View style={{flexDirection:'row'}}>
              <View style={styles.flex50}>

                <View style={styles.listMenu}>
                  <IconAnt name="mobile1" style={ styles.iconMenuPulsa }/>
                  <Text style={styles.txtListMenu}>Pulsa</Text>
                </View>

                <View style={styles.listMenu}>
                  <IconAnt name="earth" style={ styles.iconMenuInet }/>
                  <Text style={styles.txtListMenu}>Paket Internet</Text>
                </View>

                <View style={styles.listMenu}>
                  <IconFA name="gamepad" style={ styles.iconMenuGame }/>
                  <Text style={styles.txtListMenu}>Voucher Game</Text>
                </View>
              
              </View>
              <View style={styles.flex50}>

                <View style={styles.listMenu}>
                  <IconFA name="th-large" style={ styles.iconMenuTagihan }/>
                  <Text style={styles.txtListMenu}>Tagihan</Text>
                </View>

                <View style={styles.listMenu}>
                  <IconFA name="flash" style={ styles.iconMenuPln }/>
                  <Text style={styles.txtListMenu}>Pulsa PLN</Text>
                </View>

                <View style={styles.listMenu}>
                  <IconEntypo name="credit-card" style={ styles.iconMenuEmoney }/>
                  <Text style={styles.txtListMenu}>Emoney</Text>
                </View>
              </View>
          </View>


          {/* Promos */}
          <View style={{marginTop:heightPercentageToDP(2),marginBottom:heightPercentageToDP(2)}}>
            <Text style={{fontSize:heightPercentageToDP(2.5),fontStyle:'bold'}}>Promo</Text>
          </View>
      </View>

      <FlatList 
        data = { props.data }
        renderItem = { props.renderItem }
      />
   

    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#fff'
  },
  txtListMenu:{
    marginTop:heightPercentageToDP(1)
  },
  listMenu:{
    flex: 1,
    flexDirection: 'row',
    marginTop:heightPercentageToDP(3.5)
    // alignItems: 'left',
    // justifyContent: 'flex-start'
  },
  viewBox:{
    flexDirection:'row',
    backgroundColor:'#337DEF',
    borderRadius:5,
    marginTop:heightPercentageToDP(2)
  },
  flex25:{
    flex:2.5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2)
  },
  flex50:{
    flex:5,
    // alignItems:'center',
    // justifyContent:'center',
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2),
    marginHorizontal:heightPercentageToDP(5)
  },
  iconBox:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#fff'
  },
  iconMenu:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#666',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuPulsa:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#D98000',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuInet:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#0084D9',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuGame:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#06BC3D',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuTagihan:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#E61616',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuPln:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#D0E616',
    marginRight:heightPercentageToDP(2)
  },
  iconMenuEmoney:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#1675E6',
    marginRight:heightPercentageToDP(2)
  },
  iconNotif:{
    fontSize:heightPercentageToDP(3),
    marginTop:heightPercentageToDP(1),
    color:'#13a699',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(5)
  },
  boxIcon:{
    // marginLeft:widthPercentageToDP(2.5),
    // marginRight:widthPercentageToDP(2.5),
    borderRadius:50,
    backgroundColor:'#fff',
    shadowColor: "#666",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    marginBottom:heightPercentageToDP(1)
  },
  txtIcon:{fontFamily:'avenir',
  color:'#666',
  textAlign:'center',
  fontSize:heightPercentageToDP(1.6),
  marginBottom:heightPercentageToDP(2),
  marginTop:heightPercentageToDP(1)
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
  header:{
    marginLeft:widthPercentageToDP(5),  
    backgroundColor:'#FFF',
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(3),
    flexDirection:'row'
  },
  txtGreeting:{
    color:'#939498'
  },
  txtName:{
    color:'#575965',
    fontSize:heightPercentageToDP(2.5),
    fontWeight:'bold',
  },
  BalancePoin:{
    flexDirection:'row',
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5),
    borderColor:'#666',
    borderWidth:0.5,
    borderRadius:20,
    marginTop:heightPercentageToDP(2)
  },
  txtBalance:{
    fontSize:heightPercentageToDP(3),
    textAlign:'center',
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2)
  },
  txtPoin:{
    fontSize:heightPercentageToDP(3),
    textAlign:'center',
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2)
  },
  card:{
    // marginLeft:widthPercentageToDP(1),
    height:heightPercentageToDP(17),
    width:widthPercentageToDP(70),
    borderRadius:12,
    backgroundColor:'#13a699',
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
    // marginRight:widthPercentageToDP(2)
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
  wrapperIncome: {
    marginRight: widthPercentageToDP(5),
    flexDirection: 'row',
    marginTop: heightPercentageToDP(2)
  },
  imgIncome: {
    width: widthPercentageToDP(10),
    height: widthPercentageToDP(10),
  },
})

export default Home