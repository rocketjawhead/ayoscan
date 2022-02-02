import React, { Component } from 'react'
import { AsyncStorage, Alert,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import CodeInput from 'react-native-confirmation-code-input'
import EditWallet from '../components/EditWallet'
import { URL_API } from '../env'
import { SearchableFlatList } from 'react-native-searchable-list'
//color
import ListColor from '../particles/ListColor'
import { _getColor  } from '../actions/color'
import ModalColor from '../modals/ModalColor';

class EditWalletContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      id:this.props.navigation.state.params.id,
      title:this.props.navigation.state.params.name,
      amount:this.props.navigation.state.params.amount,
      color:this.props.navigation.state.params.color,
      idcolor:this.props.navigation.state.params.id_color,
      openListColor:false,
      listColor:[],
      modalVisibleColor:false,
      searchList:'',
    }
  }

  async componentDidMount(){
    
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getColor()
    await console.log('email : ',this.state.Session.ewalletcode) 
    
  }

  async _editWallet()
  {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Wallet/editwallet`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              ewalletcode:await this.state.Session.ewalletcode,
              name:this.state.title,
              color:this.state.idcolor,
              idwallet:this.state.id,
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

  async getColor(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getColor(id)
    const res = await this.props.dataColor
    await this.setState({loading: false})
    await this.setState({ 
      listColor: res.Data,
     })
    // await console.log('ini list color ',res.Data[0].id)
  }

  async handleOpenColor(){
    this.setState({
      modalVisibleColor: true,
      color:'',
      idcolor:''
    })
  }


  render() {
    return (

      <>
      <ModalColor 
          modalVisibleColor = { this.state.modalVisibleColor }
          closeColor = { () => this.setState({
              modalVisibleColor: false,
              color:this.props.navigation.state.params.color,
              idcolor:this.props.navigation.state.params.id_color
            })}
          // onChangeName = { (name) => this.setState({name}) }

          renderListColor = {
            <FlatList 
              data = { this.state.listColor }
              numColumns={4}
              // searchTerm= { this.state.color }
              // searchAttribute = { "color" }
              // ignoreCase = { false }
              renderItem = { ({item}) => (
                <ListColor 
                title = { item.color }
                selectColor = { () => this.setState({
                  color: item.color, 
                  idcolor: item.id,
                  openListColor: false,
                  modalVisibleColor: false
                })}
              />
              )}
            />
          }
        />

      <EditWallet 
        modalLoading={ this.state.loading }

        onChangeAmount = { (amount) => this.setState({amount})}
        valueAmount = { this.state.amount }

        onChangeColor = { (color) => this.setState({color})}
        valueColor = { this.state.color }

        onChangeTitle = { (title) => this.setState({title})}
        valueTitle = { this.state.title }

        //start color
        onChangeFocusColor = { () => this.setState(
          {openListColor: !this.state.openListColor }
          )}
        openListColor = { this.state.openListColor }
        openColor = { () => this.handleOpenColor() }
        //end color
        saveIt = { () => this._editWallet() }
        goBack = { () => this.props.navigation.goBack() }  
      />
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  dataColor: state.dataColor
})

const mapDispatchToProps = dispatch => ({
  _getColor: (id) => dispatch(_getColor(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditWalletContainer)

