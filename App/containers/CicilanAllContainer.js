import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getCicilanProfil } from '../actions/cicilan'

import { StackActions, NavigationActions } from 'react-navigation'

import Cicilan from '../components/CicilanAll'
import ListCicilan from '../particles/ListCicilanProfil'
import { SearchableFlatList } from 'react-native-searchable-list'

class CicilanAllContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listCicilan:'',
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await console.log('ini ewal',this.state.Session.ewalletcode)
    await this.getCicilan()
  }

  async getCicilan(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getCicilanProfil(id)
    const res = await this.props.dataCicilanProfil
    await this.setState({loading: false})
    await this.setState({ 
        listCicilan: res.Data
     })
     await console.log('ini data cicilan',res)
  }
  //end
  render() {

    return (
      <Cicilan 
        modalLoading={ this.state.loading }
        addCicilan = { () => this.props.navigation.navigate('AddCicilanContainer')}
        //blog
        goBack = { () => this.props.navigation.goBack() }
        dataCicilan= { this.state.listCicilan }
        renderItemCicilan= { ({item}) => (
          <ListCicilan 
            id = {item.id }
            title = {item.judul_cicilan }
            amount = {item.jumlah_bayar }
            imageurl = { item.imageurl }
            sisa_cicilan = {item.sisa_cicilan}
            toDetailcategory = { () => this.props.navigation.navigate('DetailCicilanAllContainer',item)}
          />
        )}
        //end blog
      />
    )
  }

}

const mapStateToProps = (state) => ({
  dataCicilanProfil : state.dataCicilanProfil
})

const mapDispatchToProps = dispatch => ({
    _getCicilanProfil: (id) => dispatch(_getCicilanProfil(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CicilanAllContainer)