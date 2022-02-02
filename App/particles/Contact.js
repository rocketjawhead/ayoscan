import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Contact = props => (
  <TouchableOpacity style={{margin: 20}} onPress={ props.onPress }>
    <View style={{flexDirection:'row', borderWidth:1}}>
      <Image source={{uri:props.imageUrl}} style={{ height:100, width: 100}}/>
      <View>
        <Text>{ props.firstname } { props.lastname }</Text>
        <Text>{ props.email }</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default Contact 