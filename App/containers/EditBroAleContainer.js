import React, { Component } from 'react'
import axios from 'axios'
import { View, Alert} from 'react-native'

import { URL_API } from '../env'

import EditBroAle from '../components/EditBroale'

class EditBroAleContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      data:'',
      firstname:this.props.navigation.state.params.firstname,
      lastname:this.props.navigation.state.params.lastname,
      id: this.props.navigation.state.params.id
    }
  }

  saveit(){
    var self = this
    axios({
      method:'PUT',
      url:`${URL_API}index.php/kontak`,
      data:{
        id: self.state.id,
        firstname: self.state.firstname,
        lastname: self.state.lastname,
      },
    })
    .then( function(response) {
      if( response.status == '200'){
        self.props.navigation.navigate('BroAleContainer')
      }
    })
    .catch( function(err) {
      alert(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <EditBroAle 

        valueFirstname = { this.state.firstname }
        valueLastname = { this.state.lastname }

        onChangeFirstname = { (firstname) => this.setState({firstname}) }
        onChangeLastname = { (lastname) => this.setState({lastname}) }
        save = { () => this.saveit() }
      />
    )
  }

}

export default EditBroAleContainer