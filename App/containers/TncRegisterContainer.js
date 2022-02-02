import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import TncRegister from '../components/TncRegister'
import { URL_API } from '../env'

class TncRegisterContainer extends Component{

  constructor(props){
    super(props)
    this.state={
        Agreement:false,
    }
  }

  async componentDidMount(){
    
  }




  render() {
    return (
      <TncRegister 
      goBack = { () => this.props.navigation.goBack() }
      toSignUp = { () => this.props.navigation.navigate('RegisterContainer')}

      changeAgreement = { () => this.setState({Agreement: !this.state.Agreement}) }
      valueAgreement = { this.state.Agreement }
      />
    )
  }

}


export default TncRegisterContainer
