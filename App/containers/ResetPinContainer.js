import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'

import ResetPin from '../components/ResetPin'
import { URL_API,SECRET_KEY } from '../env'

class ResetPinContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      password:'',
      showPassword: true,
      conf_password:'',
      showPasswordConf: true,
      loading:false,
      validpassword:true,
      user_id:this.props.navigation.state.params,
      SECRET_KEY:SECRET_KEY
    }
  }

  async _ResetPassword()
  {
    await console.log('start request',this.state.user_id)
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/resetPin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              pin: this.state.password,
              conf_pin: this.state.conf_password,
              user_id:this.state.user_id,
              secretkey: this.state.SECRET_KEY
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('single request reset pin', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
            this.props.navigation.navigate('LoginContainer')
            Alert.alert('Informasi', dataRes.Message)
          }else{
            Alert.alert('Informasi', dataRes.Message)
          }
  }

  render() {
    return (
      <ResetPin 
        modalLoading={ this.state.loading }
        
        onChangePassword = { (password) => this.setState({password}) }
        valuePassword = { this.state.password }
        showPass = { () => this.setState({showPassword: !this.state.showPassword})}
        valueShowPass = { this.state.showPassword }


        onChangeConfPassword = { (conf_password) => this.setState({conf_password}) }
        valueConfPassword = { this.state.conf_password }
        showPassConf = { () => this.setState({showPasswordConf: !this.state.showPasswordConf})}
        valueShowPassConf = { this.state.showPasswordConf }
        goBack = { () => this.props.navigation.goBack() }
        doResetPassword = { () => this._ResetPassword() }

      />
    )
  }

}


export default ResetPinContainer
