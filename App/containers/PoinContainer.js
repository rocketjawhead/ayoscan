import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getGift } from '../actions/gift'
import { _getHistoryPoin } from '../actions/poin'
import { StackActions, NavigationActions } from 'react-navigation'

import Poin from '../components/Poin'
import ListGift from '../particles/ListGift'
import ListRedeemPoin from '../particles/ListRedeemPoin'
import { SearchableFlatList } from 'react-native-searchable-list'

class PoinContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listGift:'',
      listPoin:''
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await console.log('ini ewal',this.state.Session.ewalletcode)
    await this.getGift()
    await this.getPoin()
  }

  async getGift(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getGift(id)
    const res = await this.props.dataGift
    await this.setState({loading: false})
    await this.setState({ 
        listGift: res.Data
     })
     await console.log('ini data gift',res)
  }


  async getPoin(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getHistoryPoin(id)
    const res = await this.props.dataPoin
    await this.setState({loading: false})
    await console.log('ini data poin',res)
    await this.setState({ 
        listPoin: res.Data
     })
     
  }
  render() {

    return (
      <Poin 
        modalLoading={ this.state.loading }
        addCicilan = { () => this.props.navigation.navigate('AddCicilanContainer')}
        //
        goBack = { () => this.props.navigation.goBack() }
        dataGift= { this.state.listGift }
        renderItemGift= { ({item}) => (
          <ListGift 
            id = {item.id }
            title = {item.title }
            ket = {item.keterangan }
            imageurl = { item.imageurl}
            toDetailGift = { () => this.props.navigation.navigate('RedeemPoinContainer',item)}
          />
        )}
        //end
        //
        dataPoin= { this.state.listPoin }
        renderItemPoin= { ({item}) => (
          <ListRedeemPoin 
            id = {item.id }
            title = {item.name_trx }
            debit_poin = {item.debit_poin}
            credit_poin = {item.credit_poin}
            getYear = {item.create_date.substring(0,4)}
            getMonth = {
              item.create_date.substring(5,7) == "01" ? "januari" : 
              item.create_date.substring(5,7) == "02" ? "Februari" :
              item.create_date.substring(5,7) == "03" ? "Maret" :
              item.create_date.substring(5,7) == "04" ? "April" :
              item.create_date.substring(5,7) == "05" ? "Mei" :
              item.create_date.substring(5,7) == "06" ? "Juni" :
              item.create_date.substring(5,7) == "07" ? "Juli" :
              item.create_date.substring(5,7) == "08" ? "Agustus" :
              item.create_date.substring(5,7) == "09" ? "September" :
              item.create_date.substring(5,7) == "10" ? "Oktober" :
              item.create_date.substring(5,7) == "11" ? "November" :
              item.create_date.substring(5,7) == "12" ? "Desember" : ""
            }
            getDate = {item.create_date.substring(8,10)}
            type_trx = {item.type_trx }
            status = { item.statusApprove}
          />
        )}
        //end
      />
    )
  }

}

const mapStateToProps = (state) => ({
  dataGift : state.dataGift,
  dataPoin : state.dataPoin
})

const mapDispatchToProps = dispatch => ({
  _getGift: (id) => dispatch(_getGift(id)),
  _getHistoryPoin: (id) => dispatch(_getHistoryPoin(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(PoinContainer)