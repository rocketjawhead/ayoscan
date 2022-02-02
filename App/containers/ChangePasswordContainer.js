import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import ChangePassword from '../components/ChangePassword'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListJob from '../particles/ListJob'
import { URL_API } from '../env'

class ChangePasswordContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      old_password:'',
      new_password_1:'',
      new_password_2:'',
      secretkey:'NOEL',
      showOldPassword: true,
      showNewPassword1: true,
      showNewPassword2: true,
      loading:false,
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
  }

  async onSave() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Account/changePassword`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            user_id: await this.state.Session.id,
            old_password: await this.state.old_password,
            new_password_1: await this.state.new_password_1,
            new_password_2: await this.state.new_password_2,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
    const dataRes = await response.json()
    await console.log('save data password', dataRes)
    await this.setState({loading: false})
    if(dataRes.Status == 'Success'){
      const { navigation } = await this.props
      await navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
        })
      )
      await Alert.alert('Informasi', dataRes.Message)
    }else{
        await Alert.alert('Informasi', dataRes.Message)
    }
  }

  render() {
     return (
      <ChangePassword 
      goBack = { () => this.props.navigation.goBack() }
      //old password
      onChangeOldPassword = { (old_password) => this.setState({old_password}) }
      valueOldPassword = { this.state.old_password }
      showOldPassword = { () => this.setState({showOldPassword: !this.state.showOldPassword})}
      valueShowOldPassword = { this.state.showOldPassword }

      //new password 1
      onChangeNewPassword1 = { (new_password_1) => this.setState({new_password_1}) }
      valueNewPassword1 = { this.state.new_password_1 }
      showNewPassword1 = { () => this.setState({showNewPassword1: !this.state.showNewPassword1})}
      valueShowNewPassword1 = { this.state.showNewPassword1 }

      //new password 2
      onChangeNewPassword2 = { (new_password_2) => this.setState({new_password_2}) }
      valueNewPassword2 = { this.state.new_password_2 }
      showNewPassword2 = { () => this.setState({showNewPassword2: !this.state.showNewPassword2})}
      valueShowNewPassword2 = { this.state.showNewPassword2 }

      onSave = { () => this.onSave() }

      />
    )
  }
}

export default ChangePasswordContainer