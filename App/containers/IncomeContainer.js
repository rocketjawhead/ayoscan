import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { _addIncome } from '../actions/defisit'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import Income from '../components/Income'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import { _addUserActivity,  } from '../actions/useractivity'
import ModalCategory from '../modals/ModalCategory';
import { _getWallet  } from '../actions/wallet'
import { URL_API } from '../env'
//wallet
import ModalWallet from '../modals/ModalWallet';
import ListWallet from '../particles/ListWalletTrx'

class IncomeContainer extends Component{

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
      Session:'',
      openListCategories:false,
      listCategories:[],
      searchList:'',
      mainSaldo:'',
      modalVisibleCategory:false,
      listWallet:'',
      //wallet
      titleWallet:'',
      wallet:'',
      idwallet:'',
      saldo:'',
      openListWallet:false,
      listWallet:[],
      modalVisibleWallet:false,
      tipe_kategori:'1',
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
    // await console.log('user id income',this.state.Session.id)
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
    await this.setState({loading: true})
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({loading:false})
    await this.setState({listCategories:res.credit_category})
  }

  // async saveIt(){
  //   const data = await {
  //     title: this.state.title,
  //     id_kategori:this.state.id_kategori,
  //     date: this.state.date,
  //     catatan:this.state.note,
  //     amount: this.state.amount,
  //     ewalletcode:this.state.Session.ewalletcode,
  //     id_wallet : this.state.idwallet
  //   }
  //   await this.props._addIncome(data)
  //   const res = await this.props.dataAddDefisit
  //   if(res.Status == 'Success'){
  //     const { navigation } = await this.props
  //     await navigation.dispatch(
  //       StackActions.reset({
  //         index:0,
  //         actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
  //       })
  //     )
  //     await Alert.alert('Informasi', 'Berhasil Tambah Pemasukan')
  //   }
  // }

  async saveIt()
  {
    await this.setState({loading: true})

    if(this.state.amount == '' || this.state.amount == 0)
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nominal transaksi')
    }else if(this.state.title == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input judul transaksi')
    }else if(this.state.id_kategori == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih kategori')
    }else{
      const response = await fetch(`${URL_API}Transaksi/tambahpemasukan`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              judul_transaksi:this.state.title,
              id_kategori:this.state.id_kategori,
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


  async getCategories(){
    await this.setState({loading: true})
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({loading:false})
    await this.setState({listCategories:res.credit_category})
  }

  async getWallet(){
    await this.setState({loading:true})
    const id = await this.state.Session.ewalletcode
    await this.props._getWallet(id)
    const res = await this.props.dataWallet
    await this.setState({loading:false})
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

  async handleOpenCategory(){
    this.setState({modalVisibleCategory: true})
  }

  async handleOpenWallet(){
    this.setState({
      modalVisibleWallet: true,
    })
  }

  async _newCategory(){
    this.setState({
      modalVisibleCategory: false,
    })
    await this.props.navigation.navigate('AddCategoryContainer',this.state.tipe_kategori)
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
                tipe_kategori = {item.tipe_kategori}
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
      

      <Income
        modalLoading={ this.state.loading }
        mainSaldo = { this.state.mainSaldo }
          //wallet
        valueTitleWallet = {this.state.titleWallet}
        valueAmountWallet = {this.state.wallet}
        valueTipeKategori = {this.state.tipe_kategori}

          //end
        onChangeTitle = { (title) => this.setState({title})}
        valueTitle = { this.state.title }

        onChangeCategory = { (category) => this.setState({category})}
        valueCategory = { this.state.category }
        onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}
        openListCategories = { this.state.openListCategories }
        openCategory = { () => this.handleOpenCategory() }

        onChangeNote = { (note) => this.setState({note}) }
        valueNote = { this.state.note }

        onChangeDate = { (date) => this.setState({date}) }
        valueDate = { this.state.date }

        onChangeAmount = { (amount) => this.setState({amount}) }
        valueAmount = { this.state.amount }

        

        // renderListCategories = { 
        //   <SearchableFlatList 
        //     data = { this.state.listCategories }
        //     searchTerm = { this.state.category }
        //     searchAttribute = {"judul_kategori"}
        //     ignoreCase={true}
        //     renderItem={ ({item}) => (
        //       <ListCategory 
        //         title = { item.judul_kategori }
        //         selectCategory = { () => this.setState({
        //           category: item.judul_kategori, 
        //           openListCategories: false,
        //           modalVisibleCategory: false
        //         })}
        //       />
        //     )}
        //   />
        // }

        // data = { this.sta}

        //start Wallet
        onChangeFocusWallet = { () => this.setState(
          {openListWallet: !this.state.openListWallet }
          )}
        openListWallet = { this.state.openListWallet }
        openWallet = { () => this.handleOpenWallet() }
        //end Wallet
        goBack = { () => this.props.navigation.goBack() }   
        saveIt = { () => this.saveIt() }
        backToHome = { () => this.props.navigation.navigate('HomeContainer')}
        newCategory = { () => this.props.navigation.navigate('AddCategoryContainer')}
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
  dataWallet: state.dataWallet
})

const mapDispatchToProps = dispatch => ({
  _getCategoriesDefisit: (id) => dispatch(_getCategoriesDefisit(id)),
  _addCategoriesDefisit: (data) => dispatch(_addCategoriesDefisit(data)),
  _addUserActivity: (data) => dispatch(_addUserActivity(data)),
  // _getTrx: (id) => dispatch(_getTrx(id)),
  // _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  // _getDefisit: (id) => dispatch(_getDefisit(id)),
  _getWallet: (id) => dispatch(_getWallet(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IncomeContainer)