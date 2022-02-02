import React from 'react'
import { TouchableOpacity, Text,View,Image,StyleSheet} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import { URL_API_IMG } from '../env'
const ListType = props => (
  <TouchableOpacity style={{
  borderColor:'#dfe6e9', 
  marginLeft:widthPercentageToDP(2),
            marginRight:widthPercentageToDP(2),
            marginTop:heightPercentageToDP(2)
}} 
  onPress={ props.selectTypeTransaction }>
    <View style={{flexDirection:'row'}}>
                  <View style={{flex:0.1,justifyContent:'center',marginLeft:widthPercentageToDP(5)}}>
                    <Image source={{uri: URL_API_IMG+props.imageurl}} style={{height:heightPercentageToDP('4%'),
    width:widthPercentageToDP('7%'),
    marginRight:5,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'}}/>
                  </View>
                  <View style={{flex:0.9,justifyContent:'center'}}>
                    <Text style={{fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(2.5),
    justifyContent:'center'}}>{props.title}</Text>
                  </View>
            </View>
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.6),
            marginTop:widthPercentageToDP(3),
            marginLeft:widthPercentageToDP(5),
            marginRight:widthPercentageToDP(5)
            }}></View>
            {/* end hr */}
  </TouchableOpacity>
  
)

export default ListType