import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { _addIncome } from '../actions/defisit'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import Cicilan from '../components/Cicilan'
import { SearchableFlatList } from 'react-native-searchable-list'
import { _addUserActivity,  } from '../actions/useractivity'
import { _getWallet  } from '../actions/wallet'
import { _getCicilan  } from '../actions/cicilan'
import { URL_API } from '../env'
//wallet
import ModalWallet from '../modals/ModalWallet';
import ListWallet from '../particles/ListWalletTrx'

import ModalCicilan from '../modals/ModalCicilan';
import ListCicilan from '../particles/ListCicilan'

class CicilanContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      title:'',
      id_kategori:'',
      amount:'',
      date:'',
      note:'',
      Session:'',
      openListCategories:false,
      listCategories:[],
      searchList:'',
      mainSaldo:'',
      listWallet:'',
      //wallet
      titleWallet:'',
      wallet:'',
      idwallet:'',
      saldo:'',
      openListWallet:false,
      listWallet:[],
      modalVisibleWallet:false,
      tipe_kategori:'2',
      //Cicilan
      listCicilan:[],
      nama_bank:'',
      norek:'',
      nama_cicilan:'',
      total_cicilan:'',
      id_cicilan:'',
      openListCicilan:false,
      modalVisibleCicilan:false,
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
    await this.getWallet()
    await this.getCicilan()
    await console.log('data Cicilan === ',this.state.listCicilan)
  }

  async _setDateNow(){
    var today = await new Date();
    var year = await today.getFullYear()
    var month = await today.getMonth()+1 < 10 ? '0'+ (today.getMonth()+1).toString() : today.getMonth()+1
    var day = await today.getDate()
    var date = await year+'/'+month+'/'+day
    await this.setState({date:date})
  }

  async saveIt()
  {
    await this.setState({loading: true})

    if(this.state.amount == '' || this.state.amount == 0)
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih cicilan')
    }else if(this.state.id_cicilan == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih cicilan')
    }else{
    const response = await fetch(`${URL_API}Transaksi/tambahcicilan`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              // judul_transaksi:this.state.title,
              id_cicilan:this.state.id_cicilan,
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
        await console.log('result add cicilan', dataRes)
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

  async getCicilan(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getCicilan(id)
    const res = await this.props.dataCicilan
    await this.setState({loading: false})
    await this.setState({ 
      listCicilan: res.Data
    })
  }

  async handleOpenWallet(){
    this.setState({
      modalVisibleWallet: true,
    })
  }

  async handleOpenCicilan(){
    this.setState({
      modalVisibleCicilan: true,
    })
  }

  async _newCicilan(){
    this.setState({
      modalVisibleCicilan: false,
    })
    await this.props.navigation.navigate('AddCicilanContainer')
  }

  

  render() {
    console.log(this.state)
     return (
       
      <>
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


      {/* Cicilan */}
      <ModalCicilan 
          modalVisibleCicilan = { this.state.modalVisibleCicilan }
          closeCicilan = { () => this.setState({
            modalVisibleCicilan: false,
            // idCicilan:this.state.idCicilan, 
            // Cicilan:this.state.Cicilan,
            // titleCicilan:this.state.titleCicilan
          })}
          // onChangeName = { (name) => this.setState({name}) }
          newCicilan = { () => this._newCicilan() }
          renderListCicilan = {
            <FlatList 
              data = { this.state.listCicilan }
              renderItem = { ({item}) => (
                <ListCicilan 
                title = { item.judul_cicilan }
                amount = { item.jumlah_bayar }
                imageurl = {item.imageurl}
                selectCicilan = { () => this.setState({
                  nama_cicilan: item.judul_cicilan,
                  amount:item.jumlah_bayar,
                  total_cicilan:item.total_cicilan,
                  id_cicilan : item.id, 
                  openListCicilan: false,
                  modalVisibleCicilan: false
                })}
              />
              )}
            />
          }
        />
      {/* end Cicilan */}
      

      <Cicilan 
      modalLoading={ this.state.loading }
        mainSaldo = { this.state.mainSaldo }
          //wallet
        valueTitleWallet = {this.state.titleWallet}
        valueAmountWallet = {this.state.wallet}
        valueTipeKategori = {this.state.tipe_kategori}

        valueListCicilan = {this.state.listCicilan}
        valueIdCicilan = {this.state.id_cicilan}
          //end
        // onChangeTitle = { (title) => this.setState({title})}
        // valueTitle = { this.state.title }
        valueNamaCicilan = {this.state.nama_cicilan}
        valueTotalCicilan = {this.state.total_cicilan}

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
        onChangeFocusCicilan = { () => this.setState(
          {openListCicilan: !this.state.openListCicilan }
          )}
        openListCicilan = { this.state.openListCicilan }
        openCicilan = { () => this.handleOpenCicilan() }
        //start Cicilan

        //end Cicilan
        goBack = { () => this.props.navigation.goBack() }   
        saveIt = { () => this.saveIt() }
        backToHome = { () => this.props.navigation.navigate('HomeContainer')}

        newCicilan = { () => this.props.navigation.navigate('AddCicilanContainer')}
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
  dataCicilan: state.dataCicilan
})

const mapDispatchToProps = dispatch => ({
  _getCategoriesDefisit: (id) => dispatch(_getCategoriesDefisit(id)),
  _addCategoriesDefisit: (data) => dispatch(_addCategoriesDefisit(data)),
  _addUserActivity: (data) => dispatch(_addUserActivity(data)),
  // _getTrx: (id) => dispatch(_getTrx(id)),
  // _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  // _getDefisit: (id) => dispatch(_getDefisit(id)),
  _getWallet: (id) => dispatch(_getWallet(id)),
  _getCicilan: (id) => dispatch(_getCicilan(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CicilanContainer)