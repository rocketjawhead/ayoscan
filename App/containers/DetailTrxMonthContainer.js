import React, { Component } from 'react'
import { connect } from 'react-redux'
import { URL_API } from '../env'
import { AsyncStorage, View,Alert } from 'react-native'
import DetailTrxMonth from '../components/DetailTrxMonth'
import ListTrx from '../particles/ListDetailTrxMonth'

class DetailTrxMonthContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      active: true,
      Session:'',
      id_kategori:this.props.navigation.state.params.id_kategori,
      listMonth:''
      
      
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

    await this.getTrxMonth()
  }

  async getTrxMonth() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Transaksi/getTrxDebitMonthDetail`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            id_kategori : this.state.id_kategori,
            ewalletcode : this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({listMonth:dataRes.Data})
        await console.log('data detail',dataRes.Data)
  }


  render() {
    return (
      <DetailTrxMonth 
      //chart
      modalLoading={ this.state.loading }
      goBack = { () => this.props.navigation.goBack() }
      //historyDay
      dataMonth = { this.state.listMonth }
      renderItemMonth = { ({item}) => (
        <ListTrx 
          title = { item.judul_transaksi }
          judul_kategori = {item.judul_kategori}
          amount = { item.jumlah }
          imageurl = { item.imageurl }
          trxTime = { item.tgl_transaksi }
          getYear = {item.tgl_transaksi.substring(0,4)}
          asd = {item.tgl_transaksi.substring(5,7)}
          trxType = {item.tipe_transaksi}
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
        />
      )}

      //end history

      

      
      />
    )
  }

}



export default (DetailTrxMonthContainer)