import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getMessage } from '../actions/message'

import { StackActions, NavigationActions } from 'react-navigation'

import Message from '../components/Message'
import ListMessage from '../particles/ListMessage'
class MessageContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listMessage:'',
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getMessage()
  }

  async getMessage(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getMessage(id)
    const res = await this.props.dataMessage
    await this.setState({loading:false})
    await console.log('ini data message',res)
    await this.setState({listMessage:res.Data})
  }
  //end
  render() {

    return (
      <Message 
        modalLoading={ this.state.loading }
        //blog
        goBack = { () => this.props.navigation.goBack() }
        dataMessage = { this.state.listMessage }
        renderItemMessage = { ({item}) => (
          <ListMessage 
            id = {item.id}
            isRead = { item.isRead}
            title = { item.title }
            desc_message = { item.desc_message.substring(0,70)+'...' }
            getYear = {item.create_date.substring(0,4)}
            getMonth = {
                item.create_date.substring(5,7) == "01" ? "januari" : 
                item.create_date.substring(5,7) == "02" ? "Februari" :
                item.create_date.substring(5,7) == "03" ? "Maret" :
                item.create_date.substring(5,7) == "04" ? "April" :
                item.create_date.substring(5,7) == "05" ? "Mei" :
                item.create_date.substring(5,7) == "06" ? "Juni" :
                item.create_date.substring(5,7) == "07" ? "Juli" :
                item.create_date.substring(5,7) == "08" ? "Agustus" :
                item.create_date.substring(5,7) == "09" ? "September" :
                item.create_date.substring(5,7) == "10" ? "Oktober" :
                item.create_date.substring(5,7) == "11" ? "November" :
                item.create_date.substring(5,7) == "12" ? "Desember" : ""
              }
              getDate = {item.create_date.substring(8,10)}
            toDetailMessage = { () => this.props.navigation.navigate('DetailMessageContainer',item)}
          />
        )}
        //end blog
      />
    )
  }

}

const mapStateToProps = (state) => ({
    dataMessage: state.dataMessage
})

const mapDispatchToProps = dispatch => ({
  _getMessage: (data) => dispatch(_getMessage(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer)