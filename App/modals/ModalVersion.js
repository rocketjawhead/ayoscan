import React from 'react'
import {View, SafeAreaView, StyleSheet, Text, Dimensions, Modal, TouchableOpacity, Image,Linking} from 'react-native'
import { convertHeightPercentToDP } from '../particles/converter'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import notifUpdate from '../assets/images/notif_update.png'
// import {Fonts} from '../js/Fonts'
// import colors from '../assets/colors';

const {height, width} = Dimensions.get('window')
const ModalVersion = props => (
  <Modal
  animationType="fade"
  transparent>
    <View style = {styles.container}>
      
      <View style={styles.conten}>
        <Image source={notifUpdate} style={{resizeMode:'contain', width:widthPercentageToDP(60), height:widthPercentageToDP(20), marginTop:heightPercentageToDP(5)}}/>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:heightPercentageToDP(4)}}>

          <Text style={styles.text1}>Update Available</Text>
          <Text style={{ marginHorizontal:10, textAlign:'center', marginTop:heightPercentageToDP(1)}}>Versi Terbaru Tersedia</Text>
        </View>
          <View style = {styles.buttonChoose}>
            <TouchableOpacity style={styles.button2} onPress={ () => Linking.openURL('https://play.google.com/store/apps/details?id=com.demopay.android') }>
              <Text style={styles.buttonUpdate}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    zIndex:99,
    backgroundColor:'rgba(0, 0, 0, 0.2)',
    height:height,
    width:width,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
    },
    conten:{
      justifyContent:'center',
      alignItems:'center',
      height:convertHeightPercentToDP(45),
      width:widthPercentageToDP(80),
      backgroundColor:'#fff',
      borderRadius:10,
      paddingBottom:heightPercentageToDP(5)
    },
    text1:{
      fontSize:20,
    },
    text2:{
      marginHorizontal:widthPercentageToDP(5),
      textAlign:'center',

    },
    
    buttonChoose:{
      flexDirection:'row',
      marginTop:heightPercentageToDP(5),
      height:heightPercentageToDP(10),
      width:widthPercentageToDP(80),
      justifyContent:'center',
    },
    
    button1:{
      height:heightPercentageToDP(5),
      width:widthPercentageToDP(30),
      borderWidth:1,
      borderColor:'#464646',
      borderRadius: 5,
      marginRight:5,
      paddingVertical: 13,
      justifyContent:'center'
    },
    button2:{
      height:heightPercentageToDP(5),
      width:widthPercentageToDP(30),
      backgroundColor:'#3827B4',
      borderRadius: 5,
      marginLeft:5,
      paddingVertical: 13,
      justifyContent:'center'
    },
    buttonCancel:{

      fontSize:16,
      fontWeight:'500',
      color:'#464646',
      textAlign:'center',
    },
    buttonUpdate:{
      fontSize:16,
      fontWeight:'500',
      color:'#fff',
      textAlign:'center',
    },
  })
export default ModalVersion