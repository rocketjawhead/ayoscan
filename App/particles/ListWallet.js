import React from 'react'
import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList, Vibration } from 'react-native'

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import Icon from 'react-native-vector-icons/Entypo'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'

const ListWallet = props => (
    <TouchableOpacity style={{marginLeft:widthPercentageToDP(5),
        height:heightPercentageToDP(17),
        width:widthPercentageToDP(65),
        borderRadius:12,
        backgroundColor: props.color,
        // backgroundColor:'{props.color}',
        // backgroundColor:'#666',
        // shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 8,
        marginBottom:heightPercentageToDP(2),
        marginTop:heightPercentageToDP(2)}} onPress={props.toDetailWallet}>
    <View style={styles.cardColoumn}>
      <View style={styles.col8}>
          <Text style={styles.cardTitle}>{props.name.toUpperCase()}</Text>
      </View>
      <View style={styles.col2}>
      <Icon name="wallet" style={ styles.iconCard }/>
      </View>
    </View>

    <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
          <Text style={styles.txtBalance}>Balance</Text>
          <View style={styles.boxAmount}>
            <Text style={styles.txtIdr}>Rp <Text style={styles.txtAmount}>{ formatNumber(props.amount) }</Text></Text>  
          </View>
        </View>
    </View>
  </TouchableOpacity>
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
        marginTop:heightPercentageToDP(1),
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
      card:{
        marginLeft:widthPercentageToDP(5),
        height:heightPercentageToDP(1),
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
        fontWeight:'bold'
      },
      iconCard:{
        fontSize:heightPercentageToDP(2.5),
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
        marginLeft:widthPercentageToDP(6),
        marginRight:widthPercentageToDP(6)
      },
      txtIconAction:{
        fontFamily:'avenir',
        color:'#666',
        textAlign:'center',
        fontSize:heightPercentageToDP(1.5),
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

export default ListWallet