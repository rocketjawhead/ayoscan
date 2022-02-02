import React, { Component } from 'react'
import axios from 'axios'
import { View, Alert} from 'react-native'

import BroAle from '../components/BroAle'
import { URL_API } from '../env'

import Contact from '../particles/Contact'

class BroAleContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      data:'',
      firstname:'',
      lastname:''
    }
  }

  componentDidMount(){
    this.getContact()
  }

  getContact(){
    var self = this
    axios.get(`${URL_API}index.php/kontak`)
    .then( function(response) {
      const data = response.data
      self.setState({data})
    })
    .catch( function(err) {
      console.log(err)
    })
    .finally( function(){
      console.log('asyu tenan')
    })
  }

  saveit(){
    var self = this
    axios({
      method:'POST',
      url:`${URL_API}index.php/kontak`,
      data:{
        firstname: self.state.firstname,
        lastname: self.state.lastname,
      }
    })
    .then( function(response) {
      alert(response.status)
    })
    .catch( function(err) {
      alert(err)
    })
  }

  delete(id){
    var self = this
    axios({
      method:'DELETE',
      url:`${URL_API}index.php/kontak`,
      data:{
        id:id,
      },
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then( function(response) {
      alert(response.status)
      console.log(response)
    })
    .catch( function(err) {
      alert(err)
    })
  }

  render() {
    return (
      <BroAle 
        
        data={ this.state.data }
        renderItem={ ({item}) => (
          <Contact 
            firstname = { item.firstname }
            lastname = { item.lastname }
            imageUrl = { item.imageurl }
            email = { item.email }
            onPress = { () => 
              Alert.alert(
                'Alert Title',
                'Select Action',
                [
                  {text: 'Delete', onPress: () => this.delete(item.id)},
                  {text: 'Edit', onPress: () => this.props.navigation.navigate('EditBroAleContainer', item)},
                ],
              )
              
               }
          />
        )}

        onChangeFirstname = { (firstname) => this.setState({firstname}) }
        onChangeLastname = { (lastname) => this.setState({lastname}) }
        save = { () => this.saveit() }
      />
    )
  }

}

export default BroAleContainer