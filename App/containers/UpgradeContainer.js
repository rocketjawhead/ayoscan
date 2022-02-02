import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getUpgrade } from '../actions/upgrade'

import { StackActions, NavigationActions } from 'react-navigation'

import Upgrade from '../components/Upgrade'
import ListUpgrade from '../particles/ListUpgrade'
import ListFitur from '../particles/ListFitur'
import { SearchableFlatList } from 'react-native-searchable-list'
import { URL_API } from '../env'

class UpgradeContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      listUpgrade:'',
      info_user_upgrade:'',
      amount:'',
      keterangan:'',
      status_upgrade:'',
      listFitur:''
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getUpgrade()
    await this.getPrice()
    await this.getStatusUpgrade()
    await this.getFitur()
  }

  async getPrice() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Apperance/getprice`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({
          amount:dataRes.Amount,
          keterangan : dataRes.Keterangan
        })
        await console.log('ini data Amount',dataRes.Amount)
  }

  async getStatusUpgrade() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/statusupgrade`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({
          status_upgrade:dataRes.Data,
        })
        await console.log('ini data status upgrade',dataRes.Data)
  }

  async getFitur() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Apperance/fiturpremium`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({
          listFitur:dataRes.Data,
        })
        await console.log('ini data status fitur',dataRes.Data)
  }

  async getUpgrade(){
    const id = await this.state.Session.ewalletcode
    await this.props._getUpgrade(id)
    const res = await this.props.dataUpgrade
    await this.setState({ 
      listUpgrade: res.Data
     })
     await console.log('ini data upgrade',res.Data)
  }
  //end
  render() {

    return (
      <Upgrade 
      modalLoading={ this.state.loading }
        //upgrade
        valueUserUpgrade = {this.state.status_upgrade}
        //
        valueAmount = {this.state.amount}
        valueKeterangan = {this.state.keterangan}
        //
        goBack = { () => this.props.navigation.goBack() }
        toPremium = { () => this.props.navigation.navigate('PremiumContainer')}
        //
        dataUpgrade = { this.state.listUpgrade }
        renderItemUpgrade = { ({item}) => (
          <ListUpgrade 
            title = { item.bank }
            acc_bank = { item.acc_bank }
            norek = { item.rekening }
            imageurl = { item.imageurl }
          />
        )}
        //end upgrade
        //
        dataFitur = { this.state.listFitur }
        renderItemFitur = { ({item}) => (
          <ListFitur 
            title = { item.judul }
          />
        )}
        //
      />
    )
  }

}

const mapStateToProps = (state) => ({
    dataUpgrade: state.dataUpgrade
})

const mapDispatchToProps = dispatch => ({
  _getUpgrade: (data) => dispatch(_getUpgrade(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(UpgradeContainer)