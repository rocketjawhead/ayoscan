import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { URL_API_PROMO_ASSETS } from '../env'
import HTMLView from 'react-native-htmlview';
const Promo = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    <ScrollView vertical={true}>
    <View style={ styles.container }>
    <View style={ styles.headerAmount }>
      <Image source={{ uri: URL_API_PROMO_ASSETS+props.imageurl }} style= {styles.cssImage}/>
      <Icon name="arrowleft" onPress={ props.backToHome } style={ styles.iconBack }/>
    </View>  
    </View>
    <View style={styles.cssBody}>


    {/* <View style={{flexDirection:'row'}}>
          
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.boxIcon}>
            <Image source={{uri: URL_API_PROMO_ASSETS+props.imageurl_merchant}} style={ styles.iconAction } />
            </View>
          </View>

          <View style={{flex:0.8,justifyContent:'center',marginRight:widthPercentageToDP(2)}}>
            <Text style={{color:'#464646', 
    fontSize:heightPercentageToDP(3), 
    fontWeight:'bold',
    marginLeft:widthPercentageToDP(2)} }>{props.title_merchant }</Text>
          </View>
        </View> */}


      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
        <Text style={styles.cssTitle}>{props.title}</Text>
        <Text style={styles.cssCategory}>Berakhir pada : {props.getDateTo} {props.getMonthTo} {props.getYearTo}</Text>
        </View>
      </View>
      
      {/* <Text style={styles.cssDesc}>{props.desc}</Text> */}
      <HTMLView
        value={props.desc}
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
  iconAction:{
    width:widthPercentageToDP(15), 
    height:widthPercentageToDP(15), 
    resizeMode:'contain', 
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginLeft:widthPercentageToDP(3.5),
    marginRight:widthPercentageToDP(3.5),
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(2),
    
  },
  cssImage:{
    flex: 1,
    width: null,
    resizeMode: 'stretch',
    height: heightPercentageToDP(40),
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
    fontSize:heightPercentageToDP(4),
    color:'#13a699',
    zIndex: 0, 
    position: 'absolute',
    marginLeft:widthPercentageToDP(3),
    marginTop:widthPercentageToDP(2),
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
  cssCategory:{
    color:'#77869E',
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

export default Promo