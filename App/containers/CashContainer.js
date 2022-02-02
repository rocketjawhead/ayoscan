import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import { Alert } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import Cash from '../components/Cash'
import { URL_API } from '../env'

class CashContainer extends Component{

  constructor(props){
    super(props)
    this.state={
        amount:'',
        email:this.props.navigation.state.params,
    }
  }

  async componentDidMount(){
    await console.log('email : ',this.state.email) 
    
  }

  async _doCash(){
    await this.setState({loading: true})
    await console.log('email input: ',this.state.email) 
    await console.log('amount input : ',this.state.amount) 
    const response = await fetch(`${URL_API}User/firstcash`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            email: this.state.email,
            amount:this.state.amount,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading:false})
        await console.log('single result first full', dataRes.ResponCode)
        // await console.log('single result first status', dataRes.Status)
        // await console.log('single result first cash', dataRes.ResponCode)
        if(dataRes.ResponCode == '00'){
            await AsyncStorage.setItem('LogIn', "LoggedIn")
            const { navigation } = await this.props
            await navigation.dispatch(
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
      <Cash 

        modalLoading={ this.state.loading }
        doCash = { () => this._doCash() }
        onChangeCash = { (amount) => this.setState({amount}) }
        valueCash = { this.state.amount }

      />
    )
  }

}


export default CashContainer
