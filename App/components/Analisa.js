import React from 'react'

import { View, Text, SafeAreaView, Image, Dimensions, ImageBackground, StyleSheet,TouchableOpacity
,ScrollView,FlatList,RefreshControl } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Entypo'
import Bg from '../assets/images/bgHome.png'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('screen')

import Five from '../assets/Profile/5.jpg'
import verified from '../assets/images/verified.png'
import Setting from '../assets/images/settings.png'
import Security from '../assets/images/security.png'
import Notif from '../assets/images/notification.png'
import AddCard from '../assets/images/AddCard.png'
import addWallet from '../assets/images/col_add.png'
import Card from '../assets/images/Card1.png'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { formatNumber } from 'accounting'
import Loading from '../modals/Loading' 
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'


const Analisa = props => (
  <View style={{backgroundColor:'#FFF',height:undefined}}>
    <SafeAreaView>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView style={{zIndex:2}} refreshControl={
        <RefreshControl 
          refreshing={ props._onRefresh }
          onRefresh = { props._doRefresh }
        />
      }>
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>

      {/* start */}
      <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2)}}>
            <View style={{flex:1}}>
              <Text style={styles.txtTitleHead}>Explore</Text>
            </View>
      </View>
      </View>


      
      
      <View style={styles.card}>
        <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2),
        marginBottom:heightPercentageToDP(1)}}>
              <View style={{flex:0.5}}>
              <Text style={{marginLeft:widthPercentageToDP(2),color:'#464646',
      fontSize:heightPercentageToDP(2)}}>Limit Harian</Text>
              </View>
              <View style={{flex:0.5,marginRight:widthPercentageToDP(2)}}>
              <Text style={{fontSize:heightPercentageToDP(1.5),
                marginBottom:heightPercentageToDP(0.5),
                textAlign:'right',
                color:'#77869E', 
                }}>Rp {formatNumber(props.valueDay)} / Rp {formatNumber(props.valueBalance)}</Text>
              </View>
        </View>
      
      
      <View style={{marginLeft:widthPercentageToDP(2),marginRight:widthPercentageToDP(2)}}>
              <View style={{backgroundColor:'#f8f8f6',
              height:heightPercentageToDP(2),width:'100%',borderRadius:10}}>
                <View style={{backgroundColor:props.valueColor,
                  borderRadius:10,height:heightPercentageToDP(2.3),
                  width:props.valueMinProgress,justifyContent:'center'}}>
                <Text style={{color:'#fff',marginLeft:widthPercentageToDP(2.3),fontWeight:'bold'}}>{props.valueMinProgress}</Text>
                </View>
              </View>
            </View>
      </View>
            
      
      
      {/* month trx */}
      <Text style={{marginLeft:widthPercentageToDP(5),color:'#464646',fontSize:heightPercentageToDP(2)}}>Favorite</Text>
      <ScrollView style={styles.sliderCard} horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList 
          horizontal={true}
          data = { props.dataMonth }
          renderItem = { props.renderItemMonth }
          /> 

          <View style={{marginRight:widthPercentageToDP(5)}}>
          </View>

        </ScrollView>
      {/* end month trx */}

      {/* hr */}
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>
      <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(1.5),
            marginTop:widthPercentageToDP(1)}}></View>
            {/* end hr */}

        <View style={{marginTop:heightPercentageToDP(2)}}>
        {/* <Text style={ styles.txtTrx }>History</Text> */}

        {/* budget */}
        
        <View >
          <TouchableOpacity onPress={props.addBudget}>
            <View style={{backgroundColor:'#13a699', borderRadius:5,width:'36%',height:heightPercentageToDP(3)}}>
              <Text style={{color:'#fff', textAlign:'center',fontSize:heightPercentageToDP(2)}}>+ Budget Baru</Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop:heightPercentageToDP(2)}}></View>
          
          
        <FlatList 
          data = { props.dataBudget }
          renderItem = { props.renderItemBudget }
          /> 
        </View>
        
        {/* end */}
      </View>
        

      {/* end */}

      </View>
      </ScrollView>
    </SafeAreaView>
  </View>
  
)

const styles = StyleSheet.create({
  txtTitleHead:{
    color:'#464646',
    fontFamily:'Avenir',
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2.5),
  },
  iconAddCard:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(7), 
    resizeMode:'contain', 
    alignSelf:'flex-end'
  },
  card:{
        marginLeft:widthPercentageToDP(5),
        marginRight:widthPercentageToDP(5),
        height:heightPercentageToDP(10),
        borderRadius:5,
        backgroundColor:'#fff',
        shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        elevation: 4,
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
    marginLeft:widthPercentageToDP(4),
    fontSize:heightPercentageToDP(3.5),
  },
  iconCard:{
    fontSize:heightPercentageToDP(4.5),
    color:'#3827B4',
    textAlign:'center'
    // marginRight:widthPercentageToDP(5)
  },
  txtBalance:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(3),
    marginLeft:widthPercentageToDP(4)
  },txtBalance1:{
    fontFamily:'avenir',
    color:'#fff',
    fontSize:heightPercentageToDP(2),
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
  wrapperIncome:{
    marginRight:widthPercentageToDP(10), 
    flexDirection:'row', 
    marginTop:heightPercentageToDP(2)
  },
  imgIncome:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(10), 
    resizeMode:'contain', 
    marginRight:widthPercentageToDP(2.5)
  },
  txtTrx:{
    fontSize:heightPercentageToDP(2.5), 
    color:'#042C5C', 
    fontWeight:'600', 
    marginBottom:heightPercentageToDP(2)
  },
  txtReamin:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(2), 
    fontFamily:'Avenir',
    marginBottom:heightPercentageToDP(1)
  },
  txtPercentage:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(2), 
    fontWeight:'400',
    textAlign:'right'
  },
  progresBar:{
    backgroundColor:'#4DF1A1', 
    height:heightPercentageToDP(1.5), 
    width:'10%',
    borderRadius:heightPercentageToDP(0.5), 
    marginTop:heightPercentageToDP(1)
  },
  btnPeriod:{
    width:widthPercentageToDP(28), 
    marginRight:widthPercentageToDP(3.3), 
    backgroundColor:'#DFE7F5', 
    justifyContent:'center', 
    height:heightPercentageToDP(3), 
    borderRadius:5
 
  },
  txtPeriod:{
    textAlign:'center', 
    color:'#0047CC', 
    fontSize:heightPercentageToDP(1.8), 
    fontWeight:'500'
  },
  btnPeriodActive:{
    width:widthPercentageToDP(28), 
    marginRight:widthPercentageToDP(3.3), 
    backgroundColor:'#3827B4', 
    justifyContent:'center', 
    height:heightPercentageToDP(3), 
    borderRadius:5
 
  },
  txtPeriodActive:{
    textAlign:'center', 
    color:'#fff', 
    fontSize:heightPercentageToDP(1.8), 
    fontWeight:'500'
  },
})

export default Analisa

