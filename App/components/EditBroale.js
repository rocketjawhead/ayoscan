import React from 'react'

import { View, Text, SafeAreaView, FlatList, TextInput, Dimensions, Button } from 'react-native'
import {  } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen')

const EditBroAle = props => (

  <SafeAreaView style={{marginHorizontal:15}}>
    <View style={{borderBottomWidth:1, marginVertical:20}}>
      <Text>Firstname</Text>
      <TextInput 
        onChangeText={ props.onChangeFirstname } 
        style={{width:width, marginVertical:10}}
        value={ props.valueFirstname }
      />
    </View>
    <View style={{borderBottomWidth:1}}>
      <Text>Lastname</Text>
      <TextInput 
        onChangeText={ props.onChangeLastname } 
        style={{width:width, marginVertical:10}}
        value={ props.valueLastname }
      />
    </View>

    <View style={{ marginTop:15 }}>
      <Button title="KIRIM" color='#0984e3' onPress={ props.save }/>
    </View>
  </SafeAreaView>

)

export default EditBroAle