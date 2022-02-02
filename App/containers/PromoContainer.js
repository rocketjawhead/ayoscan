import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { _getBookmark,_addBookmark,_deleteBookmark } from '../actions/blog'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import Promo from '../components/Promo'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import { URL_API } from '../env'
class PromoContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      id:this.props.navigation.state.params.id,
      title:this.props.navigation.state.params.title_promo,
      desc:this.props.navigation.state.params.desc_promo,
      imageurl:this.props.navigation.state.params.imageurl,
      imageurl_merchant:this.props.navigation.state.params.imageurl_merchant,
      title_merchant:this.props.navigation.state.params.title_merchant,
      valid_from:this.props.navigation.state.params.validFrom,
      valid_to:this.props.navigation.state.params.validTo,
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

     return (
      <Promo 
        title = {this.state.title}
        desc = {this.state.desc}
        imageurl = {this.state.imageurl}
        imageurl_merchant = {this.state.imageurl_merchant}
        title_merchant = {this.state.title_merchant}
        valid_from = {this.state.valid_from}
        valid_to = {this.state.valid_to}
        backToHome = { () => this.props.navigation.goBack() }

        //date from
        getYearFrom = {this.state.valid_from.substring(0,4)}
        getMonthFrom = {
          this.state.valid_from.substring(5,7) == "01" ? "januari" : 
          this.state.valid_from.substring(5,7) == "02" ? "Februari" :
          this.state.valid_from.substring(5,7) == "03" ? "Maret" :
          this.state.valid_from.substring(5,7) == "04" ? "April" :
          this.state.valid_from.substring(5,7) == "05" ? "Mei" :
          this.state.valid_from.substring(5,7) == "06" ? "Juni" :
          this.state.valid_from.substring(5,7) == "07" ? "Juli" :
          this.state.valid_from.substring(5,7) == "08" ? "Agustus" :
          this.state.valid_from.substring(5,7) == "09" ? "September" :
          this.state.valid_from.substring(5,7) == "10" ? "Oktober" :
          this.state.valid_from.substring(5,7) == "11" ? "November" :
          this.state.valid_from.substring(5,7) == "12" ? "Desember" : ""
        }
        getDateFrom = {this.state.valid_from.substring(8,10)}
        //

        //date from
        getYearTo = {this.state.valid_to.substring(0,4)}
        getMonthTo = {
          this.state.valid_to.substring(5,7) == "01" ? "januari" : 
          this.state.valid_to.substring(5,7) == "02" ? "Februari" :
          this.state.valid_to.substring(5,7) == "03" ? "Maret" :
          this.state.valid_to.substring(5,7) == "04" ? "April" :
          this.state.valid_to.substring(5,7) == "05" ? "Mei" :
          this.state.valid_to.substring(5,7) == "06" ? "Juni" :
          this.state.valid_to.substring(5,7) == "07" ? "Juli" :
          this.state.valid_to.substring(5,7) == "08" ? "Agustus" :
          this.state.valid_to.substring(5,7) == "09" ? "September" :
          this.state.valid_to.substring(5,7) == "10" ? "Oktober" :
          this.state.valid_to.substring(5,7) == "11" ? "November" :
          this.state.valid_to.substring(5,7) == "12" ? "Desember" : ""
        }
        getDateTo = {this.state.valid_to.substring(8,10)}
        //

      />
    )
  }
}

// export default DetailTransactionContainer
// const mapStateToProps = (state) => ({
//   dataBookmark: state.dataBookmark
// })

// const mapDispatchToProps = dispatch => ({
//   _getBookmark: (data) => dispatch(_getBookmark(data)),
//   _addBookmark: (data) => dispatch(_addBookmark(data)),
//   _deleteBookmark: (data) => dispatch(_deleteBookmark(data)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PromoContainer)
export default PromoContainer