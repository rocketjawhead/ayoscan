import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import AddRekening from '../components/AddRekening'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListBank from '../particles/ListBank'
import { _getBank  } from '../actions/bank'
import ModalBank from '../modals/ModalBank';

class AddRekeningContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      nama_bank:'',
      kode_bank:'',
      title:'',
      norek:'',
      nama_rek:'',
      id_bank:'',
      openListBank:false,
      listBank:[],
      modalVisibleBank:false
    }
  }

  async componentDidMount(){
    
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getBank()
    
  }


  async _addRekening()
  {
    await this.setState({loading: true})
    if(this.state.norek == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nomor rekening')
    }else if(this.state.id_bank == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih bank')
    }else if(this.state.nama_rek == '')
    {
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nama rekening')
    }else{
      const response = await fetch(`${URL_API}Rekening/tambahrekening`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              no_rek:this.state.norek,
              id_bank:this.state.id_bank,
              nama_rek:this.state.nama_rek,
              ewalletcode:await this.state.Session.ewalletcode,
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

  async getBank(){
    const id = await this.state.Session.ewalletcode
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
    return (

      <>
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

      <AddRekening 
        modalLoading={ this.state.loading }

        //
        valueTitle = {this.state.title}
        onChangeTitle = { (title) => this.setState({title})}

        valueNorek = {this.state.norek}
        onChangeNorek = { (norek) => this.setState({norek})}

        valueNamarek = {this.state.nama_rek}
        onChangeNamarek = { (nama_rek) => this.setState({nama_rek})}
        
        valueNamaBank = {this.state.nama_bank}
        valueKodeBank = {this.state.kode_bank}

        //start Bank
        onChangeFocusBank = { () => this.setState(
          {openListBank: !this.state.openListBank }
          )}
        openListBank = { this.state.openListBank }
        openBank = { () => this.handleOpenBank() }
        //end Bank
        AddRekening = { () => this._addRekening() }

        goBack = { () => this.props.navigation.goBack() }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRekeningContainer)

// export default AddRekeningContainer
