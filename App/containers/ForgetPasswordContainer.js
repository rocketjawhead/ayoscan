import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'

import ForgetPassword from '../components/ForgetPassword'
import { URL_API } from '../env'

class ForgetPasswordContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      email:'',
      loading:false,
      validEmail:true
    }
  }


  async _requestOtp()
  {
    await console.log('start request')
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/forgetPassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: this.state.email,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading:false})
        await console.log('single request forget', dataRes.Data)   
        if(dataRes.ResponCode == '00'){
          this.props.navigation.navigate('ValidationOtpContainer',dataRes.Data)
        }else{
          Alert.alert('Informasi', dataRes.Message)
        }
        // await this.setState({infobookmark:dataRes.Data})
  }

  render() {
    return (
      <ForgetPassword 
        modalLoading={ this.state.loading }
        
        onChangeEmail = { (email) => this.setState({email}) }
        valueEmail = { this.state.email }
        goBack = { () => this.props.navigation.goBack() }
        requestOtp = { () => this._requestOtp() }

      />
    )
  }

}


export default ForgetPasswordContainer
