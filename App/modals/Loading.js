import React from 'react'
import { Modal, StyleSheet, ActivityIndicator,Dimensions,View} from 'react-native'
// import { View } from 'native-base'
// import { convertHeightPercentToDP } from '../particles/converter.js';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
// import LottieView from 'lottie-react-native'

const {height, width} = Dimensions.get('window')

const Loading = props => (
  
  <View style={{position:'absolute',zIndex:99,backgroundColor:'rgba(255, 255, 255, 0.5)',height:height,width:width, justifyContent:'center',alignItems:'center'}}>
    <View style={{justifyContent:'center',
      height:heightPercentageToDP(20),
      width:heightPercentageToDP(20),
      backgroundColor:'#fff',
      borderRadius:20}}>
        <ActivityIndicator />
      </View>
    </View>
)

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3827B4'
  },
  content:{
    justifyContent:'center',
    height:heightPercentageToDP(20),
    width:heightPercentageToDP(20),
    backgroundColor:'#fff',
    borderRadius:20
  }
})

export default Loading