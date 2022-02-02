import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
const ListFitur = props => (
  <TouchableOpacity style={{
  paddingVertical:7,marginHorizontal:heightPercentageToDP(3)}} onPress={ props.selectRekening }>
    <Text style={{color:'#666',fontWeight:"bold",fontSize:heightPercentageToDP(2.5)}}>{ props.title }</Text>
  </TouchableOpacity>
)

export default ListFitur