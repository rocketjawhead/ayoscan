import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import ProfileSetting from '../components/ProfileSetting'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListJob from '../particles/ListJob'
import { URL_API } from '../env'
class ProfileSettingContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      gender:'',
      fullname:'',
      birthdate:'',
      date:'',
      secretkey:'NOEL',
      job:'',
      openListJob:false,
      listJob:[],
      loading:false,
    }
  }

  async componentDidMount(){
    await this._setDateNow()
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getProfil()
    await this.getJob()
    // await this.setState({
    //   Session: Session, 
    //   fullname: Session.email,
    // })
  }

  async getProfil() {
    await this.setState({loading: true})
    const response = await fetch(`${URL_API}Account/getProfil`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            user_id: await this.state.Session.id,
            email: await this.state.Session.email,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
        const dataRes = await response.json()
        await console.log('single result', dataRes.Data)
        await this.setState({loading: false})
        await this.setState({gender:dataRes.Data.gender})
        await this.setState({fullname:dataRes.Data.fullname})
        await this.setState({birthdate:dataRes.Data.birthdate})
        await this.setState({job:dataRes.Data.job == null ? 'Karyawan Swasta' : dataRes.Data.job})
  }

  async onSave() {
    await this.setState({loading: true})
    if(this.state.onSave == '')
    {
      await Alert.alert('Informasi', 'Silahkan isi tanggal lahir')
    }else{
      const response = await fetch(`${URL_API}Account/editProfil`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              gender: await this.state.gender,
              user_id: await this.state.Session.id,
              birthdate: await this.state.birthdate,
              fullname: await this.state.fullname,
              job: await this.state.job,
              secretkey: 'NOEL'
            })
      });
      const responseStatus = await response
      const dataRes = await response.json()
      await console.log('save data', dataRes)
      await this.setState({loading: false})
      if(dataRes.Status == 'Success'){
        const { navigation } = await this.props
        await navigation.dispatch(
          StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'TabNavigator'})]
          })
        )
        await Alert.alert('Informasi', 'Berhasil Ubah Profil')
      }
    }
    
  }

  //job
  async getJob() {
    const response = await fetch(`${URL_API}Account/getJob`, {
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
        await this.getProfil()
        await console.log('job', dataRes.Data)
        await this.setState({listJob:dataRes.Data})
  }

  //datepicker
  async _setDateNow(){
    var today = await new Date();
    var year = await today.getFullYear()
    var month = await today.getMonth()+1 < 10 ? '0'+ (today.getMonth()+1).toString() : today.getMonth()+1
    var day = await today.getDate()
    var date = await year+'/'+month+'/'+day
    await this.setState({birthdate:date})
  }

  async goSelectF(){
    this.setState({
      gender: 'F',
    })
  }

  async goSelectM(){
    this.setState({
      gender: 'M',
    })
  }




  render() {
    console.log('date now',new Date())
     return (
      <ProfileSetting 
      modalLoading={ this.state.loading }
//       username: "heyio"
// email: "hey.indonesia.online@gmail.com"
// fullname: "heyio"
// phone: "2147483647"
// isVerified: "1"
// gender: "M"
// birthdate: null

      //namalengkap
      
      onChangeFullname = { (fullname) => this.setState({fullname}) }
      valueFullname = { this.state.fullname }


      //birthdate
      onChangeBirthdate = { (birthdate) => this.setState({birthdate})}
      valueBirthdate = { this.state.birthdate }
      _date_now = {new Date()}

      //gender//
        valueGender = { this.state.gender}
        selectF = { () => this.goSelectF() }
        selectM = { () => this.goSelectM() }

        onSave = { () => this.onSave() }
        goBack = { () => this.props.navigation.goBack() }

      //job
      onChangeJob = { (job) => this.setState({job})}
      valueJob = { this.state.job }
      onChangeFocusJob = { () => this.setState({openListJob: !this.state.openListJob })}
      openListJob = { this.state.openListJob }
      renderListJob = { 
        <SearchableFlatList 
          data = { this.state.listJob }
          searchTerm = { this.state.job }
          searchAttribute = {"title"}
          ignoreCase={true}
          renderItem={ ({item}) => (
            <ListJob 
              title = { item.title }
              selectCategory = { () => this.setState({job: item.title, openListJob: false})}
            />
          )}
        />
      }

      />
    )
  }
}

export default ProfileSettingContainer