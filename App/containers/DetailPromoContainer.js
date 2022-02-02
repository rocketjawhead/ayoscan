import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'

import DetailPromo from '../components/DetailPromo'

class DetailPromoContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      id_promo:this.props.navigation.state.params.id,
      title:this.props.navigation.state.params.title_promo,
      gambar:this.props.navigation.state.params.imageurl,
      desc_promo:this.props.navigation.state.params.desc_promo,
      validfrom:this.props.navigation.state.params.validFrom,
      validto:this.props.navigation.state.params.validTo,
      title_merchant:this.props.navigation.state.params.title_merchant,
      title_category:this.props.navigation.state.params.title_category,
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    
  }



  render() {
    // console.log(this.state.title_category)
     return (
      <DetailPromo 
        id_promo = {this.state.id_promo}
        title = {this.state.title}
        desc_promo = {this.state.desc_promo}
        gambar = {this.state.gambar}
        validfrom = {this.state.validfrom}
        getYear = {this.state.validfrom.substring(0,4)}
        getMonth = {
          this.state.validto.substring(5,7) == "01" ? "januari" : 
          this.state.validto.substring(5,7) == "02" ? "Februari" :
          this.state.validto.substring(5,7) == "02" ? "Maret" :
          this.state.validto.substring(5,7) == "02" ? "April" :
          this.state.validto.substring(5,7) == "02" ? "Mei" :
          this.state.validto.substring(5,7) == "02" ? "Juni" :
          this.state.validto.substring(5,7) == "02" ? "Juli" :
          this.state.validto.substring(5,7) == "02" ? "Agustus" :
          this.state.validto.substring(5,7) == "02" ? "September" :
          this.state.validto.substring(5,7) == "02" ? "Oktober" :
          this.state.validto.substring(5,7) == "02" ? "November" :
          this.state.validto.substring(5,7) == "02" ? "Desember" : ""
        }
        getDate = {this.state.validto.substring(8,10)}
        validto = {this.state.validto}
        title_merchant = {this.state.title_merchant}
        title_category = {this.state.title_category}
        backToHome = { () => this.props.navigation.navigate('HomeContainer')}
        
      />
    )
  }
}


export default DetailPromoContainer