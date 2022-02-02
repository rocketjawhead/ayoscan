import React, { Component } from 'react'
import { connect } from 'react-redux'
import { URL_API } from '../env'
import { AsyncStorage, View,Alert } from 'react-native'
import Wallet from '../components/Wallet'
import { _getWallet  } from '../actions/wallet'
import { _getGrafik  } from '../actions/expanses'
import ListWallet from '../particles/ListWallet'
import { _getTrx  } from '../actions/home'
import ListTrx from '../particles/ListTrx'
class WalletContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      active: true,
      Session:'',
      listWallet:'',
      CurrentBalance:'',
      Poin:'',
      LastTransaction:'',
      LastType:'',
      btnDay:false,
      btnWeek:false,
      btnMonth:false,
      btnYear:true,
      TrxDay:[],
      TrxWeek:[],
      TrxMonth:[],
      TrxYear:[],
      RefreshWallet:false,
      
      
      
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
    await this.getWallet()
    await this.getTrx()
  }

  async _doRefresh() {
    await this.setState({ RefreshWallet: true });
    await this.getWallet()
    await this.getTrx()
    await this.setState({ RefreshWallet: false })
  }


  async getWallet(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getWallet(id)
    const res = await this.props.dataWallet
    await this.setState({loading: false})
    await this.setState({ listWallet: res.Data })
  }


  async getTrx(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getTrx(id)
    const res = await this.props.dataTrx
    await this.setState({loading: false})
    await this.setState({
      TrxDay: res.DataDay, 
      TrxWeek: res.DataWeek, 
      TrxMonth:res.DataMonth,
      TrxYear: res.DataYear })
  }


  render() {
    return (
      <Wallet 
      //chart
      modalLoading={ this.state.loading }
      //refresh
      _doRefresh={() => this._doRefresh()}
      _onRefresh={this.state.RefreshWallet}
      //end refresh
      
      addWallet = { () => this.props.navigation.navigate('AddWalletContainer')}
      
      valueCurrentBalance = {this.state.CurrentBalance}
      valuePoin = { this.state.Poin }
      valueLastTransaction = {this.state.LastTransaction}
      valueLastType = { this.state.LastType == '1' ? '+' : '-'}

      onPressBtnDay = { () => this.setState({
        btnDay:!this.state.btnDay,
        btnWeek:false,
        btnMonth:false,
        btnYear:false,
      }) }
      valueBtnDay = {this.state.btnDay}

      onPressBtnWeek = { () => this.setState({
        btnWeek:!this.state.btnWeek,
        btnDay:false,
        btnMonth:false,
        btnYear:false,
      }) }
      valueBtnWeek = {this.state.btnWeek}

      onPressBtnMonth = { () => this.setState({
        btnMonth:!this.state.btnMonth,
        btnDay:false,
        btnWeek:false,
        btnYear:false,
      }) }
      valueBtnMonth = {this.state.btnMonth}

      onPressBtnYear = { () => this.setState({
        btnYear:!this.state.btnYear,
        btnDay:false,
        btnWeek:false,
        btnMonth:false
      }) }
      valueBtnYear = {this.state.btnYear}

      
      
      //list wallet
      dataWallet = { this.state.listWallet }
      renderItemWallet = { ({item}) => (
        <ListWallet 
          name = { item.name }
          amount = { item.amount }
          color = { item.color }
          type = { item.type }
        />
      )}
      //end wallet

      //historyDay
      dataHistory = {
        this.state.btnDay == true ? this.state.TrxDay : 
        this.state.btnWeek == true ? this.state.TrxWeek :
        this.state.btnMonth == true ? this.state.TrxMonth :
        this.state.btnYear == true ? this.state.TrxYear : ''
      }
      renderItemHistory = { ({item}) => (
        <ListTrx 
          title = { item.judul_transaksi }
          judul_kategori = {item.judul_kategori}
          amount = { item.jumlah }
          imageurl = { item.imageurl }
          trxTime = { item.tgl_transaksi }
          getYear = {item.tgl_transaksi.substring(0,4)}
          asd = {item.tgl_transaksi.substring(5,7)}
          trxType = {item.tipe_transaksi}
          nama_rekening = {item.nama_rekening}
          nama_bank = {item.nama_bank}
          wallet = {item.wallet}
          getMonth = {
            item.tgl_transaksi.substring(5,7) == "01" ? "januari" : 
            item.tgl_transaksi.substring(5,7) == "02" ? "Februari" :
            item.tgl_transaksi.substring(5,7) == "03" ? "Maret" :
            item.tgl_transaksi.substring(5,7) == "04" ? "April" :
            item.tgl_transaksi.substring(5,7) == "05" ? "Mei" :
            item.tgl_transaksi.substring(5,7) == "06" ? "Juni" :
            item.tgl_transaksi.substring(5,7) == "07" ? "Juli" :
            item.tgl_transaksi.substring(5,7) == "08" ? "Agustus" :
            item.tgl_transaksi.substring(5,7) == "09" ? "September" :
            item.tgl_transaksi.substring(5,7) == "10" ? "Oktober" :
            item.tgl_transaksi.substring(5,7) == "11" ? "November" :
            item.tgl_transaksi.substring(5,7) == "12" ? "Desember" : ""
          }
          getDate = {item.tgl_transaksi.substring(8,10)}
          DetailTrx = { () => 
                item.tipe_transaksi == '4' ?
                this.props.navigation.navigate('DetailTransferContainer',item):
                item.tipe_transaksi == '3' ?
                this.props.navigation.navigate('DetailCicilanContainer',item)
                :
                this.props.navigation.navigate('DetailTransactionContainer',item)
                }
        />
      )}

      //end history

      

      
      />
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.loading,
  dataTrx: state.dataTrx,
  dataWallet: state.dataWallet,
  // dataGrafik : state.dataGrafik
})

const mapDispatchToProps = dispatch => ({
  _getTrx: (id) => dispatch(_getTrx(id)),
  _getWallet: (id) => dispatch(_getWallet(id)),
  // _getGrafik: (id) => dispatch(_getGrafik(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(WalletContainer)