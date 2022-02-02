import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getRekening  } from '../actions/rekening'

import { StackActions, NavigationActions } from 'react-navigation'

import Rekening from '../components/Rekening'
import ListRekening from '../particles/ListRekeningAll'
import { SearchableFlatList } from 'react-native-searchable-list'

class RekeningContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listRekening:'',
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await console.log('ini ewal',this.state.Session.ewalletcode)
    await this.getRekening()
  }

  async getRekening(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getRekening(id)
    const res = await this.props.dataRekening
    await this.setState({loading: false})
    await console.log('ini list rekening',res.Data)
    await this.setState({ 
      listRekening: res.Data
    })
  }
  //end
  render() {

    return (
      <Rekening 
        modalLoading={ this.state.loading }
        addRekening = { () => this.props.navigation.navigate('AddRekeningContainer')}
        //blog
        goBack = { () => this.props.navigation.goBack() }
        dataRekening= { this.state.listRekening }
        renderItemRekening= { ({item}) => (
          <ListRekening 
            title = { item.nama_rekening }
            title_bank = { item.nama_bank }
            norek = {item.nomor_rekening}
            toDetailRekening = { () => this.props.navigation.navigate('DetailRekeningContainer',item)}
          />
        )}
        //end blog
      />
    )
  }

}

const mapStateToProps = (state) => ({
    dataRekening : state.dataRekening
})

const mapDispatchToProps = dispatch => ({
    _getRekening: (id) => dispatch(_getRekening(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RekeningContainer)