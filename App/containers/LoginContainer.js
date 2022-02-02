import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'

import Login from '../components/Login'
import { _doLogin } from '../actions/login'

class LoginContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      showPassword: true,
      loading:false,
      validEmail:true
    }
  }

  _validationEmail(){
    const email = this.state.email
    const regexEmail = /^(([^<>()[\]\\.,;:\#$%^&@\"]+(\.[^<>()[\]\\.,;:\#$%^&@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regexEmail.test(email)){
      this.setState({validEmail: true})
    }else{
      this.setState({validEmail: false})
    }
  }

  _validationPassword(){
    var e = this.state.password.split('')
    var res_dup = this.duplicateSeries(e)
    var res = this.checkSeries(e)
    if( this.state.password == ''){
      Alert.alert('Informasi', 'Kata sandi tidak boleh kosong')
    }else{
      if( !res ){
        Alert.alert('Informasi', 'Password tidak boleh urut')
      } else {
        if(!res_dup) {
          Alert.alert('Informasi', 'Password tidak boleh deret karakter yang sama')
        } else {
          return true;
        }
      }
    }
  }

  duplicateSeries(x){
    let result = true;
    for (let i=3; i<6;i++) {
        if (x[i]==x[i-1] && x[i-1]==x[i-2] && x[i-2]==x[i-3]){
            result = false;
        }
    }
    return result;
  }

  checkSeries(x) {
    let result = true;
    for (let i=3; i<6;i++) {
        if (x[i]-1==x[i-1] && x[i-1]-1==x[i-2] && x[i-2]-1==x[i-3]){
            result = false;
        }
        if (x[i]+1==x[i-1] && x[i-1]+1==x[i-2] && x[i-2]+1==x[i-3]){
            result = false;
        }
    }
    return result;
  }

  async _doLogin(){
    await this.setState({loading: true})
    console.log('aso')
    const data = await { 
      email: this.state.email,
      password: this.state.password
    }
    await this.props._doLogin(data)
    const res = await this.props.resLogin
    console.log('aso ',res.Status)
    await this.setState({loading:false})
    if(res.Status == 'Success'){
      
        await AsyncStorage.setItem('LogIn', "LoggedIn")
        const { navigation } = await this.props
        await navigation.dispatch(
          StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
          })
        )
      
      
    }else{
      Alert.alert('Informasi', res.Message)
    }
  }

  render() {
    return (
      <Login 
        modalLoading={ this.state.loading }
        doLogin = { () => this._doLogin() }
        onChangeEmail = { (email) => this.setState({email}) }
        valueEmail = { this.state.email }
        validationEmail = { () => this._validationEmail() }
        onChangePassword = { (password) =>  this.setState({password}) }
        valuePassword = { this.state.password }
        validationPassword = { () => this._validationPassword() }
        showPass = { () => this.setState({showPassword: !this.state.showPassword})}
        valueShowPass = { this.state.showPassword }

        toSignUp = { () => this.props.navigation.navigate('RegisterContainer')}
        toForgetPassword = { () => this.props.navigation.navigate('ForgetPasswordContainer')}

      />
    )
  }

}

const mapStateToProps = (state) => ({
  success: state.success,
  failed: state.failed,
  loading: state.loading,
  resLogin: state.resLogin
})

const mapDispatchToProps = dispatch => ({
  _doLogin: (data) => dispatch(_doLogin(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
