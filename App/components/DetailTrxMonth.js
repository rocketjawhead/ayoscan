import React from 'react'

import { View, Text, SafeAreaView, Image, Dimensions, ImageBackground, StyleSheet,TouchableOpacity
,ScrollView,FlatList } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Entypo'
import Bg from '../assets/images/bgHome.png'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('screen')
import IconAnt from 'react-native-vector-icons/AntDesign'
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


const DetailTrxMonth = props => (
  <View style={{backgroundColor:'#FFF'}}>
    <SafeAreaView>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>

      {/* start */}
      <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2)}}>
            <View style={{flex:0.8}}>
              <Text style={styles.txtTitleHead}>Detail Favorit</Text>
            </View>
            <View style={{flex:0.2}}>
            <IconAnt name="close" style={ styles.iconBack } onPress={props.goBack}/>
            </View>  
      </View>


        <View style={{marginTop:heightPercentageToDP(2)}}>
        <FlatList 
          data = { props.dataMonth }
          renderItem = { props.renderItemMonth }
          /> 
        </View>
        

      {/* end */}

      </View>
      </ScrollView>
    </SafeAreaView>
  </View>
  
)

const styles = StyleSheet.create({
  txtTitleHead:{
    color:'#042C5C',
    fontFamily:'Avenir',
    fontWeight:'bold',
    fontSize:heightPercentageToDP(2.5),
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    color:'#464646',
    alignContent:'flex-end',
    alignItems:'flex-end',
    textAlign:'right',
    marginRight:widthPercentageToDP(2)
  },
  iconAddCard:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(7), 
    resizeMode:'contain', 
    alignSelf:'flex-end'
  },
  card:{
    height:heightPercentageToDP(25),
    width:widthPercentageToDP(75),
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
    width:widthPercentageToDP(20), 
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
    width:widthPercentageToDP(20), 
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

export default DetailTrxMonth

