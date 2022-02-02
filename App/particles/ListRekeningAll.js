import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
const ListRekeningAll = props => (
  <TouchableOpacity style={{borderBottomWidth:1, 
  borderColor:'#dfe6e9', 
  paddingVertical:7,marginHorizontal:heightPercentageToDP(3)}} onPress={ props.toDetailRekening }>
    <Text style={{color:'#666',fontSize:heightPercentageToDP(2.5)}}>{ props.title }</Text>
    <Text style={{color:'#13a699',fontSize:heightPercentageToDP(2)}}>{ props.title_bank } | {props.norek }</Text>
  </TouchableOpacity>
)

export default ListRekeningAll