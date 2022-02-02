import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View } from 'react-native'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import { _getPromo,  } from '../actions/promo'
import { _getBlog,_getBlogDashboard  } from '../actions/blog'
import { _addUserActivity,  } from '../actions/useractivity'
import { _getWallet  } from '../actions/wallet'

import Home from '../components/Home'
import ListTrx from '../particles/ListTrx'
import ListPromo from '../particles/ListPromo'
import ListBlog from '../particles/ListBlog'
import ListWallet from '../particles/ListWallet'
import { SearchableFlatList } from 'react-native-searchable-list'
import { URL_API,VERSION_APP,SECRET_KEY } from '../env'
class HomeContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      active: true,
      Session:'',
      mainSaldo:'',
      totalIncome:'',
      totalOutcome:'',
      totalInstallment:'',
      TrxPeriod: 'DAY',
      dataPromo:'',
      promo:'',
      CurrentBalance:'',
      Poin:'',
      LastTransaction:'',
      LastType:'',
      infoGreeting:'',
      total_notif:'',
      RefreshHome:false,
      version_app:VERSION_APP,
      version:'',
      fullname:'',
      SECRET_KEY:SECRET_KEY
      
    }
  }

  async componentDidMount(){
    if (this.state.active == false) {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: "PinContainer" })
          ]
        })
      );
    }

    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    AsyncStorage.setItem('Lock','Locked')
    await this.getGreeting()
    await this.getPromo()
    await this.getVerified()
    await this.getBalance()
  }

  async _doRefresh() {
    await this.setState({ RefreshHome: true });
    await this.getGreeting()
    await this.getPromo()
    await this.getVerified()
    await this.getBalance()
    await this.setState({ RefreshHome: false })
  }

  onAction = (active) => {
    this.setState({
      active,
    });
    AsyncStorage.setItem('Lock','Locked')
  }

  async getGreeting() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Apperance/getGreeting`, {
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
        await this.setState({loading: false})
        await this.setState({infoGreeting:dataRes.Data})
  }

  async getVerified() {
    await this.setState({loading: true})
    // console.log('ini ewallet ',this.state.Session.ewalletcode)
    const response = await fetch(`${URL_API}User/getVerified`, {
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
          is_verified:dataRes.Data,
          fullname:dataRes.Data.fullname
        })
        await console.log('ini data status is_verified',dataRes.Data)
  }


  async getBalance() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Transaksi/getCurrentBalance`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: this.state.SECRET_KEY
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({
          CurrentBalance:dataRes.CurrentBalance
        })
        await console.log('ini data status is_verified',dataRes.Data)
  }

  async getPromo(){
    //const secretkey = 'NOEL'
    await this.props._getPromo()
    const res = await this.props.dataPromo
    await this.setState({listPromo: res.Data})
  }
  render() {
    

    return (
      
      <Home 
        modalLoading={ this.state.loading }
        valueVersion = {this.state.version}

        //refresh
        _doRefresh={() => this._doRefresh()}
        _onRefresh={this.state.RefreshHome}
        //end refresh
        valueGreeting = {this.state.infoGreeting}
        fullname = {this.state.fullname}
        CurrentBalance = {this.state.CurrentBalance}

        toTransfer = { () => this.props.navigation.navigate('ChooseTransferContainer')}

        // promo
        data = { this.state.listPromo }
        renderItem = { ({item}) => (
          <ListPromo 
            id = { item.id }
            title = { item.title_promo.substring(0,85) }
            gambar = { item.imageurl }
            desc_promo = { item.desc_promo }
            validfrom = { item.validFrom }
            validto = { item.validTo }
            title_merchant = { item.title_merchant }
            title_category = { item.title_category }
            toDetailPromo = { () => this.props.navigation.navigate('PromoContainer',item)}
          />
        )}
        // end promo

      />
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.loading,
  // dataTrx: state.dataTrx,
  // dataRemaining: state.dataRemaining,
  // dataDefisit: state.dataDefisit,
  // dataTrx: state.dataTrx,
  dataPromo: state.dataPromo,
  // dataBlog: state.dataBlog,
  // dataBlogDashboard: state.dataBlogDashboard,
  // dataUserActivity: state.dataUserActivity,
  // dataWallet: state.dataWallet
})

const mapDispatchToProps = dispatch => ({
  // _getTrx: (id) => dispatch(_getTrx(id)),
  // _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  // _getDefisit: (id) => dispatch(_getDefisit(id)),
  // _getTrx: (id) => dispatch(_getTrx(id)),
  _getPromo: (id) => dispatch(_getPromo()),
  // _getBlog: (id) => dispatch(_getBlog()),
  // _getBlogDashboard: (id) => dispatch(_getBlogDashboard()),
  // _addUserActivity: (data) => dispatch(_addUserActivity(data)),
  // _getWallet: (id) => dispatch(_getWallet(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)