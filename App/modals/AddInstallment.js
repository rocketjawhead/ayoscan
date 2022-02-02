import React from 'react'
import { Modal, View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity, FlatList, ScrollView } from 'react-native-gesture-handler'
import { TextInputMask } from 'react-native-masked-text'
import { formatNumber } from 'accounting'

const AddInstallment = props => (
  <Modal
    animationType="fade"
    transparent
    visible={props.modalVisible}
  >
    <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'rgba(0, 0, 0,0.7)'}}>
      <KeyboardAvoidingView behavior='padding' enabled style={{marginTop:heightPercentageToDP(5)}}>
        <View style={{height:heightPercentageToDP(80), width:widthPercentageToDP(80), backgroundColor:'#fff', alignSelf:'center', borderRadius:10}}>
          <View style={{width:widthPercentageToDP(80), height:heightPercentageToDP(7), backgroundColor:'#0047CC', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'center'}}>
            <Text style={{color:'#fff', fontSize:heightPercentageToDP(2), fontWeight:'600', textAlign:'center'}}>Tambah Cicilan</Text>
          </View>
          
          {/* <ScrollView> */}
              <View style={{marginHorizontal:widthPercentageToDP(2)}}>
                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View style={ props.errorTitle ? styles.contentInputNull : styles.contentInput }>
                    <Text style={ styles.titleInput }>Judul</Text>
                    <TextInput 
                      style={ styles.input } 
                      onChangeText={ props.onChangeTitle } 
                      value={ props.valueTitle }
                      maxLength={50}
                      onEndEditing = { props.checkTitle }
                    />
                  </View>
                </View>
                
                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View>
                    {/* { console.log('category', props.valueCategory )} */}
                    <Text style={ styles.titleInput }>Kategori</Text>
                    <TouchableOpacity style={ styles.button } onPress={ props.openCategory }>
                      <Text style={{marginHorizontal:10}}>{ props.valueCategory == '' ? '-Pilih Kategori-' : props.valueCategory }</Text>
                    </TouchableOpacity>
                  </View>
                  { props.isOpenListCategories ?
                    <View style={ styles.wrapperListCategories }>
                      <FlatList 
                        data = { props.dataCategoryInstallment }
                        renderItem = { props.renderItemCategoryInstallment }
                      />
                    </View>:<View/>
                  }
                  
                </View>

                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View style={ props.errorAmount ? styles.contentInputNull : styles.contentInput }>
                    <Text style={ styles.titleInput }>Jumlah</Text>
                    <TextInput
                      style={ styles.input } 
                      onChangeText={ props.onChangeAmount } 
                      value={ formatNumber(props.valueAmount) }
                      maxLength={ 15 }
                      keyboardType="number-pad"
                      onEndEditing={ props.checkAmount }
                    />
                  </View>
                </View>

                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View style={ props.errorTenor ? styles.contentInputNull : styles.contentInput }>
                    <Text style={ styles.titleInput }>Tenor</Text>
                    <TextInput
                      style={ styles.input } 
                      onChangeText={ props.onChangeTenor } 
                      value={ props.valueTenor }
                      keyboardType="number-pad"
                      maxLength={4}
                      onEndEditing={ props.checkTenor }
                    />
                  </View>
                </View>

                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View style={ props.errorDate ? styles.contentInputNull : styles.contentInput }>
                    <Text style={ styles.titleInput }>Tanggal</Text>
                    <TextInputMask
                      type={'datetime'}
                      options={{
                        format: 'DD'
                      }}
                      style={ styles.input } 
                      onChangeText={ props.onChangePaymentDate } 
                      value={ props.valuePaymentDate }
                      onEndEditing={ props.checkDate }
                    />
                  </View>
                </View>
                <View style={{ marginTop:heightPercentageToDP(2)}}>
                  <View style={ styles.contentInput }>
                    <Text style={ styles.titleInput }>Catatan</Text>
                    <TextInput 
                      style={ styles.input } 
                      onChangeText={ props.onChangeNote } 
                      value={ props.valueNote }
                      maxLength={ 50 }
                    />
                  </View>
                </View>
              
              </View>
                      { console.log(props.valueAmount == '')}
            <TouchableOpacity 
              disabled={ props.valueAmount == '' || props.valueTenor == '' || props.valueNote == '' || props.valuePaymentDate == '' ? true : false }
              onPress={ props.saveInstallment } 
              style={ props.valueAmount == '' || props.valueTenor == '' || props.valueNote == '' || props.valuePaymentDate == '' ? styles.buttonSave : styles.buttonSaveDis }>
              <Text style={ styles.txtSave }>SIMPAN CICILAN</Text>
            </TouchableOpacity>
          {/* </ScrollView> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  
  
  </Modal>
)

const styles = StyleSheet.create({
  contentInput:{
    borderBottomWidth:1, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1)
  },
  contentInputNull:{
    borderBottomWidth:1, 
    borderColor:'#F24750', 
    paddingVertical:heightPercentageToDP(1)
  },
  button:{
    borderWidth:1, 
    borderColor:'#dfe6e9', 
    paddingVertical:heightPercentageToDP(1)
  },
  titleInput:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.7)
  },
  input:{
    color:'#042C5C', 
    fontSize:heightPercentageToDP(1.8)
  },
  wrapperListCategories:{
    borderWidth:1, 
    borderColor:'#dfe6e9', 
    backgroundColor:'#fff',
    padding:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    maxHeight:heightPercentageToDP(15)
  },
  buttonSave:{
    backgroundColor:'#0047CC', 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(70), 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:10,
    alignSelf:'center',
    marginTop:heightPercentageToDP(3)
  },
  buttonSaveDis:{
    backgroundColor:'#74b9ff', 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(70), 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:10,
    alignSelf:'center',
    marginTop:heightPercentageToDP(3)
  },
  txtSave:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'600'
  }
})

export default AddInstallment