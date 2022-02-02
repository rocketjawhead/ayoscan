import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Register from '../components/Register'
import { _doRegister } from '../actions/register'
import { URL_API,SECRET_KEY } from '../env'
class RegisterContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      showPassword: true,
      fullname:'',
      phonenumber:'',
      SECRET_KEY : SECRET_KEY,
      loading:false,
      validEmail:true,
      DeviceUUID: DeviceInfo.getUniqueId(),
    }
  }

  async componentDidMount(){
    console.log('url ini ',URL_API);
    await console.log('hallo',this.state.DeviceUUID)
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


  async _doRegister(){
    await this.setState({loading: true})
    
    const response = await fetch(`${URL_API}User/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            password: this.state.password,
            phonenumber: this.state.phonenumber,
            email: this.state.email,
            fullname: this.state.fullname,
            secretkey: this.state.SECRET_KEY
          })
    });
      const responseStatus = await response
      const dataRes = await response.json()
      await this.setState({loading:false})
      await console.log('single result register', dataRes)
      if(dataRes.ResponCode == '00'){
        this.props.navigation.navigate('ValidationOtpRegisterContainer',{
          email: this.state.email
        })
        // this.props.navigation.navigate('RegisterPinContainer',this.state.email)
      }else{
        Alert.alert('Informasi', dataRes.Message)
      }
  }

  

  //datepicker
  

  render() {
    return (
      <Register 
        modalLoading={ this.state.loading }
        goBack = { () => this.props.navigation.goBack() }

        onChangeFullname = { (fullname) => this.setState({fullname}) }
        valueFullname = { this.state.fullname }

        onChangeEmail = { (email) => this.setState({email}) }
        valueEmail = { this.state.email }
        validationEmail = { () => this._validationEmail() }

        onChangePassword = { (password) =>  this.setState({password}) }
        valuePassword = { this.state.password }
        validationPassword = { () => this._validationPassword() }
        showPass = { () => this.setState({showPassword: !this.state.showPassword})}
        valueShowPass = { this.state.showPassword }

        // onChangeConfPassword = { (confpassword) =>  this.setState({confpassword}) }
        // valueConfPassword = { this.state.confpassword }
        // validationPassword = { () => this._validationConfPassword() }
        // showConfPass = { () => this.setState({showConfPassword: !this.state.showConfPassword})}
        // valueShowConfPass = { this.state.showConfPassword }

        onChangePhonenumber = { (phonenumber) => this.setState({phonenumber}) }
        valuePhonenumber = { this.state.phonenumber }
        


        doRegister = { () => this._doRegister() }
        toLogin = { () => this.props.navigation.navigate('LoginContainer') }

      />
    )
  }

}

const mapStateToProps = (state) => ({
  success: state.success,
  failed: state.failed,
  loading: state.loading,
  resRegister: state.resRegister
})

const mapDispatchToProps = dispatch => ({
  _doRegister: (data) => dispatch(_doRegister(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer)
