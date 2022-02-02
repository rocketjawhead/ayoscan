import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import RedeemPoin from '../components/RedeemPoin'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListIcon from '../particles/ListIcon'
import { _getIcon  } from '../actions/icon'
import ModalIcon from '../modals/ModalIcon';

class RedeemPoinContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      title:'',
      id_gift:this.props.navigation.state.params.id,
      imageurl:this.props.navigation.state.params.imageurl,
      amount:this.props.navigation.state.params.amount,
      wallet:this.props.navigation.state.params.wallet,
      id_wallet:this.props.navigation.state.params.wallet,
      nomor_wallet : ''
    }
  }

  async componentDidMount(){
    
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    
  }

  async _redeemPoin()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Poin/redeempoin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              ewalletcode:await this.state.Session.ewalletcode,
              id_gift:this.state.id_gift,
              id_wallet:this.state.id_wallet,
              nomor_wallet:this.state.nomor_wallet,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result redeem', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          Alert.alert('Informasi', dataRes.Message)
          await this.props.navigation.dispatch(
            StackActions.reset({
              index:0,
              actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
            })
          )
        }else{
          Alert.alert('Informasi', dataRes.Message)
        }
  }



  render() {
    return (
      <RedeemPoin 
        modalLoading={ this.state.loading }
        valueWallet = {this.state.wallet}
        //
        valueImageurl = { this.state.imageurl }
        valueAmount = {this.state.amount}
        //
        onChangeNomorWallet = { (nomor_wallet) => this.setState({nomor_wallet}) }
        valueNomorWallet = { this.state.nomor_wallet }

        saveIt = { () => this._redeemPoin() }
        goBack = { () => this.props.navigation.goBack() }
      />

    )
  }

}


export default (RedeemPoinContainer)

