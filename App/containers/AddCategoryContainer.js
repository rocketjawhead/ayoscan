import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import AddCategory from '../components/AddCategory'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListIcon from '../particles/ListIcon'
import { _getIcon  } from '../actions/icon'
import ModalIcon from '../modals/ModalIcon';

class AddCategoryContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      title:'',
      icon:'',
      id_icon:'',
      openListIcon:false,
      listIcon:[],
      modalVisibleIcon:false,
      tipe_kategori : ''
    }
  }

  async componentDidMount(){
    
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getIcon()
    await console.log('tipe kategori : ',this.props.navigation.state.params) 
    
  }


  async _addCategory()
  {
    await this.setState({loading: true})
    if(this.state.title == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input judul')
    }else if(this.state.id_icon == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih icon')
    }else if(this.state.tipe_kategori == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan tipe kategori')
    }else{
      const response = await fetch(`${URL_API}Kategori/tambahkategori`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              judul_kategori:this.state.title,
              tipe_kategori:this.state.tipe_kategori,
              ewalletcode:await this.state.Session.ewalletcode,
              id_icon:this.state.id_icon,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result add category', dataRes)
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

  async getIcon(){
    const id = await this.state.Session.ewalletcode
    await this.props._getIcon(id)
    const res = await this.props.dataIcon
    await this.setState({ 
      listIcon: res.Data
     })
     await console.log('ini data icon',res.Data)
  }

  async handleOpenIcon(){
    this.setState({
      modalVisibleIcon: true,
    })
  }

  async goSelect1(){
    this.setState({
      tipe_kategori: 1,
    })
  }

  async goSelect2(){
    this.setState({
      tipe_kategori: 2,
    })
  }


  render() {
    return (

      <>
      <ModalIcon 
          modalVisibleIcon = { this.state.modalVisibleIcon }
          closeIcon = { () => this.setState({modalVisibleIcon: false})}
          // onChangeName = { (name) => this.setState({name}) }

          renderListIcon = {
            <FlatList 
              data = { this.state.listIcon }
              numColumns={4}
              // searchTerm= { this.state.Icon }
              // searchAttribute = { "Icon" }
              // ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListIcon 
                title = { item.title }
                imageurl = {item.imageurl}
                selectIcon = { () => this.setState({
                  icon: item.imageurl, 
                  id_icon: item.id,
                  openListIcon: false,
                  modalVisibleIcon: false
                })}
              />
              )}
            />
          }
        />

      <AddCategory 
        modalLoading={ this.state.loading }
        valueIcon={this.state.icon}
        valueTipeKategori = {this.state.tipe_kategori}

        select1 = { () => this.goSelect1() }
        select2 = { () => this.goSelect2() }

        onChangeTitle = { (title) => this.setState({title})}
        valueTitle = { this.state.title }

        //start Icon
        onChangeFocusIcon = { () => this.setState(
          {openListIcon: !this.state.openListIcon }
          )}
        openListIcon = { this.state.openListIcon }
        openIcon = { () => this.handleOpenIcon() }
        //end Icon
        saveIt = { () => this._addWallet() }
        addCategory = { () => this._addCategory() }
        goBack = { () => this.props.navigation.goBack() }
      />
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  dataIcon: state.dataIcon
})

const mapDispatchToProps = dispatch => ({
  _getIcon: (id) => dispatch(_getIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer)

// export default AddCategoryContainer
