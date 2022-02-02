import React from 'react'

import { View, Text, SafeAreaView, Image, Dimensions, ImageBackground, StyleSheet,TouchableOpacity,RefreshControl,ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import Bg from '../assets/images/bgHome.png'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen')
import Loading from '../modals/Loading' 
import Five from '../assets/Profile/5.jpg'
import verified from '../assets/images/verified.png'
import Setting from '../assets/images/settings.png'
import Security from '../assets/images/security.png'
import Notif from '../assets/images/notification.png'
// import { ScrollView } from 'react-native-gesture-handler'

const Profile = props => (
  <View style={{
    // backgroundColor:'#F8F9F9'
    backgroundColor:'#FFF'
    }}>
      { props.modalLoading == true ? <Loading /> : <View /> }
      <ScrollView style={{zIndex:2}} refreshControl={
        <RefreshControl 
          refreshing={ props._onRefresh }
          onRefresh = { props._doRefresh }
        />
      }>

<SafeAreaView>
      <View style={{marginHorizontal:widthPercentageToDP(5)}}>

      <View style={ styles.wrapperAboutMe }>
            <Text style={ styles.txtAboutMeName }>{props.fullname}</Text>

            {props.valueIsVerified == '1' ?
            <Image source={verified} style={styles.iconVerified }/>
            :
            <View/>
            }
              <Image source={verified} style={styles.iconVerified }/>
            </View>
            <Text style={styles.txtEmail }>{props.email}</Text>

        
        <Text style={styles.txtGeneral}>Main Menu</Text>
        
        <TouchableOpacity>
        <View style={ styles.btnSetting }>
        <Icon name="user" style={ styles.iconNotif } onPress={props.goBack}/>
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Ubah Profil</Text>
            <Text style={styles.txtSubtitleSetting }>Ubah Data Diri Profil</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>

        {props.valueIsVerified == '0' ?
        <TouchableOpacity onPress={props.toUpgrade}>
        <View style={ styles.btnSetting }>
        <Icon name="star" style={ styles.iconNotif } onPress={props.goBack}/>
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Upgrade</Text>
            <Text style={styles.txtSubtitleSetting }>Update premium user</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
            {/* hr */}
            <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>
        :
        <View></View>
        }

        

        <TouchableOpacity>
        <View style={ styles.btnSetting }>
        <Icon name="lock" style={ styles.iconNotif } onPress={props.goBack}/>
          {/* <Image source={Security} style={styles.iconSetting} /> */}
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Kata Sandi</Text>
            <Text style={styles.txtSubtitleSetting }>Ubah Kata Sandi</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
        {/* hr */}
        <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={ styles.btnSetting }>
        <Icon name="lock" style={ styles.iconNotif } onPress={props.goBack}/>
          {/* <Image source={Security} style={styles.iconSetting} /> */}
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>PIN</Text>
            <Text style={styles.txtSubtitleSetting }>Ubah PIN</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
        {/* hr */}
        <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={ styles.btnSetting }>
        <Icon name="questioncircle" style={ styles.iconNotif } onPress={props.goBack}/>
          {/* <Image source={Security} style={styles.iconSetting} /> */}
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Tentang</Text>
            <Text style={styles.txtSubtitleSetting }>Informasi Demopay</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
        {/* hr */}
        <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>


        <TouchableOpacity onPress={props.toVersion}>
        <View style={ styles.btnSetting }>
        <Icon name="exclamationcircle" style={ styles.iconNotif } onPress={props.goBack}/>
          {/* <Image source={Security} style={styles.iconSetting} /> */}
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Cek Versi</Text>
            <Text style={styles.txtSubtitleSetting }>V {props.valueVersion}</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
        {/* hr */}
        <View style={{backgroundColor:'#F2F2F2',
            height:widthPercentageToDP(0.5),marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}></View>
            {/* end hr */}
        </TouchableOpacity>

        <TouchableOpacity onPress={props.toLogout}>
        <View style={ styles.btnSetting }>
          {/* <Image source={Notif} style={styles.iconSetting} /> */}
          <Icon name="logout" style={ styles.iconNotif } onPress={props.goBack}/>
          <View style={{marginLeft:widthPercentageToDP(1)}}>
            <Text style={styles.txtTitleSetting }>Keluar</Text>
            <Text style={styles.txtSubtitleSetting }>Keluar dari akun sekarang</Text>
          </View>
          <View style={{flex:1}}>
            <Entypo name="chevron-right" style={styles.iconArrow }/>
          </View>
        </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>

      </ScrollView>
    
  </View>
  
)

const styles = StyleSheet.create({
  bg:{
    width:width, 
    height: heightPercentageToDP(40)
  },
  iconNotif:{
    fontSize:heightPercentageToDP(4),
    color:'#13a699',
    justifyContent:'center'
  },
  txtName:{
    fontSize:heightPercentageToDP(2.5), 
    fontFamily:'Avenir', 
    fontWeight:'800', 
    color:'#fff'
  }, 
  iconEdit:{
    color:'#fff', 
    fontSize:heightPercentageToDP(2.5), 
    alignSelf:'flex-end', 
    textAlign:'right'
  },
  wrapperHeader:{
    flexDirection: 'row', 
    marginTop:heightPercentageToDP(1)
  },
  square:{
    backgroundColor:'#fff', 
    borderRadius:10, 
    height:heightPercentageToDP(30), 
    width:widthPercentageToDP(90),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:heightPercentageToDP(3),
    padding:widthPercentageToDP(5),
    alignItems:'center'
  },
  wrapperImage:{
    backgroundColor:'#D8D8D8', 
    width:heightPercentageToDP(13), 
    height:heightPercentageToDP(13), 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:5
  },
  pp:{
    width:heightPercentageToDP(12), 
    height:heightPercentageToDP(12), 
    borderRadius:5
  },
  wrapperAboutMe:{
    flexDirection:'row', 
    // justifyContent:'center', 
    marginTop:heightPercentageToDP(1.5)
  },
  txtAboutMeName:{
    color:'#464646', 
    fontSize:heightPercentageToDP(2.5), 
    fontWeight:'600', 
    marginRight:widthPercentageToDP(3)
  },
  iconVerified:{
    width:widthPercentageToDP(5), 
    height:widthPercentageToDP(5), 
    alignSelf:'center'
  },
  txtEmail:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.8)
  },
  txtGeneral:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(2), 
    fontWeight:'600', 
    marginTop:heightPercentageToDP(2)
  },
  btnSetting:{
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 2,
    backgroundColor:'#fff',
    height:heightPercentageToDP(7),
    borderRadius:heightPercentageToDP(1),
    alignItems:'center',
    flexDirection:'row',
  },
  iconSetting:{
    width:heightPercentageToDP(6), 
    height:heightPercentageToDP(6)
  },
  txtTitleSetting:{
    color:'#464646', 
    fontSize:heightPercentageToDP(2), 
    fontWeight:'400'
  },
  txtSubtitleSetting:{
    color:'#77869E', 
    fontSize:heightPercentageToDP(1.5)
  },
  iconArrow:{
    fontSize:heightPercentageToDP(2), 
    color:'#77869E', 
    marginRight:widthPercentageToDP(1), 
    textAlign:'right'
  }
})

export default Profile

