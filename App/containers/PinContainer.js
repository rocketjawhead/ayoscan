import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import Pin from '../components/Pin'
import { URL_API } from '../env'

class PinContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      PIN:'',
      Session:''
    }
  }

  async componentDidMount(){
    
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await console.log('email : ',this.state.Session.email) 
    
  }

  async _setPIN()
  {
    // await console.log('check pin : ',this.state.Session.email) 
    await this.setState({newPIN: this.state.PIN, PIN:''})
    const PIN = await this.state.newPIN
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/checkPin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              email:await this.state.Session.email,
              pin:PIN,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result set pin', dataRes)
        await this.setState({loading:false,PIN:''})
        if(dataRes.ResponCode == '00'){
          // Alert.alert('Informasi', dataRes.Message)
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
      <Pin 
        modalLoading={ this.state.loading }
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
        setPin = {this.state.PIN.length >= 6 ? this._setPIN() : null }
        goBack = { () => this.props.navigation.navigate('LoginContainer')}
        forgetPin = { () => this.props.navigation.navigate('ForgetPinContainer')}

      />
    )
  }

}


export default PinContainer
