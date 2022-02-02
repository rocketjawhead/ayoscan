import React from 'react'

import { View, ImageBackground,Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import { formatNumber } from 'accounting'
import Gas from '../assets/images/Gas.png'
import Card from '../assets/images/card.png'
import Up from '../assets/images/Up.png'
import Down from '../assets/images/Down.png'
import { ScrollView } from 'react-native-gesture-handler'
// import fbIcon from '../assets/images/facebook.png'
// import googleIcon from '../assets/images/google.png'
import header_background from '../assets/images/header_background.png'
const Home = props => (
  <SafeAreaView style={{backgroundColor:'#ffffff', flex:1}}>
    {/* <ImageBackground source={header_background} style={{width:'100%', height:'100%',position:'absolute',marginBottom:heightPercentageToDP(65),zIndex:1}}/> */}
    <ScrollView vertical={true}>
    <View style={ styles.container }>
    <View style={ styles.headerAmount }>
      <View style={{flexDirection:'row',marginHorizontal:widthPercentageToDP(5)}}>
        <View style={{flex:0.2}}>
        {/* <Icon name="arrowleft" style={ styles.iconBack }/> */}
        </View>
        <View style={{flex:0.6}}>
        <Text style={ styles.txtGreating }>{props.infoGreeting}</Text>
        </View>
        <View style={{flex:0.2}}>
        {/* <Icon name="notification" style={ {fontSize:heightPercentageToDP(2.5),
      marginVertical:widthPercentageToDP(5),
      color:'#ffc12e',alignSelf:'flex-end'} }/> */}
        </View>  
      </View>
        
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>
        <Text style={{color:'#ffffff',fontSize:heightPercentageToDP(2.5),
      marginTop:widthPercentageToDP(3)}}>{props.email}</Text>
      <Text style={{color:'#ffffff',fontSize:heightPercentageToDP(2.5),
      marginTop:widthPercentageToDP(1)}}>5000</Text>
        {/* <Text style={styles.txtAmount}>Rp { formatNumber(props.mainSaldo) }</Text> */}
        
      
      </View>
      

    </View>



    
      {/* <View style={{backgroundColor:'#fff'}}>      
        <ScrollView style={{flexDirection:'row', marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={ props.toIncome } style={{...styles.wrapperIncome, marginLeft:widthPercentageToDP(5)}}>
            <Image source={Up} style={styles.imgIncome }/>
            <View style={{justifyContent:'center'}}>
              <Text style={{color:'#77869E'}}>Pemasukan</Text>
              <Text>Rp { formatNumber(props.totalIncome) }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ props.toOutcome } style={ styles.wrapperIncome }>
            <Image source={Down} style={styles.imgIncome }/>            
            <View style={{justifyContent:'center'}}>
              <Text style={{color:'#77869E'}}>Pengeluaran</Text>
              <Text>Rp { formatNumber(props.totalOutcome) }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.wrapperIncome } onPress={ props.toInstallment }>
            <Image source={Down} style={styles.imgIncome }/>            
            <View style={{justifyContent:'center'}}>
              <Text style={{color:'#77869E'}}>Cicilan</Text>
              <Text>{ props.totalInstallment }</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View> */}

      {/* <View style={{flexDirection:'row',marginLeft:widthPercentageToDP(2),
      marginRight:widthPercentageToDP(2)
      ,position:'absolute',top:widthPercentageToDP(26)}}>
          <View style={styles.cssColmd6}>
            <TouchableOpacity onPress={ props.toIncome } style={{...styles.wrapperIncome,marginBottom:widthPercentageToDP(3), marginLeft:widthPercentageToDP(5)}}>
              <Image source={Up} style={styles.imgIncome }/>
              <View style={{justifyContent:'center'}}>
                <Text style={{color:'#77869E'}}>Pemasukan</Text>
                <Text>Rp { formatNumber(props.totalIncome) }</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cssColmd6}>
            <TouchableOpacity onPress={ props.toOutcome } style={{...styles.wrapperIncome,marginBottom:widthPercentageToDP(3), marginLeft:widthPercentageToDP(5)} }>
              <Image source={Down} style={styles.imgIncome }/>            
              <View style={{justifyContent:'center'}}>
                <Text style={{color:'#77869E'}}>Pengeluaran</Text>
                <Text>Rp { formatNumber(props.totalOutcome) }</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View> */}
      <View style={{flexDirection:'row',marginLeft:widthPercentageToDP(2),
      marginRight:widthPercentageToDP(2)
      ,position:'absolute',top:widthPercentageToDP(26),zIndex:1}}>
          <ScrollView style={{flexDirection:'row', marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
          
          
          {/* <View style={{backgroundColor:'#fff',borderRadius:10,marginRight:widthPercentageToDP(3)}}> */}
          <TouchableOpacity onPress={ props.toIncome } style={{...styles.wrapperIncome, 
            marginLeft:widthPercentageToDP(5)}}>
            <Text style={{color:'#666'}}>Total</Text>
            <Text style={{color:'#3827B4',fontSize:widthPercentageToDP(6)}}>Rp 5.000.0000</Text>
            {/* <Image source={Up} style={styles.imgIncome }/>
            <View style={{justifyContent:'center'}}>
              <Text style={{color:'#77869E'}}>Pemasukan</Text>
              <Text>Rp { formatNumber(props.totalIncome) }</Text>
            </View> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={ props.toIncome } style={{...styles.wrapperIncome, 
            marginLeft:widthPercentageToDP(5)}}>
            <Text style={{color:'#666'}}>Total</Text>
            <Text style={{color:'#3827B4',fontSize:widthPercentageToDP(6)}}>Rp 5.000.0000</Text>
            {/* <Image source={Up} style={styles.imgIncome }/>
            <View style={{justifyContent:'center'}}>
              <Text style={{color:'#77869E'}}>Pemasukan</Text>
              <Text>Rp { formatNumber(props.totalIncome) }</Text>
            </View> */}
          </TouchableOpacity>
          
          

        </ScrollView>
      </View>

      {/* info promo */}
      <View style={{backgroundColor:'#fff',marginTop:widthPercentageToDP(2),marginHorizontal:widthPercentageToDP(4)}}>   
      <View style={{flexDirection:'row',marginBottom:widthPercentageToDP(2)}}>
          <View style={{flex:0.1}}>
          <Icon name="flag" style={ {fontSize:heightPercentageToDP(4),color:'#309abb'} }/>
          </View>
          <View style={{flex:0.4}}>
          <Text style={{fontSize:widthPercentageToDP(5)}}>Hey-Diskon</Text> 
          </View>
          <View style={{flex:0.5}}>
          <Text style={{fontSize:widthPercentageToDP(3),textAlign:'right',marginTop:widthPercentageToDP(2),color:'#309abb'}}>Lihat Semua</Text> 
          </View>
      </View>   
        <ScrollView style={{flexDirection:'row', marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList 
          horizontal={true}
            data = { props.data }
            renderItem = { props.renderItem }
          />
        </ScrollView> 
      </View>
      {/* end infopromo */}





      {/* hr */}
      <View style={{backgroundColor:'#F2F2F2',height:widthPercentageToDP(1.5),marginTop:widthPercentageToDP(2)}}></View>
      {/* end hr */}

      {/* blog */}
      <View style={{backgroundColor:'#fff',marginTop:widthPercentageToDP(2),marginHorizontal:widthPercentageToDP(4)}}>   
      <View style={{flexDirection:'row',marginBottom:widthPercentageToDP(2)}}>
          <View style={{flex:0.1}}>
          <Icon name="book" style={ {fontSize:heightPercentageToDP(4),color:'#309abb'} }/>
          </View>
          <View style={{flex:0.4}}>
          <Text style={{fontSize:widthPercentageToDP(5)}}>Bacaan</Text> 
          </View>
          <View style={{flex:0.5}}>
            <TouchableOpacity onPress={props.toAllNews}>
            <Text style={{fontSize:widthPercentageToDP(3),textAlign:'right',marginTop:widthPercentageToDP(2),color:'#309abb'}}>Lihat Semua</Text>
            </TouchableOpacity>
           
          </View>
      </View>   
      <FlatList 
      vertical={true}
        // numColumns={2}
        data = { props.dataBlogDashboard }
        renderItem = { props.renderItemBlogDashboard }
        />
      </View>
      {/* end blog */}
      
      
    </View>
    </ScrollView>
    

  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    //marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#ffffff'
  },
  headerAmount:{
    backgroundColor:'#3827B4',
    height:widthPercentageToDP(40)
    // borderBottomLeftRadius:35,borderBottomRightRadius:35
    
  },
  iconBack:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#ffffff'
  },
  cssColmd6:{flex:0.5,
    borderRadius:10,
    elevation: 1,
    marginHorizontal:widthPercentageToDP(1),
    marginTop:widthPercentageToDP(2)
  },
  iconSetting:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#042C5C'
  },
  iconNotif:{
    fontSize:heightPercentageToDP(2.5),
    marginVertical:widthPercentageToDP(5),
    color:'#042C5C'
  },
  wrapperLoginWith:{
    flexDirection:'row', 
    justifyContent:'center', 
    marginTop:heightPercentageToDP(10)
  },
  txtGreating:{
    fontFamily:'avenir',
    fontSize:heightPercentageToDP(3.5),
    fontWeight:'800',
    color:'#ffffff',
    marginTop:heightPercentageToDP(1),
    textAlign:'center'
  },
  btnLoginWith:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    marginRight:widthPercentageToDP(5),
    justifyContent:'center',
  },
  imageFB:{
    width:widthPercentageToDP(3.5),
    height:heightPercentageToDP(2.5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  btnLoginWithGoogle:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    justifyContent:'center'
  },
  imageGoogle:{
    width:widthPercentageToDP(5),
    height:widthPercentageToDP(5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  txtUsername:{
    color:'#77869E',
  },
  underlineInput:{
    borderBottomWidth:2,
    borderBottomColor:'#d6d6cd',
    paddingBottom:heightPercentageToDP(0.5)
  },
  txtInput:{
    fontSize:heightPercentageToDP(2), 
  },
  circle:{
    width:widthPercentageToDP(5), 
    height:widthPercentageToDP(5), 
    borderWidth:0.5, 
    borderRadius:widthPercentageToDP(2.5),
  },
  txtRememberMe:{
    textAlign:'center', 
    marginLeft: widthPercentageToDP(2)
  },
  txtForgotPass:{
    color:'#0047CC', 
    fontStyle:'italic', 
    fontFamily:'avenir', 
    fontWeight:'800', 
    textAlign:'right', 
    alignSelf:'flex-end', 
    right:0
  },
  btnLogin:{
    backgroundColor:'#41cee2', 
    borderRadius: 5, 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  btnLoginDisabled:{
    backgroundColor:'#77869E', 
    borderRadius: 5, 
    height:heightPercentageToDP(5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center'
  },
  txtLogin:{
    fontWeight:'600', 
    fontFamily:'Avenir', 
    alignSelf:'center', 
    color:'#fff', 
    fontSize:heightPercentageToDP(2)
  },
  txtDontHave:{
    color:'#77869E', 
    fontFamily:'Avenir', 
    fontSize:heightPercentageToDP(1.8), 
    alignSelf:'center', 
    marginTop:heightPercentageToDP(2)
  },
  txtSignUp:{
    color:'#042C5C',
    fontFamily:'Avenir', 
    fontSize:heightPercentageToDP(1.8), 
    alignSelf:'center', 
    marginTop:heightPercentageToDP(2)
  },
  wrapperIncome:{
    marginRight:widthPercentageToDP(5), 
    backgroundColor:'#fff',
    marginTop:heightPercentageToDP(2)
  },
  imgIncome:{
    width:widthPercentageToDP(10), 
    height:widthPercentageToDP(10), 
    resizeMode:'contain', 
    marginRight:widthPercentageToDP(2.5)
  },
  txtAmount:{
    color:'#ffffff',fontSize:heightPercentageToDP(2.5),
    fontSize:heightPercentageToDP(5),
    marginBottom:heightPercentageToDP(2)
  }
})

export default Home