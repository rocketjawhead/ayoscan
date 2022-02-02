import React from 'react'
import { TouchableOpacity, Text} from 'react-native'

const ListGender = props => (
  <TouchableOpacity style={{borderBottomWidth:1, borderColor:'#dfe6e9', paddingVertical:7}} onPress={ props.selectCategory }>
    <Text style={{color:'#666',fontWeight:"bold"}}>{ props.title }</Text>
  </TouchableOpacity>
)

export default ListGender