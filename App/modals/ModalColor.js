import React from 'react'
import { View,TextInput, Text, StyleSheet, Modal, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from '../assets/colors';
import { responsiveFontSize } from '../particles/converter';
// import {  } from 'react-native-gesture-handler';


const ModalColor = props => (
  <Modal
    animationType="fade"
    visible={props.modalVisibleColor}
  >
    <SafeAreaView style={ styles.SafeArea }/>
    <View style={{marginBottom: heightPercentageToDP(5)}}>
    
    <View style={{flexDirection:'row'}}>
          <View style={{flex:0.5}}>
              <Text style={{
                marginLeft:widthPercentageToDP(2),
                color:'#666',
                fontSize:heightPercentageToDP(3),
                marginTop:heightPercentageToDP(2),
                marginBottom:heightPercentageToDP(3)
                }}>Pilih Warna Kartu</Text>
          </View>
          <View style={{flex:0.5}}>
              <TouchableOpacity onPress={ props.closeColor }>
                <AntDesign name="close" style={ styles.iconClose }/>
              </TouchableOpacity>
          </View>
    </View>

      <View style={ styles.MainWrapper }>
        { props.renderListColor }
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  SafeArea:{
    backgroundColor:colors.bright_cyan
  },
  SearchWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  txtInput:{
    // borderBottomWidth:1,
    width:widthPercentageToDP(83)
  },
  iconClose:{
    textAlign:'right',
    fontSize:heightPercentageToDP(3.5),
    marginRight:widthPercentageToDP(5),
    color:'#666',
    marginTop:heightPercentageToDP(2)
  },
  MainWrapper:{
    height:heightPercentageToDP(85),
    
  },
  ListWrapper:{
    // borderWidth:1,
    borderRadius:5,
    padding:widthPercentageToDP(1.5),
    // borderColor:colors.slate_grey,
    marginBottom:heightPercentageToDP(0.5)
  },
  txtName:{
    fontSize:responsiveFontSize(1.5)
  },
  txtPhone:{
    fontSize:responsiveFontSize(1.7),
    color:colors.cool_grey
  }
})

export default ModalColor