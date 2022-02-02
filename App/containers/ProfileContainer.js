import React, { Component } from 'react'
import Profile from '../components/Profile'
import { AsyncStorage,Alert} from 'react-native'
import { clearData } from '../actions/login'
import { StackActions, NavigationActions } from 'react-navigation'
import { URL_API,VERSION_APP } from '../env'
class ProfileContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      is_verified:'',
      RefreshProfil:false,
      fullname:'',
      VERSION_APP:VERSION_APP

      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getVerified()
  }

  async _doRefresh() {
    await this.setState({ RefreshProfil: true });
    await this.getVerified()
    await this.setState({ RefreshProfil: false })
  }

  clear() {
    this.setState({
      session: "",
      loading : false,
    });
  }

  async logout() {
    await AsyncStorage.clear();
    await AsyncStorage.removeItem("session");
    await this.clear();
    await this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: "LoginContainer" })
        ]
      })
    );
    await this.props.clearData();
  }

  async checkVersion(){
    Alert.alert('HEY-FLOW','VERSION '+VERSION_APP)
  }

  async codeReferral(){
    Alert.alert('HEY-FLOW','Kode Referral Anda : '+this.state.Session.code_referral.toUpperCase())
  }

  async getVerified() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}User/getVerified`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            ewalletcode:this.state.Session.ewalletcode,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await this.setState({loading: false})
        await this.setState({
          is_verified:dataRes.Data,
          fullname:dataRes.Data.fullname
        })
        await console.log('ini data status is_verified',dataRes.Data)
  }

  render() {
    return (
      <Profile 
      modalLoading={ this.state.loading }
      //refresh
      _doRefresh={() => this._doRefresh()}
      _onRefresh={this.state.RefreshProfil}
      //end refresh
      fullname = {this.state.fullname}
      email = {this.state.Session.email}

      valueIsVerified = {this.state.is_verified}
      toReferral = {() => this.codeReferral()}
      toProfileSetting = { () => this.props.navigation.navigate('ProfileSettingContainer')}
      toCategory = { () => this.props.navigation.navigate('CategoryContainer')}
      toCicilan = { () => this.props.navigation.navigate('CicilanAllContainer')}
      toRekening = { () => this.props.navigation.navigate('RekeningContainer')}
      toPoin = { () => this.props.navigation.navigate('PoinContainer')}
      toUpgrade = { () => this.props.navigation.navigate('UpgradeContainer')}
      toBookmark = { () => this.props.navigation.navigate('BookmarkContainer')}
      toVersion = {() => this.checkVersion()}
      valueVersion = {this.state.VERSION_APP}
      toChangePassword = { () => this.props.navigation.navigate('ChangePasswordContainer')}
      toChangePin = { () => this.props.navigation.navigate('ChangePINContainer')}
      toStatisticMoney = { () => this.props.navigation.navigate('StatisticMoneyContainer')}
      toAbout = { () => this.props.navigation.navigate('AboutContainer')}
      // toLogout={() => this.logout()}
      toLogout = { () => 
        Alert.alert(
          'Informasi',
          'Apakah anda ingin keluar dari aplikasi ?',
          [
            {text: 'Tidak', onPress: () => console.log('OK Pressed')},
            {text: 'Ya', onPress: () => this.logout()}
          ]
        ) }
      />
    )
  }
}

export default ProfileContainer