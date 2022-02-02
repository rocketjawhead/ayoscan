import React from 'react'
import { TouchableOpacity, Text, StyleSheet,View} from 'react-native'
// import { heightPercentageToDP } from 'react-native-responsive-screen'
import { formatNumber } from 'accounting'
import Icon from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

const ListWalletTrx = props => (
  <TouchableOpacity style={{borderBottomWidth:1, 
  borderColor:'#dfe6e9', 
  paddingVertical:7,
  marginHorizontal:heightPercentageToDP(3)}} 
  onPress={ props.selectWallet }>
    <View style={{flexDirection:'row',marginTop:heightPercentageToDP(1),marginBottom:heightPercentageToDP(1)}}>
          <View style={{flex:0.2,justifyContent:'center'}}>
            <Icon name="wallet" style={ styles.iconCard }/>
          </View>
          <View style={{flex:0.8}}>
            <Text style={styles.txtTitleWallet}>{ props.title }</Text>
            <Text style={styles.txtAmountWallet}>Rp { formatNumber(props.amount) }</Text>
          </View>
    </View>

    {/* <Text style={{color:'#666',fontSize:heightPercentageToDP(2.5)}}>{ props.title }</Text>
    <Text style={{color:'#13a699',fontSize:heightPercentageToDP(2)}}>Rp { formatNumber(props.amount) }</Text> */}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container:{  
      backgroundColor:'#ffffff'
    },
  iconCard:{
      fontSize:heightPercentageToDP(5),
      color:'#13a699',
      alignContent:'flex-end',
      alignItems:'flex-end',
      textAlign:'right',
      justifyContent:'center',
      marginRight:widthPercentageToDP(5)
    },
    txtTitleWallet:{
      // fontWeight:'bold',
      fontFamily:'sans-serif',
      fontSize:heightPercentageToDP(2)
    },
    txtAmountWallet:{
      fontWeight:'bold',
      fontFamily:'sans-serif',
      fontSize:heightPercentageToDP(2),
      color:'#13a699',
    },
})

export default ListWalletTrx