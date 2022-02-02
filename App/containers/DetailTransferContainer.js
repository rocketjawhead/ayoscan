import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { _addIncome } from '../actions/defisit'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import DetailTransfer from '../components/DetailTransfer'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import { _addUserActivity,  } from '../actions/useractivity'
import ModalCategory from '../modals/ModalCategory';
import { _getWallet  } from '../actions/wallet'
import { _getRekening  } from '../actions/rekening'
import { URL_API } from '../env'
//wallet
import ModalWallet from '../modals/ModalWallet';
import ListWallet from '../particles/ListWalletTrx'

import ModalRekening from '../modals/ModalRekening';
import ListRekening from '../particles/ListRekening'

class DetailTransferContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      id:this.props.navigation.state.params.id,
      title:'',
      category:'',
      id_kategori:'',
      amount:this.props.navigation.state.params.jumlah,
      date:this.props.navigation.state.params.tgl_transaksi,
      note:this.props.navigation.state.params.catatan,
      Session:'',
      openListCategories:false,
      listCategories:[],
      searchList:'',
      mainSaldo:'',
      modalVisibleCategory:false,
      listWallet:'',
      //wallet
      wallet_trx:this.props.navigation.state.params.wallet,
      titleWallet:this.props.navigation.state.params.wallet,
      wallet:'',
      idwallet:this.props.navigation.state.params.id_wallet,
      saldo:'',
      openListWallet:false,
      listWallet:[],
      modalVisibleWallet:false,
      tipe_kategori:'2',
      //rekening
      listRekening:[],
      nama_bank:this.props.navigation.state.params.nama_bank,
      norek:this.props.navigation.state.params.nomor_rekening,
      nama_rekening:this.props.navigation.state.params.nama_rekening,
      id_rekening:this.props.navigation.state.params.id_rekening,
      openListRekening:false,
      modalVisibleRekening:false,
    }
  }

  async componentDidMount(){
    
    await this._setDateNow()
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.saveUserActivity()
    await this.getCategories()
    await this.getWallet()
    await this.getRekening()
    await console.log('data rekening === ',this.state.listRekening)
  }

  async _setDateNow(){
    var today = await new Date();
    var year = await today.getFullYear()
    var month = await today.getMonth()+1 < 10 ? '0'+ (today.getMonth()+1).toString() : today.getMonth()+1
    var day = await today.getDate()
    var date = await year+'/'+month+'/'+day
    // await this.setState({date:date})
  }

  async getCategories(){
    await this.setState({loading: true})
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({loading: false})
    await this.setState({listCategories:res.debit_category})
  }

  async saveIt()
  {
    await this.setState({loading: true})
    if(this.state.amount == '' || this.state.amount == 0)
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nominal transaksi')
    }else if(this.state.id_rekening == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih rekening tujuan')
    }else{
    const response = await fetch(`${URL_API}Transaksi/edittransfer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              id_trx:this.state.id,
              id_rekening:this.state.id_rekening,
              tgl_transaksi:this.state.date,
              catatan:this.state.note,
              jumlah:this.state.amount,
              ewalletcode:await this.state.Session.ewalletcode,
              id_wallet:this.state.idwallet,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result add transaksi', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          Alert.alert('Informasi', dataRes.Message)
          await this.props.navigation.dispatch(
            StackActions.reset({
              index:0,
              actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
            })
          )
        }else{
          Alert.alert('Informasi', dataRes.Message)
        }
      }
  }

  async deleteIt()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Transaksi/deleteData`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              id:this.state.id,
              ewalletcode:await this.state.Session.ewalletcode,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result delete transaksi', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          Alert.alert('Informasi', dataRes.Message)
          await this.props.navigation.dispatch(
            StackActions.reset({
              index:0,
              actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
            })
          )
        }else{
          Alert.alert('Informasi', dataRes.Message)
        }
  }

  async saveCategoryDefisit(){
    const data = await {
      judul_kategori:this.state.category, 
      deskripsi_kategori:'', 
      tipe_kategori:1,
      user_id:this.state.Session.id
    }
    await this.props._addCategoriesDefisit(data)
  }

  async saveUserActivity(){
    const data = await {
      user_id: await this.state.Session.id,
      title_page: 'INCOME',
      id_blog: '',
      id_ref_source: '',
      
    }
    await this.props._addUserActivity(data)
    const res = await this.props.dataUserActivity
    await console.log("USER ACTIVITY INCOME",res.Status)
  }


  async handleOpenCategory(){
    this.setState({modalVisibleCategory: true})
  }

  async getWallet(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getWallet(id)
    const res = await this.props.dataWallet
    await this.setState({loading: false})
    await this.setState({ 
      listWallet: res.Data,
      idwallet:res.Data[0].id, 
      wallet:res.Data[0].amount,
      titleWallet:res.Data[0].name
      // saldo:Data[0].id,
    })
    // await this.setState({ 
    //   listWallet: res.Data,
    //   wallet:res.Data[0].name,
    //   idwallet:res.Data[0].id,
    //   amountWallet:Data[0].amount,
    //  })
    await console.log('ini list wallet ',res.Data[0].amount)
  }

  async getRekening(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getRekening(id)
    const res = await this.props.dataRekening
    await this.setState({loading: false})
    await this.setState({ 
      listRekening: res.Data
    })
  }

  async handleOpenWallet(){
    this.setState({
      modalVisibleWallet: true,
    })
  }

  async handleOpenRekening(){
    this.setState({
      modalVisibleRekening: true,
    })
  }

  async _newCategory(){
    this.setState({
      modalVisibleCategory: false,
    })
    await this.props.navigation.navigate('AddCategoryContainer',this.state.tipe_kategori)
  }

  async _newRekening(){
    this.setState({
      modalVisibleRekening: false,
    })
    await this.props.navigation.navigate('AddRekeningContainer')
  }

  

  render() {
    console.log(this.state)
     return (
       
      <>
      <ModalCategory 
          modalVisibleCategory = { this.state.modalVisibleCategory }
          closeCategory = { () => this.setState({modalVisibleCategory: false})}
          newCategory = { () => this._newCategory() }
          // onChangeName = { (name) => this.setState({name}) }

          renderListCategory = {
            <FlatList 
              data = { this.state.listCategories }
              // searchTerm= { this.state.category }
              // searchAttribute = { "judul_kategori" }
              // ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListCategory 
                title = { item.judul_kategori }
                id_kategori = {item.id}
                imageurl = {item.imageurl}
                selectCategory = { () => this.setState({
                  category: item.judul_kategori, 
                  id_kategori: item.id,
                  openListCategories: false,
                  modalVisibleCategory: false
                })}
              />
              )}
            />
          }
        />

      {/* wallet */}
      <ModalWallet 
          modalVisibleWallet = { this.state.modalVisibleWallet }
          closeWallet = { () => this.setState({
            modalVisibleWallet: false,
            // idwallet:this.state.idwallet, 
            // wallet:this.state.wallet,
            // titleWallet:this.state.titleWallet
          })}
          // onChangeName = { (name) => this.setState({name}) }

          renderListWallet = {
            <FlatList 
              data = { this.state.listWallet }
              // searchTerm= { this.state.titleWallet }
              // searchAttribute = { "name" }
              // ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListWallet 
                title = { item.name }
                amount = {item.amount}
                selectWallet = { () => this.setState({
                  wallet: item.amount,
                  titleWallet:item.name,
                  idwallet : item.id, 
                  openListWallet: false,
                  modalVisibleWallet: false
                })}
              />
              )}
            />
          }
        />
      {/* end wallet */}


      {/* rekening */}
      <ModalRekening 
          modalVisibleRekening = { this.state.modalVisibleRekening }
          closeRekening = { () => this.setState({
            modalVisibleRekening: false,
            // idRekening:this.state.idRekening, 
            // Rekening:this.state.Rekening,
            // titleRekening:this.state.titleRekening
          })}
          // onChangeName = { (name) => this.setState({name}) }
          newRekening = { () => this._newRekening() }
          renderListRekening = {
            <FlatList 
              data = { this.state.listRekening }
              renderItem = { ({item}) => (
                <ListRekening 
                title = { item.nama_rekening }
                title_bank = { item.nama_bank }
                norek = {item.nomor_rekening}
                selectRekening = { () => this.setState({
                  nama_rekening: item.nama_rekening,
                  nama_bank:item.nama_bank,
                  norek:item.nomor_rekening,
                  id_rekening : item.id, 
                  openListRekening: false,
                  modalVisibleRekening: false
                })}
              />
              )}
            />
          }
        />
      {/* end rekening */}
      

      <DetailTransfer 
      modalLoading={ this.state.loading }
        mainSaldo = { this.state.mainSaldo }
          //wallet
        valueTitleWallet = {this.state.titleWallet}
        valueAmountWallet = {this.state.wallet}
        valueTipeKategori = {this.state.tipe_kategori}

        valueListRekening = {this.state.listRekening}
        valueIdRekening = {this.state.id_rekening}
          //end
        // onChangeTitle = { (title) => this.setState({title})}
        // valueTitle = { this.state.title }
        valueNamaRekening = {this.state.nama_rekening}
        valueNamaBank = {this.state.nama_bank}
        valueNorek = {this.state.norek}
        valueWalletTrx = {this.state.wallet_trx}

        // onChangeCategory = { (category) => this.setState({category})}
        // valueCategory = { this.state.category }
        // onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}
        // openListCategories = { this.state.openListCategories }
        // openCategory = { () => this.handleOpenCategory() }

        onChangeNote = { (note) => this.setState({note}) }
        valueNote = { this.state.note }

        onChangeDate = { (date) => this.setState({date}) }
        valueDate = { this.state.date }

        onChangeAmount = { (amount) => this.setState({amount}) }
        valueAmount = { this.state.amount }

        
        //start Wallet
        onChangeFocusWallet = { () => this.setState(
          {openListWallet: !this.state.openListWallet }
          )}
        openListWallet = { this.state.openListWallet }
        openWallet = { () => this.handleOpenWallet() }
        //end Wallet
        onChangeFocusRekening = { () => this.setState(
          {openListRekening: !this.state.openListRekening }
          )}
        openListRekening = { this.state.openListRekening }
        openRekening = { () => this.handleOpenRekening() }
        //start rekening

        //end rekening
        goBack = { () => this.props.navigation.goBack() }   
        saveIt = { () => this.saveIt() }
        deleteIt = { () => 
          Alert.alert(
            'Informasi',
            'Apakah anda ingin menghapus?',
            [            
              {text: 'Ya', onPress: () => this.deleteIt()},  
              {text: 'Tidak', onPress: () => console.log('OK Pressed')}
              
            ]
          ) }
        backToHome = { () => this.props.navigation.navigate('HomeContainer')}
        newCategory = { () => this.props.navigation.navigate('AddCategoryContainer')}

        newRekening = { () => this.props.navigation.navigate('AddRekeningContainer')}
      />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dataAddCategoriesDefisit: state.dataAddCategoriesDefisit,
  dataCategoriesDefisit: state.dataCategoriesDefisit,
  dataUserActivity: state.dataUserActivity,
  // dataTrx: state.dataTrx,
  // dataRemaining: state.dataRemaining,
  // dataDefisit: state.dataDefisit,
  dataWallet: state.dataWallet,
  dataRekening: state.dataRekening
})

const mapDispatchToProps = dispatch => ({
  _getCategoriesDefisit: (id) => dispatch(_getCategoriesDefisit(id)),
  _addCategoriesDefisit: (data) => dispatch(_addCategoriesDefisit(data)),
  _addUserActivity: (data) => dispatch(_addUserActivity(data)),
  // _getTrx: (id) => dispatch(_getTrx(id)),
  // _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  // _getDefisit: (id) => dispatch(_getDefisit(id)),
  _getWallet: (id) => dispatch(_getWallet(id)),
  _getRekening: (id) => dispatch(_getRekening(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailTransferContainer)