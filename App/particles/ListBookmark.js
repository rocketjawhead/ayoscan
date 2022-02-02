import React from 'react'

import { StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import { ScrollView } from 'react-native-gesture-handler'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { URL_API_BLOG_ASSETS } from '../env'

const ListBookmark = props => (
  <TouchableOpacity onPress={ props.toDetailBlog }>
    <View style={styles.cssHeader}>
      <View style={{flexDirection:'row'}}>
          <View style={{flex:0.4}}>
            <Image source={{ uri: URL_API_BLOG_ASSETS+props.imageurl }} style={styles.cssGambar}/>
          </View>
          <View style={{flex:0.6}}>
            <View style={{flexDirection:'row'}}>
              {/* <View style={{flex:0.2}}></View> */}
              <View style={{flex:0.5}}><Text style={styles.cssTitleCategory}>{ props.title_category }</Text></View>
              {/* <View style={{flex:0.5}}><Text style={styles.cssDate}>{ props.create_date }</Text></View> */}
            </View>
            <Text style={styles.cssTitle}>{ props.judul }</Text>
            
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
  cssDate:{
    fontSize:widthPercentageToDP(2),
    marginTop:widthPercentageToDP(2),
  },
  cssTitleCategory:{
    fontWeight:'bold',
    color:'#3827B4',
    fontFamily:'Avenir',
    fontSize:widthPercentageToDP(3),
    marginLeft:widthPercentageToDP(3)
  },
  cssTitle:{
    fontFamily:'Avenir',
    textAlign:'left',
    // fontWeight:'bold',
    fontSize:widthPercentageToDP(4),
    marginTop:widthPercentageToDP(0.1),
    marginLeft:widthPercentageToDP(3)
  },
})

export default ListBookmark