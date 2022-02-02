import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import StatisticMoney from '../components/StatisticMoney'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListJob from '../particles/ListJob'
import { URL_API } from '../env'
import { _getSummary } from '../actions/summary'

class StatisticMoneyContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      loading:false,
      listSummary:'',
      tahun:'',
      //januari
      total_pemasukan_januari:'',
      total_pengeluaran_januari:'',
      selisih_transaksi_januari:'',
      //februari
      total_pemasukan_februari:'',
      total_pengeluaran_februari:'',
      selisih_transaksi_februari:'',
      //maret
      total_pemasukan_maret:'',
      total_pengeluaran_maret:'',
      selisih_transaksi_maret:'',
      //april
      total_pemasukan_april:'',
      total_pengeluaran_april:'',
      selisih_transaksi_april:'',
      //mei
      total_pemasukan_mei:'',
      total_pengeluaran_mei:'',
      selisih_transaksi_mei:'',
      //juni
      total_pemasukan_juni:'',
      total_pengeluaran_juni:'',
      selisih_transaksi_juni:'',
      //juli
      total_pemasukan_juli:'',
      total_pengeluaran_juli:'',
      selisih_transaksi_juli:'',
      //agustus
      total_pemasukan_agustus:'',
      total_pengeluaran_agustus:'',
      selisih_transaksi_agustus:'',
      //september
      total_pemasukan_september:'',
      total_pengeluaran_september:'',
      selisih_transaksi_september:'',
      //oktober
      total_pemasukan_oktober:'',
      total_pengeluaran_oktober:'',
      selisih_transaksi_oktober:'',
      //november
      total_pemasukan_november:'',
      total_pengeluaran_november:'',
      selisih_transaksi_november:'',
      //desember
      total_pemasukan_desember:'',
      total_pengeluaran_desember:'',
      selisih_transaksi_desember:'',
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
      
    })
    await this.getSummary()
  }

  async getSummary(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getSummary(id)
    const res = await this.props.dataSummary
    await this.setState({loading: false})
    await console.log('ini data summary',res.Data)
    await this.setState({ 
      listSummary: res.Data,
      tahun:res.Tahun,
      //januari
      total_pemasukan_januari:res.Data.januari.Total_pemasukan,
      total_pengeluaran_januari:res.Data.januari.Total_pengeluaran,
      selisih_transaksi_januari:res.Data.januari.Selisih_transaksi,
      //februari
      total_pemasukan_februari:res.Data.februari.Total_pemasukan,
      total_pengeluaran_februari:res.Data.februari.Total_pengeluaran,
      selisih_transaksi_februari:res.Data.februari.Selisih_transaksi,
      //maret
      total_pemasukan_maret:res.Data.maret.Total_pemasukan,
      total_pengeluaran_maret:res.Data.maret.Total_pengeluaran,
      selisih_transaksi_maret:res.Data.maret.Selisih_transaksi,
      //april
      total_pemasukan_april:res.Data.april.Total_pemasukan,
      total_pengeluaran_april:res.Data.april.Total_pengeluaran,
      selisih_transaksi_april:res.Data.april.Selisih_transaksi,
      //mei
      total_pemasukan_mei:res.Data.mei.Total_pemasukan,
      total_pengeluaran_mei:res.Data.mei.Total_pengeluaran,
      selisih_transaksi_mei:res.Data.mei.Selisih_transaksi,
      //juni
      total_pemasukan_juni:res.Data.juni.Total_pemasukan,
      total_pengeluaran_juni:res.Data.juni.Total_pengeluaran,
      selisih_transaksi_juni:res.Data.juni.Selisih_transaksi,
      //juli
      total_pemasukan_juli:res.Data.juli.Total_pemasukan,
      total_pengeluaran_juli:res.Data.juli.Total_pengeluaran,
      selisih_transaksi_juli:res.Data.juli.Selisih_transaksi,
      //agustus
      total_pemasukan_agustus:res.Data.agustus.Total_pemasukan,
      total_pengeluaran_agustus:res.Data.agustus.Total_pengeluaran,
      selisih_transaksi_agustus:res.Data.agustus.Selisih_transaksi,
      //september
      total_pemasukan_september:res.Data.september.Total_pemasukan,
      total_pengeluaran_september:res.Data.september.Total_pengeluaran,
      selisih_transaksi_september:res.Data.september.Selisih_transaksi,
      //oktober
      total_pemasukan_oktober:res.Data.oktober.Total_pemasukan,
      total_pengeluaran_oktober:res.Data.oktober.Total_pengeluaran,
      selisih_transaksi_oktober:res.Data.oktober.Selisih_transaksi,
      //november
      total_pemasukan_november:res.Data.november.Total_pemasukan,
      total_pengeluaran_november:res.Data.november.Total_pengeluaran,
      selisih_transaksi_november:res.Data.november.Selisih_transaksi,
      //desember
      total_pemasukan_desember:res.Data.desember.Total_pemasukan,
      total_pengeluaran_desember:res.Data.desember.Total_pengeluaran,
      selisih_transaksi_desember:res.Data.desember.Selisih_transaksi,
    })
  }

  render() {
     return (
      <StatisticMoney 
        modalLoading={ this.state.loading }

        tahun = {this.state.tahun}
        //januari
        total_pemasukan_januari = {this.state.total_pemasukan_januari}
        total_pengeluaran_januari = {this.state.total_pengeluaran_januari}
        selisih_transaksi_januari = {this.state.selisih_transaksi_januari}
        //februari
        total_pemasukan_februari = {this.state.total_pemasukan_februari}
        total_pengeluaran_februari = {this.state.total_pengeluaran_februari}
        selisih_transaksi_februari = {this.state.selisih_transaksi_februari}
        //maret
        total_pemasukan_maret = {this.state.total_pemasukan_maret}
        total_pengeluaran_maret = {this.state.total_pengeluaran_maret}
        selisih_transaksi_maret = {this.state.selisih_transaksi_maret}
        //april
        total_pemasukan_april = {this.state.total_pemasukan_april}
        total_pengeluaran_april = {this.state.total_pengeluaran_april}
        selisih_transaksi_april = {this.state.selisih_transaksi_april}
        //mei
        total_pemasukan_mei = {this.state.total_pemasukan_mei}
        total_pengeluaran_mei = {this.state.total_pengeluaran_mei}
        selisih_transaksi_mei = {this.state.selisih_transaksi_mei}
        //juni
        total_pemasukan_juni = {this.state.total_pemasukan_juni}
        total_pengeluaran_juni = {this.state.total_pengeluaran_juni}
        selisih_transaksi_juni = {this.state.selisih_transaksi_juni}
        //juli
        total_pemasukan_juli = {this.state.total_pemasukan_juli}
        total_pengeluaran_juli = {this.state.total_pengeluaran_juli}
        selisih_transaksi_juli = {this.state.selisih_transaksi_juli}
        //agustus
        total_pemasukan_agustus = {this.state.total_pemasukan_agustus}
        total_pengeluaran_agustus = {this.state.total_pengeluaran_agustus}
        selisih_transaksi_agustus = {this.state.selisih_transaksi_agustus}
        //september
        total_pemasukan_september = {this.state.total_pemasukan_september}
        total_pengeluaran_september = {this.state.total_pengeluaran_september}
        selisih_transaksi_september = {this.state.selisih_transaksi_september}
        //oktober
        total_pemasukan_oktober = {this.state.total_pemasukan_oktober}
        total_pengeluaran_oktober = {this.state.total_pengeluaran_oktober}
        selisih_transaksi_oktober = {this.state.selisih_transaksi_oktober}
        //november
        total_pemasukan_november = {this.state.total_pemasukan_november}
        total_pengeluaran_november = {this.state.total_pengeluaran_november}
        selisih_transaksi_november = {this.state.selisih_transaksi_november}
        //desember
        total_pemasukan_desember = {this.state.total_pemasukan_desember}
        total_pengeluaran_desember = {this.state.total_pengeluaran_desember}
        selisih_transaksi_desember = {this.state.selisih_transaksi_desember}
        
      
        // total_pemasukan_april = {this.state.listSummary}
        goBack = { () => this.props.navigation.goBack() }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  dataSummary: state.dataSummary,
})

const mapDispatchToProps = dispatch => ({
  _getSummary: (id) => dispatch(_getSummary(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(StatisticMoneyContainer)
