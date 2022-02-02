import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { _addIncome } from '../actions/defisit'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import AddTransaction from '../components/AddTransaction'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import ListType from '../particles/ListType'
import { _addUserActivity,  } from '../actions/useractivity'
import ModalCategory from '../modals/ModalCategory';
import ModalTypeTransaction from '../modals/ModalTypeTransaction';
import { URL_API } from '../env'
class AddTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      title:'',
      category:'',
      typeTransaction:'',
      amount:'',
      date:'',
      note:'',
      Session:'',
      openListCategories:false,
      openListTypeTransaction:false,
      listCategories:[],
      listTypeTransaction:[],
      searchList:'',
      mainSaldo:'',
      modalVisibleCategory:false,
      modalVisibleTypeTransaction:false,
      
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
    await this.getRemainingSaldo()
    await this.getTrx()
    await this.getDefisit()
    await this.getTypeTransaksi()
    await console.log('user id income',this.state.Session.id)
  }

  async _setDateNow(){
    var today = await new Date();
    var year = await today.getFullYear()
    var month = await today.getMonth()+1 < 10 ? '0'+ (today.getMonth()+1).toString() : today.getMonth()+1
    var day = await today.getDate()
    var date = await year+'/'+month+'/'+day
    await this.setState({date:date})
  }

  async getCategories(){
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({listCategories:res.credit_category})
  }

  async saveIt(){
    const data = await {
      amount: this.state.amount,
      date: this.state.date,
      title: this.state.title,
      category: this.state.category,
      id: this.state.Session.id
    }
    await this.props._addIncome(data)
    const res = await this.props.dataAddDefisit
    if(res.Status == 'Success'){
      await this.saveCategoryDefisit()
      const { navigation } = await this.props
      await navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
        })
      )
      await Alert.alert('Informasi', 'Berhasil Tambah Pemasukan')
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

  async getRemainingSaldo(){
    const id = await this.state.Session.id
    await this.props._getRemainSaldo(id)
    const res = await this.props.dataRemaining
    await this.setState({
      remainingSaldoDay: res.Harian,
      remainingSaldoWeek: res.Mingguan,
      remainingSaldoMonth: res.Bulanan,
      spentMoneyDay: res.Harian_now,
      maxSpentMoneyDay: res.Harian_max,
      spentMoneyWeek: res.Mingguan_now,
      maxSpentMoneyWeek: res.Mingguan_max,
      spentMoneyMonth: res.Bulanan_now,
      maxSpentMoneyMonth: res.Bulanan_max
    })
  }

  async getDefisit(){
    const id = await this.state.Session.id
    await this.props._getDefisit(id)
    const res = await this.props.dataDefisit
    await this.setState({
      totalIncome:res.pemasukan, 
      totalOutcome:res.pengeluaran, 
      mainSaldo:res.totalSaldo,
      totalInstallment: res.cicilan
    })
  }

  async getTrx(){
    const id = await this.state.Session.id
    await this.props._getTrx(id)
    const res = await this.props.dataTrx
    await this.setState({
      TrxDay: res.DataDay, 
      TrxWeek: res.DataWeek, 
      TrxMonth:res.DataMonth,
      TrxYear: res.DataYear })
  }

  async handleOpenCategory(){
    this.setState({modalVisibleCategory: true})
  }

  async handleOpenTypeTransaction(){
    this.setState({modalVisibleTypeTransaction: true})
  }

  //new
  async getTypeTransaksi() {
    const response = await fetch(`${URL_API}Base/getTypeTransaction`, {
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
        await console.log("ini type transaction",dataRes.Data)
        await this.setState({
          listTypeTransaction : dataRes.Data
        })
  }
  //

  render() {
    console.log(this.state)
     return (
       
      <>
      <ModalCategory 
          modalVisibleCategory = { this.state.modalVisibleCategory }
          closeCategory = { () => this.setState({modalVisibleCategory: false})}
          onChangeName = { (name) => this.setState({name}) }

          renderListCategory = {
            <SearchableFlatList 
              data = { this.state.listCategories }
              searchTerm= { this.state.category }
              searchAttribute = { "judul_kategori" }
              ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListCategory 
                title = { item.judul_kategori }
                selectCategory = { () => this.setState({
                  category: item.judul_kategori, 
                  openListCategories: false,
                  modalVisibleCategory: false
                })}
              />
              )}
            />
          }
        />

        {/* start type transaction */}
        <ModalTypeTransaction 
          modalVisibleTypeTransaction = { this.state.modalVisibleTypeTransaction }
          closeTypeTransaction = { () => this.setState({modalVisibleTypeTransaction: false})}
          onChangeName = { (name) => this.setState({name}) }

          renderListTypeTransaction = {
            <SearchableFlatList 
              data = { this.state.listTypeTransaction }
              searchTerm= { this.state.typeTransaction }
              searchAttribute = { "judul" }
              ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListType 
                title = { item.judul }
                imageurl = { item.imageurl }
                selectTypeTransaction = { () => this.setState({
                  typeTransaction: item.judul, 
                  openListTypeTransaction: false,
                  modalVisibleTypeTransaction: false
                })}
              />
              )}
            />
          }
        />
        {/* end type transaction */}
      

      <AddTransaction 
        mainSaldo = { this.state.mainSaldo }
        onChangeTitle = { (title) => this.setState({title})}
        valueTitle = { this.state.title }
        onChangeCategory = { (category) => this.setState({category})}
        valueCategory = { this.state.category }
        onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}
        onChangeNote = { (note) => this.setState({note}) }
        valueNote = { this.state.note }
        onChangeDate = { (date) => this.setState({date}) }
        valueDate = { this.state.date }
        onChangeAmount = { (amount) => this.setState({amount}) }
        valueAmount = { this.state.amount }
        openListCategories = { this.state.openListCategories }

        openCategory = { () => this.handleOpenCategory() }
        

        //start type transaction
        onChangeFocusTypeTransaction = { () => this.setState(
            {openListTypeTransaction: !this.state.openListTypeTransaction }
            )}
        openListTypeTransaction = { this.state.openListTypeTransaction }
        openTypeTransaction = { () => this.handleOpenTypeTransaction() }
        //end type transaction

        saveIt = { () => this.saveIt() }
        backToHome = { () => this.props.navigation.navigate('HomeContainer')}
      />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dataAddDefisit: state.dataAddDefisit,
  dataAddCategoriesDefisit: state.dataAddCategoriesDefisit,
  dataCategoriesDefisit: state.dataCategoriesDefisit,
  dataUserActivity: state.dataUserActivity,
  dataTrx: state.dataTrx,
  dataRemaining: state.dataRemaining,
  dataDefisit: state.dataDefisit,
})

const mapDispatchToProps = dispatch => ({
  _addIncome: (data) => dispatch(_addIncome(data)),
  _getCategoriesDefisit: (id) => dispatch(_getCategoriesDefisit(id)),
  _addCategoriesDefisit: (data) => dispatch(_addCategoriesDefisit(data)),
  _addUserActivity: (data) => dispatch(_addUserActivity(data)),
  _getTrx: (id) => dispatch(_getTrx(id)),
  _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  _getDefisit: (id) => dispatch(_getDefisit(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionContainer)