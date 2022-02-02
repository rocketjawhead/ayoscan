import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import AddCicilan from '../components/AddCicilan'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListIcon from '../particles/ListIcon'
import { _getIcon  } from '../actions/icon'
import ModalIcon from '../modals/ModalIcon';

class AddCicilanContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      title:'',
      amount:'',
      tenor:'',
      tgl_bayar:'',
      note:'',
      icon:'',
      id_icon:'',
      openListIcon:false,
      listIcon:[],
      modalVisibleIcon:false,
      tipe_kategori : this.props.navigation.state.params
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

  async _addCicilan()
  {
    await this.setState({loading: true})
    if(this.state.title == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input judul')
    }else if(this.state.tenor == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih tenor')
    }else if(this.state.amount == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input jumlah')
    }else if(this.state.tgl_bayar == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input tanggal tempo bayar')
    }else if(this.state.id_icon == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih icon')
    }else{
      const response = await fetch(`${URL_API}Cicilan/addcicilan`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              ewalletcode:await this.state.Session.ewalletcode,
              judul_cicilan:this.state.title,
              tenor:this.state.tenor,
              jumlah_bayar:this.state.amount,
              tgl_bayar_bulan:this.state.tgl_bayar,
              catatan:this.state.note,
              id_icon:this.state.id_icon,
              secretkey: 'NOEL'
            })
      });
        const responseStatus = await response
        const dataRes = await response.json()
        await console.log('result add wallet', dataRes)
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

      <AddCicilan 
        modalLoading={ this.state.loading }
        valueIcon={this.state.icon}
        valueTipeKategori = {this.state.tipe_kategori}

        onChangeTitle = { (title) => this.setState({title})}
        valueTitle = { this.state.title }

        onChangeAmount = { (amount) => this.setState({amount})}
        valueAmount = { this.state.amount }

        onChangeTenor = { (tenor) => this.setState({tenor})}
        valueTenor = { this.state.tenor }

        onChangeTglBayar = { (tgl_bayar) => this.setState({tgl_bayar})}
        valueTglBayar = { this.state.tgl_bayar }

        onChangeCatatan = { (note) => this.setState({note})}
        valueCatatan = { this.state.note }

        //start Icon
        onChangeFocusIcon = { () => this.setState(
          {openListIcon: !this.state.openListIcon }
          )}
        openListIcon = { this.state.openListIcon }
        openIcon = { () => this.handleOpenIcon() }
        //end Icon
        saveIt = { () => this._addCicilan() }
        addCicilan = { () => this._addCicilan() }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCicilanContainer)

// export default AddCicilanContainer
