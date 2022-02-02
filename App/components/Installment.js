import React from 'react'
import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import AddInstallment from '../modals/AddInstallment'

const { width, height } = Dimensions.get('screen')

const Installment = props => (
  <SafeAreaView>
    <AddInstallment 
      modalVisible = { props.modalVisible }
      closeModal = { props.closeModal }
      onChangeTitle = { props.onChangeTitle }
      valueTitle = { props.valueTitle }
      openCategory = { props.openCategory }
      isOpenListCategories = { props.isOpenListCategories }
      dataCategoryInstallment = { props.dataCategoryInstallment }
      renderItemCategoryInstallment = { props.renderItemCategoryInstallment }
      valueCategory = { props.valueCategory }
      onChangeAmount = { props.onChangeAmount }
      valueAmount = { props.valueAmount }
      onChangeTenor = { props.onChangeTenor }
      valueTenor = { props.valueTenor }
      onChangePaymentDate = { props.onChangePaymentDate }
      valuePaymentDate = { props.valuePaymentDate }
      onChangeNote = { props.onChangeNote }
      valueNote = { props.onChangeNote }
      saveInstallment = { props.saveInstallment }
      checkTitle = { props.checkTitle }
      checkAmount = { props.checkAmount }
      checkDate = { props.checkDate }
      checkTenor = { props.checkTenor }
      errorAmount = { props.errorAmount }
      errorTenor = { props.errorTenor }
      errorDate = { props.errorDate }
      errorTitle = { props.errorTitle }
    />

    <View style={ styles.bg }/>
    <View style={{height:heightPercentageToDP(90)}}>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <AntDesign name="left" style={ styles.iconBack }/>
          <Text style={ styles.txtTitle }>Daftar Cicilan Anda</Text>
          <TouchableOpacity onPress={ props.openModal }>
            <FontAwesome name="plus" style={ styles.iconPlus }/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.content }>
        <FlatList 
          data = { props.data }
          renderItem = { props.renderItem }
        />
      </View>
      
    </View>
    
    <View style={{position:'absolute', bottom:0, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
      <TouchableOpacity onPress={ props.openModal } style={{backgroundColor:'#0047CC', width:widthPercentageToDP(15),height:widthPercentageToDP(15), borderRadius:widthPercentageToDP(7.5), justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
        <FontAwesome name="plus" style={ styles.iconPlus }/>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5)
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    // flex:1
  },
  iconBack:{
    color:'#fff',
    fontWeight:'600',
    fontSize:heightPercentageToDP(2),
    textAlign:'left'
  },
  txtTitle:{
    color:'#fff',
    fontWeight:'600',
    fontSize:heightPercentageToDP(2.5),
    textAlign:'center'
  },
  iconPlus:{
    color:'#fff',
    fontWeight:'600',
    fontSize:heightPercentageToDP(2),
    textAlign:'center'
  },
  bg:{
    backgroundColor:'#0047CC', 
    width:width, 
    height:heightPercentageToDP(10), 
    zIndex:-1, 
    position:'absolute'
  },
  content:{
    marginTop:heightPercentageToDP(5),
    // paddingHorizontal:widthPercentageToDP(5)  
  },
  List:{
    backgroundColor:'#fff',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius:10,
    elevation: 5,
    height:heightPercentageToDP(10),
    // paddingHorizontal:widthPercentageToDP(2),
    // paddingVertical:10,
    marginBottom:heightPercentageToDP(1)
  },
  wrapperDate:{
    alignItems:'center',
    justifyContent:'center',
    width:widthPercentageToDP(15),
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    // backgroundColor:'#ecf0f1'
  },
  txtDate:{
    fontSize:heightPercentageToDP(2.5),
    fontWeight:'600'
  }
})

export default Installment
