import React from 'react'

import { StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import { ScrollView } from 'react-native-gesture-handler'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { URL_API_BLOG_ASSETS } from '../env'

const ListBlog = props => (
  <TouchableOpacity onPress={ props.toDetailBlog}>
    <View style={styles.cssHeader}>
      <View style={{flexDirection:'row'}}>
          <View style={{flex:0.5}}>
            <Image source={{ uri: URL_API_BLOG_ASSETS+props.imageurl }} style={styles.cssGambar}/>
          </View>
          <View style={{flex:0.5}}>
            <Text style={styles.cssTitle}>{ props.judul }</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:0.5}}></View>
              <View style={{flex:0.5}}></View>
            </View>
          </View>
      </View>  
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  cssHeader:{
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:widthPercentageToDP(2)
  },
  cssGambar:{ 
    flex:1 , width: undefined, height: widthPercentageToDP(25),borderRadius:10
  },
  cssTitle:{
    fontWeight:'bold',
    fontSize:widthPercentageToDP(4),
    marginTop:widthPercentageToDP(1),
    marginLeft:widthPercentageToDP(3)
  },
})

export default ListBlog