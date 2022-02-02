import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import DetailCategory from '../components/DetailCategory'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListIcon from '../particles/ListIcon'
import { _getIcon  } from '../actions/icon'
import ModalIcon from '../modals/ModalIcon';

class DetailCategoryContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      id:this.props.navigation.state.params.id,
      id_icon:this.props.navigation.state.params.id_icon,
      icon:this.props.navigation.state.params.imageurl,
      title:this.props.navigation.state.params.judul_kategori,
      tipe_kategori : this.props.navigation.state.params.tipe_kategori,
      openListIcon:false,
      listIcon:[],
      modalVisibleIcon:false,
      
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

  async _editKategori()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Kategori/editkategori`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
                id:this.state.id,
              ewalletcode:await this.state.Session.ewalletcode,
              judul_kategori:this.state.title,
              id_icon:this.state.id_icon,
              tipe_kategori:this.state.tipe_kategori,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result edit kategori', dataRes)
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

  async deleteIt()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Kategori/deletekategori`, {
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
        await console.log('result edit kategori', dataRes)
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

      <DetailCategory 
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
        saveIt = { () => this._editKategori() }
        deleteIt = { () => 
            Alert.alert(
              'Informasi',
              'Apakah anda ingin menghapus?',
              [            
                {text: 'Ya', onPress: () => this.deleteIt()},  
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
  dataIcon: state.dataIcon
})

const mapDispatchToProps = dispatch => ({
  _getIcon: (id) => dispatch(_getIcon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailCategoryContainer)

// export default DetailCategoryContainer
