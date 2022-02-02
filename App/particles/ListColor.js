import React from 'react'
import { TouchableOpacity, Text,View} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
const ListColor = props => (
  <TouchableOpacity onPress={ props.selectColor }>
    <View style={{
        backgroundColor:props.title,
        height:heightPercentageToDP(15),
        width:heightPercentageToDP(12.1),
        marginLeft:widthPercentageToDP(1),
        marginRight:widthPercentageToDP(1),
        marginBottom:heightPercentageToDP(1)
    }}>
        <Text style={{color:'#fff',
        fontWeight:"bold",
        top:0,
        bottom:0,
        textAlign:'center',justifyContent:'center',
        alignContent:'center',alignItems:'center',alignSelf:'center'}}>{ props.title }</Text>

</View>
    
  </TouchableOpacity>
)

export default ListColor