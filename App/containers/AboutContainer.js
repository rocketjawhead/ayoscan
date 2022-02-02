import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import About from '../components/About'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListJob from '../particles/ListJob'

import { URL_API } from '../env'

class AboutContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      infoAbout:''
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getAbout()
  }

  async getAbout() {
    const response = await fetch(`${URL_API}Apperance/getAbout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
	    const dataRes = await response.json()
        await console.log('result about', dataRes.Data)
        await this.setState({infoAbout:dataRes.Data})
  }


  render() {
     return (
      <About 
      goBack = { () => this.props.navigation.goBack() }

      infoAbout = { this.state.infoAbout }

      />
    )
  }
}

export default AboutContainer