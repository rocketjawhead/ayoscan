import React, { Component } from 'react'
import { Alert } from 'react-native'

import DetailTransaction from '../components/DetailTransaction'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'


class DetailTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      result_data:'',
      title:this.props.navigation.state.params.judul_transaksi,
      trxTime:this.props.navigation.state.params.tgl_transaksi,
      amount:this.props.navigation.state.params.jumlah,
      trxType:this.props.navigation.state.params.tipe_transaksi,
      trxCategory:this.props.navigation.state.params.judul_kategori,
      idTrx:this.props.navigation.state.params.id,
      Session:'',
      category:'',
      openListCategories:false,
      listCategories:[],
      searchList:''
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    // if(trxType == 1){
        await this.getCategoriesCredit()
    // }else{
    //     await this.getCategoriesDebit()
    // }
    
    
  }

  async getCategoriesCredit(){
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await console.log("getCategoriesCredit",res)
    await this.setState({listCategories:res.credit_category})
  }


  async getCategoriesDebit(){
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({listCategories:res.debit_category})
  }



  render() {
    console.log('data detail',this.props.navigation.state.params)
    return (
      <DetailTransaction   
        valueTitle = {this.state.title}
        valueDate = {this.state.trxTime}
        valueAmount = {this.state.amount}
        valueTrxType = {this.state.trxType}
        valueCategory = {this.state.trxCategory}

        onChangeTitle = { (title) => this.setState({title})}
        onChangeDate = { (trxTime) => this.setState({trxTime})}
        onChangeAmount = { (amount) => this.setState({amount})}
        onChangeTrxType = { (trxType) => this.setState({trxType})}

        onChangeCategory = { (trxCategory) => this.setState({trxCategory})}
        onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}

        openListCategories = { this.state.openListCategories }

        renderListCategories = { 
          <SearchableFlatList 
            data = { this.state.listCategories }
            searchTerm = { this.state.category }
            searchAttribute = {"judul_kategori"}
            ignoreCase={true}
            renderItem={ ({item}) => (
              <ListCategory 
                title = { item.judul_kategori }
                selectCategory = { () => this.setState({category: item.judul_kategori, openListCategories: false})}
              />
            )}
          />
        }

        // save = { () => this.putContact() }
      />
    )
  }

}

export default DetailTransactionContainer