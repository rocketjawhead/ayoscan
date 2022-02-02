import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import DetailBudget from '../components/DetailBudget'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
import { _getCategoriesDefisit, _addCategoriesDefisit} from '../actions/categories'
import { _getPeriode} from '../actions/periode'
//category
import ListCategory from '../particles/ListCategory'
import ModalCategory from '../modals/ModalCategoryAll';
//periode
import ListPeriode from '../particles/ListPeriode'
import ModalPeriode from '../modals/ModalPeriode';

class DetailBudgetContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      id:this.props.navigation.state.params.id,
      Session:'',
      title:this.props.navigation.state.params.judul_kategori,
      category:'',
      id_kategori:this.props.navigation.state.params.id_kategori,
      jumlah:this.props.navigation.state.params.jumlah,
      openListCategories:false,
      listCategories:[],
      icon:this.props.navigation.state.params.imageurl,
      modalVisibleCategory:false,
      periode:this.props.navigation.state.params.judul_periode,
      id_periode:this.props.navigation.state.params.id_periode,
      listPeriode:'',
      openListPeriode:false,
      modalVisiblePeriode:false,
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getCategories()
    await this.getPeriode()
    await console.log('id periode',this.state.id_periode)
  }

  async _addBudget()
  {
    await this.setState({loading: true})
    if(this.state.id_kategori == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih kategori')
    }else if(this.state.jumlah == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan masukkan jumlah')
    }else if(this.state.id_periode == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih periode')
    }else{
    const response = await fetch(`${URL_API}Budget/editbudget`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              id_trx : this.state.id,
              id_kategori:this.state.id_kategori,
              jumlah:this.state.jumlah,
              id_periode:this.state.id_periode,
              ewalletcode:await this.state.Session.ewalletcode,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result add budget', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          Alert.alert('Informasi', dataRes.Message)
          // await this.props.navigation.goBack()
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

  async _deleteBudget()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Budget/deletebudget`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              id_trx : this.state.id,
              id_kategori:this.state.id_kategori,
              jumlah:this.state.jumlah,
              id_periode:this.state.id_periode,
              ewalletcode:await this.state.Session.ewalletcode,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result add budget', dataRes)
        await this.setState({loading:false})
        if(dataRes.ResponCode == '00'){
          Alert.alert('Informasi', dataRes.Message)
          // await this.props.navigation.goBack()
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

  async getCategories(){
    await this.setState({loading: true})
    const id = await this.state.Session.id
    await this.props._getCategoriesDefisit(id)
    const res = await this.props.dataCategoriesDefisit
    await this.setState({loading:false})
    await this.setState({listCategories:res.Data})
  }


  async getPeriode() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Periode/getperiode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode : this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({listPeriode:dataRes.Data})
        await console.log('data periode',dataRes.Data)
  }

  async handleOpenCategory(){
    this.setState({modalVisibleCategory: true})
  }

  async handleOpenPeriode(){
    this.setState({modalVisiblePeriode: true})
  }

  async _newCategory(){
    this.setState({
      modalVisibleCategory: false,
    })
    await this.props.navigation.navigate('AddCategoryContainer',this.state.tipe_kategori)
  }



  render() {
    return (

      <>
      <ModalCategory 
      modalVisibleCategory = { this.state.modalVisibleCategory }
      closeCategory = { () => this.setState({modalVisibleCategory: false})}
      newCategory = { () => this._newCategory() }
      renderListCategory = {
        <FlatList 
          data = { this.state.listCategories }
          renderItem = { ({item}) => (
            <ListCategory 
            title = { item.judul_kategori }
            id_kategori = {item.id}
            imageurl = {item.imageurl}
            tipe_kategori ={ item.tipe_kategori}
            selectCategory = { () => this.setState({
              title: item.judul_kategori, 
              id_kategori: item.id,
              icon:item.imageurl,
              openListCategories: false,
              modalVisibleCategory: false
            })}
          />
          )}
        />
      }
    />

          <ModalPeriode 
                modalVisiblePeriode = { this.state.modalVisiblePeriode }
                closePeriode = { () => this.setState({modalVisiblePeriode: false})}
                renderListPeriode = {
                  <FlatList 
                    data = { this.state.listPeriode }
                    renderItem = { ({item}) => (
                      <ListPeriode 
                      title = { item.judul }
                      selectPeriode = { () => this.setState({
                        periode: item.judul, 
                        id_periode: item.id,
                        openListPeriode: false,
                        modalVisiblePeriode: false
                      })}
                    />
                    )}
                  />
                }
              />

      <DetailBudget 
        modalLoading={ this.state.loading }
        
        valueIdCategory = {this.state.id_kategori}
        valueIcon = {this.state.icon}
        valueTitleCategory = {this.state.title}

        valueIdPeriode = {this.state.id_periode}
        valuePeriode = {this.state.periode}

        valueAmount = {this.state.jumlah}
        onChangeAmount = { (jumlah) => this.setState({jumlah})}


        //start Category
        onChangeCategory = { (category) => this.setState({category})}
        valueCategory = { this.state.category }
        onChangeFocusCategories = { () => this.setState({openListCategories: !this.state.openListCategories })}
        openListCategories = { this.state.openListCategories }
        openCategory = { () => this.handleOpenCategory() }
        //end Category

        //start Category
        onChangePeriode = { (periode) => this.setState({periode})}
        valuePeriode = { this.state.periode }
        onChangeFocusPeriode = { () => this.setState({openListPeriode: !this.state.openListPeriode })}
        openListPeriode = { this.state.openListPeriode }
        openPeriode = { () => this.handleOpenPeriode() }
        //end Category

        AddBudget = { () => this._addBudget() }
        DeleteBudget = { () => 
          Alert.alert(
            'Informasi',
            'Apakah anda ingin menghapus?',
            [            
              {text: 'Ya', onPress: () => this._deleteBudget()},  
              {text: 'Tidak', onPress: () => console.log('OK Pressed')}
              
            ]
          ) }
        goBack = { () => this.props.navigation.goBack() }
      />
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  dataCategoriesDefisit: state.dataCategoriesDefisit,
  // dataPeriode: state.dataPeriode,
})

const mapDispatchToProps = dispatch => ({
  _getCategoriesDefisit: (id) => dispatch(_getCategoriesDefisit(id)),
  // _getPeriode: (id) => dispatch(_getPeriode(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailBudgetContainer)

// export default DetailBudgetContainer
