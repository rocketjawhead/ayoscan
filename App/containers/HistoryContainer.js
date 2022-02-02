import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import { _getPromo,  } from '../actions/promo'
import { _getBlog,  } from '../actions/blog'
import { _getHistory,  } from '../actions/history'
import { _addUserActivity,  } from '../actions/useractivity'
import { _DeleteTrx,  } from '../actions/income'

import { StackActions, NavigationActions } from 'react-navigation'
import { URL_API,VERSION_APP,SECRET_KEY } from '../env'
import History from '../components/History'
import ListTrx from '../particles/ListTrx'
import ListHistory from '../particles/ListHistory'
import { SearchableFlatList } from 'react-native-searchable-list'
class HistoryContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      mainSaldo:'',
      totalIncome:'',
      totalOutcome:'',
      totalInstallment:'',
      remainingSaldoDay:0,
      remainingSaldoWeek:0,
      remainingSaldoMonth:0,
      spentMoneyDay:0,
      maxSpentMoneyDay:0,
      spentMoneyWeek:0,
      maxSpentMoneyWeek:0,
      spentMoneyMonth:0,
      maxSpentMoneyMonth:0,
      TrxPeriod: 'DAY',
      TrxDay:'',
      TrxWeek:'',
      TrxMonth:'',
      TrxYear:'',
      dataPromo:'',
      promo:'',
      dataBlog:'',
      blog:'',
      listHistory:'',
      history:'',
      SECRET_KEY:SECRET_KEY
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getHistory()
  }

  async getHistory() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Transaksi/getHistory`, {
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
          listHistory:dataRes.Data
        })
        await console.log('history',dataRes.Data)
  }

  //end
  render() {

    return (
      <History 

        // today
        dataHistory = { this.state.listHistory }
        renderItemHistory = { ({item}) => (
          <ListHistory
            idTrx = { item.id }
            fromTrx = { item.fromTrx }
            toTrx = { item.toTrx }
            amount = { item.amount }
            ewalletcode = {this.state.Session.ewalletcode}
            creditAccount = { item.creditAccount }
            debitAccount = { item.debitAccount }
            trxDate = { item.trxDate }
          />
        )}
        

      />
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.loading,
  dataTrx: state.dataTrx,
  dataPromo: state.dataPromo,
  dataBlog: state.dataBlog,
  dataHistory: state.dataHistory,
  dataRemaining: state.dataRemaining,
  dataDefisit: state.dataDefisit,
  dataDelete : state.dataDelete,
  dataUserActivity: state.dataUserActivity
})

const mapDispatchToProps = dispatch => ({
  _getTrx: (id) => dispatch(_getTrx(id)),
  _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  _getDefisit: (id) => dispatch(_getDefisit(id)),
  _getPromo: (id) => dispatch(_getPromo()),
  _getBlog: (id) => dispatch(_getBlog()),
  _getHistory: (id) => dispatch(_getHistory(id)),
  _DeleteTrx: (id) => dispatch(_DeleteTrx(id)),
  _addUserActivity: (data) => dispatch(_addUserActivity(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HistoryContainer)