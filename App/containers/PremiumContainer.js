import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert,FlatList} from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'
import Premium from '../components/Premium'

import { URL_API } from '../env'
import ListBank from '../particles/ListBank'
import { _getBank  } from '../actions/bank'
import ModalBank from '../modals/ModalBank';

//upgrade
import { _getUpgrade } from '../actions/upgrade'
import ListUpgrade from '../particles/ListUpgrade'
import ModalBankPremium from '../modals/ModalBankPremium';

class PremiumContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      photo:'',
      fileUri:'',
      nama_bank:'',
      id_bank:'',
      openListBank:false,
      listBank:[],
      modalVisibleBank:false,
      date:'',
      tgl_transaksi:'',
      acc_bank:'',
      //
      id_bank_premium:'',
      nama_bank_premium:'',
      modalVisibleBankPremium:false,
      listBankPremium:[],
      openListBankPremium:false,
      
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getBank()
    await this.getUpgrade()
  }

  //datepicker
  async _setDateNow(){
    var today = await new Date();
    var year = await today.getFullYear()
    var month = await today.getMonth()+1 < 10 ? '0'+ (today.getMonth()+1).toString() : today.getMonth()+1
    var day = await today.getDate()
    var date = await year+'/'+month+'/'+day
    await this.setState({tgl_transaksi:date})
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

  async getUpgrade(){
    const id = await this.state.Session.ewalletcode
    await this.props._getUpgrade(id)
    const res = await this.props.dataUpgrade
    await this.setState({ 
      listBankPremium: res.Data
     })
     await console.log('ini data upgrade',res.Data)
  }

  

  async _upload()
  {
    await this.setState({loading: true})
    if(this.state.photo == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih gambar bukti transfer')
    }else if(this.state.id_bank == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih bank')
    }else if(this.state.acc_bank == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan input nama rekening')
    }else if(this.state.tgl_transaksi == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih tanggal transaksi')
    }else if(this.state.id_bank_premium == ''){
      await this.setState({loading: false})
      Alert.alert('Informasi', 'Silahkan pilih bank tujuan')
    }else{
      // console.log('kirim data', this.state.photo);
    const response = await fetch(`${URL_API}Upload/upgradeuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            bank:this.state.id_bank,
            id_bank_premium:this.state.id_bank_premium,
            acc_bank:this.state.acc_bank,
            imageurl:this.state.photo,
            trx_date:this.state.tgl_transaksi,
            catatan:this.state.note,
            ewalletcode:await this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
      const responseStatus = await response
      const dataRes = await response.json()
      await console.log('result add image', dataRes)
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

  handleChoosePhoto = () => {
    // Alert.alert('Informasi', 'hallo')
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        // console.log('response', JSON.stringify(response));
        console.log('response', response.data);
        this.setState({
          filePath: response,
          photo: response.data,
          fileUri: response.uri
        });
      }
      // if (response.uri) {
      //     Alert.alert('Informasi', response.uri)
      //     await console.log('ini data image as',response)
      //   this.setState({ photo: response.uri })
      // }
    })
  }

  async handleOpenBank(){
    this.setState({
      modalVisibleBank: true,
    })
  }

  async handleOpenBankPremium(){
    this.setState({
      modalVisibleBankPremium: true,
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

        <ModalBankPremium 
            modalVisibleBankPremium = { this.state.modalVisibleBankPremium }
            closeBankPremium = { () => this.setState({modalVisibleBankPremium: false})}
            // onChangeName = { (name) => this.setState({name}) }

            renderListBankPremium = {
              <FlatList 
                data = { this.state.listBankPremium }
                renderItem = { ({item}) => (
                  <ListUpgrade 
                    title = { item.bank }
                    acc_bank = { item.acc_bank }
                    norek = { item.rekening }
                    imageurl = { item.imageurl }
                    selectBankPremium = { () => this.setState({
                      id_bank_premium: item.id, 
                      nama_bank_premium: item.bank,
                      openListBankPremium: false,
                      modalVisibleBankPremium: false
                    })}
                  />
                )}
              />
            }
          />

      <Premium 
        modalLoading={ this.state.loading }
        valueImage = {this.state.fileUri}
        valueNamaBank = {this.state.nama_bank}

        //accbank
        onChangeAccBank = { (acc_bank) => this.setState({acc_bank})}
        valueAccBank = {this.state.acc_bank}
        //note
        onChangeNote = { (note) => this.setState({note})}
        valueNote = {this.state.note} 
        //
        //exec
        goBack = { () => this.props.navigation.goBack() }
        selectImage = { () => this.handleChoosePhoto() }
        upload = { () => this._upload() }

        //date
        onChangeTrxDate = { (tgl_transaksi) => this.setState({tgl_transaksi})}
        valueTrxDate = { this.state.tgl_transaksi }
        _date_now = {new Date()}
        //date

         //start Bank
         onChangeFocusBank = { () => this.setState(
          {openListBank: !this.state.openListBank }
          )}
        openListBank = { this.state.openListBank }
        openBank = { () => this.handleOpenBank() }
        //end Bank

        //start Bank Premium
        valueNamaBankPremium = {this.state.nama_bank_premium}
        onChangeFocusBankPremium = { () => this.setState(
          {openListBankPremium: !this.state.openListBankPremium }
          )}
        openListBankPremium = { this.state.openListBankPremium }
        openBankPremium = { () => this.handleOpenBankPremium() }
        //end Bank Premium
      />
      </>
    )
  }

}
const mapStateToProps = (state) => ({
  dataBank: state.dataBank,
  dataUpgrade: state.dataUpgrade
})

const mapDispatchToProps = dispatch => ({
  _getBank: (id) => dispatch(_getBank(id)),
  _getUpgrade: (data) => dispatch(_getUpgrade(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PremiumContainer)
// export default (PremiumContainer)