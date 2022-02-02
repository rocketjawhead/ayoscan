import React, { Component } from 'react'


import { AsyncStorage } from 'react-native'
import { StackActions, NavigationActions} from 'react-navigation'
import SplashScreen from '../components/SplashScreen'

class SplashScreenContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      UserId:''
    }
  }

  async componentDidMount(){
    // this._toLogout()
    const session = await AsyncStorage.getItem('LogIn')
    const lock = await AsyncStorage.getItem('Lock')
    console.log('status lock ',lock)
    if(session == 'LoggedIn'){
      if( lock == 'Locked'){
        this.navigateToLockScreen()
      }else{
        this.navigateToHome()
        this.setState({loadings: true})
        funGetUser().then((keyValue) => {
          this.props.GetUser(keyValue)
          console.log(this.props.loginResult)
        }, (error) => {
          console.log(error) //Display error
        })
      }
    }else{
      this.navigateToLogin()
    }
  }
  

  async navigateToHome(){
    setTimeout(() => {
      this.props.navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'TabNavigator', params:true})]
        })
      )
    }, 300000)
  }

  navigateToLockScreen(){
    setTimeout(() => {
      this.props.navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'PinContainer'})]
        })
      )
    }, 500)
  }

  async _toLogout(){
    await AsyncStorage.clear()
    await this.props.navigation.dispatch(
      StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({routeName:'LoginContainer'})]
      })
    )
  }

  navigateToLogin(){
    setTimeout(() => {
      this.props.navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'LoginContainer'})]
        })
      )
    }, 1500)
  }

  render() {
    return (
      <SplashScreen />
    )
  }

}

export default SplashScreenContainer