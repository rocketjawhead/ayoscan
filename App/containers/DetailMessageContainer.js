import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'
import { URL_API } from '../env'
import DetailMessage from '../components/DetailMessage'
class DetailMessageContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      id:this.props.navigation.state.params.id,
      title:this.props.navigation.state.params.title,
      desc_message:this.props.navigation.state.params.desc_message,
      create_date:this.props.navigation.state.params.create_date,
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.updateIsRead()
  }


  async updateIsRead() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Message/updateRead`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            id_message:this.state.id,
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await console.log('result update read',dataRes)
  }

  //end
  render() {

    return (
      <DetailMessage 
        modalLoading={ this.state.loading }
        goBack = { () => this.props.navigation.goBack() }

        valueTitle = {this.state.title}
        valueDesc = {this.state.desc_message}
        getYear = {this.state.create_date.substring(0,4)}
        getMonth = {
            this.state.create_date.substring(5,7) == "01" ? "januari" : 
            this.state.create_date.substring(5,7) == "02" ? "Februari" :
            this.state.create_date.substring(5,7) == "03" ? "Maret" :
            this.state.create_date.substring(5,7) == "04" ? "April" :
            this.state.create_date.substring(5,7) == "05" ? "Mei" :
            this.state.create_date.substring(5,7) == "06" ? "Juni" :
            this.state.create_date.substring(5,7) == "07" ? "Juli" :
            this.state.create_date.substring(5,7) == "08" ? "Agustus" :
            this.state.create_date.substring(5,7) == "09" ? "September" :
            this.state.create_date.substring(5,7) == "10" ? "Oktober" :
            this.state.create_date.substring(5,7) == "11" ? "November" :
            this.state.create_date.substring(5,7) == "12" ? "Desember" : ""
            }
        getDate = {this.state.create_date.substring(8,10)}
        
      />
    )
  }

}

export default (DetailMessageContainer)