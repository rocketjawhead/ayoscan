import React, { Component } from 'react'
import { connect } from 'react-redux'
import { URL_API } from '../env'
import { AsyncStorage, View,Alert } from 'react-native'
import Analisa from '../components/Analisa'
import { _getBudget  } from '../actions/budget'
import { _getMonth  } from '../actions/month'

import ListBudget from '../particles/ListBudget'
import ListTrx from '../particles/ListTrx'
import ListMonthTrx from '../particles/ListMonthTrx'

class AnalisaContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      active: true,
      Session:'',
      BtnBudget:true,
      BtnStatistic:false,
      BtnSummary:false,
      ResBudget:'',
      min_progress:'',
      //month
      ResMonth:'',
      Month:'',
      Day:'',
      Balance:'',
      DayPercent:'',
      RefreshAnalisa:false
      
      
      
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
    await this.getBudget()
    await this.getMonth()
    await this.getDayBalance()
  }

  async _doRefresh() {
    await this.setState({ RefreshAnalisa: true });
    await this.getBudget()
    await this.getMonth()
    await this.getDayBalance()
    await this.setState({ RefreshAnalisa: false })
  }


  async getBudget(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getBudget(id)
    const res = await this.props.dataBudget
    await this.setState({loading: false})
    await this.setState({ ResBudget: res.Data })
    await console.log('data budget',res.Data)
  }

  async getMonth(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getMonth(id)
    const res = await this.props.dataMonth
    await this.setState({loading: false})
    await this.setState({ ResMonth: res.Data })
    await console.log('data month',res.Data)
  }

  async getDayBalance() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Transaksi/getBalanceDay`, {
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
          // Month:dataRes.Month,
          Day:dataRes.Day,
          DayPercent:dataRes.DayPercent,
          Balance:dataRes.Balance,
        })
  }



  render() {
    return (
      <Analisa 
      modalLoading={ this.state.loading }

      //refresh
      _doRefresh={() => this._doRefresh()}
      _onRefresh={this.state.RefreshAnalisa}
      //end refresh

      //daybalance
      valueMonth = {this.state.Month}
      valueDay = {this.state.Day}
      valueDayPercent = {this.state.DayPercent}
      valueBalance = {this.state.Balance}
      valueColor = {this.state.DayPercent >= 50 ? '#ff2047' : '#95ce67'}
      valueMinProgress = {
        this.state.DayPercent == null || this.state.DayPercent == ''  ? 
        '0' + '%' : 
        this.state.DayPercent > 100 ?
        '100' + '%' :
        this.state.DayPercent + '%'} 

      //month
      dataMonth = {this.state.ResMonth}
      renderItemMonth = { ({item}) => (
        <ListMonthTrx 
          title = { item.judul_kategori }
          qty_transaksi = {item.qty_transaksi}
          total_transaksi = {item.total_transaksi}
          imageurl = {item.imageurl}
          tahun = {item.tahun}
          bulan = {
            item.bulan == '1' ?
            'Januari' : 
            item.bulan == '2' ?
            'Februari':
            item.bulan == '3' ?
            'Maret':
            item.bulan == '4' ?
            'April':
            item.bulan == '5' ?
            'Mei':
            item.bulan == '6' ?
            'Juni':
            item.bulan == '7' ?
            'Juli':
            item.bulan == '8' ?
            'Agustus':
            item.bulan == '9' ?
            'September':
            item.bulan == '10' ?
            'Oktober':
            item.bulan == '11' ?
            'November':
            item.bulan == '12' ?
            'Desember': ''
          }
          DetailTrx = { () => this.props.navigation.navigate('DetailTrxMonthContainer',item)}
        />
      )}
      //end month

      //budget
      // onPressBtnBudget = { () => this.setState({
      //   BtnBudget:!this.state.BtnBudget,
      //   BtnStatistic:false,
      //   BtnSummary:false,
      //   btnYear:false,
      // }) }
      // valueBtnBudget = {this.state.BtnBudget}

      addBudget = { () => this.props.navigation.navigate('AddBudgetContainer')}
      dataBudget = {this.state.ResBudget}
      renderItemBudget = { ({item}) => (
        <ListBudget 
          title = { item.judul_kategori }
          periode = {item.judul_periode}
          imageurl = {item.imageurl}
          jumlah = {item.jumlah}
          sub_jumlah = {item.sub_jumlah == null ? '0' : item.sub_jumlah}
          min_progress = {
            item.min_progress == null ? 
            '0' + '%' : 
            item.min_progress > 100 ?
            '100' + '%' :
            item.min_progress + '%'} 
          max_progress = {item.max_progress + '%'}
          color = {item.min_progress >= 50 ? '#ff2047' : '#95ce67'}
          DetailTrx = { () => this.props.navigation.navigate('DetailBudgetContainer',item)}
        />
      )}
      //end budget

      //historyDay
      dataHistory = {
        this.state.BtnBudget == true ? this.state.TrxDay : 
        this.state.BtnStatistic == true ? this.state.TrxWeek :
        this.state.BtnSummary == true ? this.state.TrxMonth :
        this.state.btnYear == true ? this.state.TrxYear : ''
      }
      renderItemHistory = { ({item}) => (
        <ListTrx 
          title = { item.judul_transaksi }
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
  dataBudget: state.dataBudget,
  dataMonth: state.dataMonth,
})

const mapDispatchToProps = dispatch => ({
  _getBudget: (id) => dispatch(_getBudget(id)),
  _getMonth: (id) => dispatch(_getMonth(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AnalisaContainer)