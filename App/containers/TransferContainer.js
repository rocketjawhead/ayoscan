import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { _addIncome } from '../actions/defisit'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import Transfer from '../components/Transfer'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import { _addUserActivity,  } from '../actions/useractivity'
import ModalCategory from '../modals/ModalCategory';
import { _getWallet  } from '../actions/wallet'
import { _getRekening  } from '../actions/rekening'
import { URL_API } from '../env'
//wallet
import ListBank from '../particles/ListBank'
import { _getBank  } from '../actions/bank'
import ModalBank from '../modals/ModalBank';

class TransferContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      title:'',
      category:'',
      id_kategori:'',
      amount:'',
      date:'',
      note:'',
      rekening:'',
      Session:'',
      openListCategories:false,
      listCategories:[],
      searchList:'',
      mainSaldo:'',
      modalVisibleCategory:false,
      listWallet:'',
      openListBank:false,
      listBank:[],
      modalVisibleBank:false,
      nama_bank:'',
    }
  }

  async componentDidMount(){
    
    // await this._setDateNow()
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getBank()
    await console.log('data rekening === ',this.state.Session.ewalletcode)
  }


  async saveIt(){
    await this.setState({loading: true})
    if(this.state.amount == '' || this.state.amount == 0)
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nominal transaksi')
    }else if(this.state.id_rekening == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih rekening tujuan')
    }else{
    const response = await fetch(`${URL_API}Transaksi/tambahtransfer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              // judul_transaksi:this.state.title,
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


  async getBank(){
    const id = await this.state.Session.ewalletcode
    console.log('ini id ',id)
    await this.props._getBank(id)
    const res = await this.props.dataBank
    await this.setState({ 
      listBank: res.Data
     })
     await console.log('ini data Bank',res.Data)
  }

  async handleOpenBank(){
    this.setState({
      modalVisibleBank: true,
    })
  }

  

  render() {
    // console.log(this.state)
     return (
       
      <>
      {/* bank */}
      <ModalBank 
          modalVisibleBank = { this.state.modalVisibleBank }
          closeBank = { () => this.setState({modalVisibleBank: false})}
          // onChangeName = { (name) => this.setState({name}) }

          renderListBank = {
            <FlatList 
              data = { this.state.listBank }
              // searchTerm= { this.state.Bank }
              // searchAttribute = { "Bank" }
              // ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListBank 
                title = { item.nama_bank }
                imageurl = {item.imageurl}
                selectBank = { () => this.setState({
                    nama_bank: item.nama_bank, 
                    id_bank: item.id,
                    kode_bank:item.kode_bank,
                    openListBank: false,
                    modalVisibleBank: false
                })}
              />
              )}
            />
          }
        />
      {/* end bank */}
      

      <Transfer 
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

        // onChangeCategory = { (category) => this.setState({category})}
        // valueCategory = { this.state.category }
        // onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}
        // openListCategories = { this.state.openListCategories }
        // openCategory = { () => this.handleOpenCategory() }

        onChangeNote = { (note) => this.setState({note}) }
        valueNote = { this.state.note }

        onChangeRekening = { (rekening) => this.setState({rekening}) }
        valueRekening = { this.state.rekening }

        onChangeDate = { (date) => this.setState({date}) }
        valueDate = { this.state.date }

        onChangeAmount = { (amount) => this.setState({amount}) }
        valueAmount = { this.state.amount }

        
        //start Bank
        onChangeFocusBank = { () => this.setState(
          {openListBank: !this.state.openListBank }
          )}
        openListBank = { this.state.openListBank }
        openBank = { () => this.handleOpenBank() }
        //end Bank

        //end rekening
        goBack = { () => this.props.navigation.goBack() }   
        // saveIt = { () => this.saveIt() }
        saveIt = { () => 
          Alert.alert(
            'Informasi',
            'Mohon Maaf saat ini fitur belum siap',
            [
              {text: 'Ya', onPress: () => console.log('OK Pressed')}
            ]
          ) }
        
        inquiry = { () => 
          Alert.alert(
            'Informasi',
            'Mohon Maaf saat ini fitur belum siap',
            [
              {text: 'Ya', onPress: () => console.log('OK Pressed')}
            ]
          ) }
        
        
      />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dataBank: state.dataBank
})

const mapDispatchToProps = dispatch => ({
  _getBank: (id) => dispatch(_getBank(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TransferContainer)