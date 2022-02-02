import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import ValidationOtp from '../components/ValidationOtp'
import { URL_API } from '../env'

class ValidationOtpContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      email:'',
      PIN:'',
      countDown: 60,
      isDoingCountdown: true,
      loading:false,
      validEmail:true,
      user_id:this.props.navigation.state.params.userid,
    }
  }

  async componentDidMount(){
    await console.log('user_id',this.state.user_id) 
    if( this.state.isDoingCountdown == true){
      this.setState({isDoingCountdown: false})
      this.MyInterval = setInterval( () => {
        this.setState( prevState=> ({
          countDown: prevState.countDown -1
        }))
      }, 1000)
    }
  }

  _renderOTP(){
    return(
      <CodeInput
        ref="OTPCode"
        className={'border-circle'}
        space={10}
        size={45}
        activeColor={'#fff'}
        inactiveColor={'#00e78e'}
        inputPosition='center'
        onFulfill={ (code) => this._validationOtp(code) }
        codeLength={6}
        cellBorderWidth={2.0}
        returnKeyType={'next'}
        keyboardType={'number-pad'}
        codeInputStyle={{
          fontSize:18
        }}
      />
    )
  }


  async _validationOtp(code)
  {
    await console.log('start anjing',this.state.user_id)
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/validationOtp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              valueOtp: code,
              user_id:this.state.user_id,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('single request validation otp', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          this.props.navigation.navigate('ResetPasswordContainer',dataRes.Data)
        }else{
          Alert.alert('Informasi', dataRes.Message)
        }
  }

  async _resend_otp()
  {
    await console.log('get id resend',this.state.user_id)
    // this.setState({isDoingCountdown: true})
    await this.setState({loading: true, countDown:60})
    const response = await fetch(`${URL_API}User/resendotp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              user_id:this.state.user_id,
              secretkey: 'NOEL'
            })
      });
        // const responseStatus = await response
        // const dataRes = await response.json()
        // await console.log('single request resend otp', dataRes)
        await this.setState({loading:false})
        this.setState({isDoingCountdown: true})
        this.forceUpdate()
        Alert.alert('Informasi', 'Berhasil Generate OTP baru, Silahkan cek Email kembali')
        this.setState({page:'ValidationOTP'})
        // if(dataRes.ResponCode == '00'){
        //   Alert.alert('Informasi', dataRes.Message)
        // }else{
        //   Alert.alert('Informasi', dataRes.Message)
        // }
  }

  render() {
    return (
      <ValidationOtp 
        modalLoading={ this.state.loading }
        
        onChangeEmail = { (email) => this.setState({email}) }
        valueEmail = { this.state.email }
        renderOTP = { this._renderOTP() }
        resendOtp = { () => this._resend_otp() }
        valueInterval = { this.state.countDown }
        //
        press1={ () => this.setState({PIN: this.state.PIN+ '1'}) }
        press2={ () => this.setState({PIN: this.state.PIN+ '2'}) }
        press3={ () => this.setState({PIN: this.state.PIN+ '3'}) }
        press4={ () => this.setState({PIN: this.state.PIN+ '4'}) }
        press5={ () => this.setState({PIN: this.state.PIN+ '5'}) }
        press6={ () => this.setState({PIN: this.state.PIN+ '6'}) }
        press7={ () => this.setState({PIN: this.state.PIN+ '7'}) }
        press8={ () => this.setState({PIN: this.state.PIN+ '8'}) }
        press9={ () => this.setState({PIN: this.state.PIN+ '9'}) }
        press0={ () => this.setState({PIN: this.state.PIN+ '0'}) }
        pressX={ () => this.setState({PIN:''})}
        valuePIN = { this.state.PIN }

      />
    )
  }

}


export default ValidationOtpContainer
