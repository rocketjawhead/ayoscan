import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { URL_API_PROMO_ASSETS } from '../env'
import HTMLView from 'react-native-htmlview';

const DetailPromo = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    <ScrollView vertical={true}>
    <View style={ styles.container }>
    <View style={ styles.headerAmount }>
      <Image source={{ uri: URL_API_PROMO_ASSETS+props.gambar }} style= {styles.cssImage}/>
      <Icon name="arrowleft" onPress={ props.backToHome } style={ styles.iconBack }/>
    </View>  
    </View>
    
    <View style={styles.cssBody}>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
        <Text style={styles.cssTitleValid}>Berlaku Sampai : {props.getDate} {props.getMonth} {props.getYear}</Text>
        
        {/* hr */}
      <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(1.5),marginTop:widthPercentageToDP(2)}}></View>
      {/* end hr */}
        
        <Text style={styles.cssTitle}>{props.title}</Text>
        {/* <Text style={styles.cssCategory}>{props.title_category} | {props.create_date}</Text> */}
        </View>
      </View>
      
      {/* <Text style={styles.cssDesc}>{props.desc}</Text> */}
      <HTMLView
        value={props.desc_promo}
        stylesheet={styles}
      />
    </View>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    //marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#ffffff'
  },
  cssImage:{
    flex: 1,
    width: null,
    resizeMode: 'stretch',
    height: heightPercentageToDP(40),
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  cssBody:{
    backgroundColor:'#ffffff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5)
  },
  headerAmount:{
    backgroundColor:'#ffffff',
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35
    
  },
  iconBack:{
    fontSize:heightPercentageToDP(5),
    color:'#666',
    zIndex: 0, 
    position: 'absolute',
    marginLeft:widthPercentageToDP(3)
  },
  iconSave:{
    fontSize:heightPercentageToDP(4),
    color:'#666',
    zIndex: 0, 
    position: 'absolute',
    alignContent:'flex-end',
    alignItems:'flex-end',
    marginTop:widthPercentageToDP(3),
    marginLeft:widthPercentageToDP(3)
  },
  cssTitle:{
    fontWeight:'bold',
    fontSize:widthPercentageToDP(5),
    marginTop:widthPercentageToDP(2),
    marginLeft:widthPercentageToDP(1),
    marginRight:widthPercentageToDP(1)
  },
  cssTitleValid:{
    fontWeight:'bold',
    color:'#309abb',
    fontSize:widthPercentageToDP(4),
    marginTop:widthPercentageToDP(2),
    marginLeft:widthPercentageToDP(1),
    marginRight:widthPercentageToDP(1)
  },
  cssCategory:{
    color:'#309abb',
    fontSize:widthPercentageToDP(3.5),
    marginLeft:widthPercentageToDP(1)
  },
  cssDesc:{
    flex:1,
    fontSize:widthPercentageToDP(4),
    marginTop:widthPercentageToDP(3),
    marginLeft:widthPercentageToDP(1.5),
    marginRight:widthPercentageToDP(1.5),
    textAlign: 'justify',
    lineHeight: 20,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  p: {
    marginTop:widthPercentageToDP(3),
    marginLeft:widthPercentageToDP(1.5),
    marginRight:widthPercentageToDP(1.5),
    fontWeight: '900',
    textAlign: 'justify',
    lineHeight: 20,
  },
})

export default DetailPromo