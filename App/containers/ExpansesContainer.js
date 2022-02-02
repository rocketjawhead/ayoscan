import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import Expanses from '../components/Expanses'
import { _getGrafik } from '../actions/expanses'
import { connect } from 'react-redux'

import * as shape from 'd3-shape'

class ExpansesContainer extends Component{
  
  constructor(props){
    super(props)
    this.state={
      Session:'',
      janIncome:0,
      janOutcome:0,
      febIncome:0,
      febOutcome:0,
      marIncome:0,
      marOutcome:0,
      aprIncome:0,
      aprOutcome:0,
      mayIncome:0,
      mayOutcome:0,
      junIncome:0,
      junOutcome:0,
      julIncome:0,
      julOutcome:0,
      augIncome:0,
      augOutcome:0,
      sepIncome:0,
      sepOutcome:0,
      octIncome:0,
      octOutcome:0,
      novIncome:0,
      novOutcome:0,
      decIncome:0,
      decOutcome:0
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getGrafik()
  }

  async getGrafik(){
    await this.props._getGrafik(this.state.Session.id)
    const res = await this.props.dataGrafik
    await this.setState({
      janIncome: res.januari_kredit,
      janOutcome: res.januari_debit,
      febIncome: res.februari_kredit,
      febOutcome: res.februari_debit,
      marIncome: res.maret_kredit,
      marOutcome: res.maret_debit,
      aprIncome: res.april_kredit,
      aprOutcome: res.april_debit,
      mayIncome: res.mei_kredit,
      mayOutcome: res.mei_debit,
      junIncome: res.juni_kredit,
      junOutcome: res.juni_debit,
      julIncome: res.juli_kredit,
      julOutcome: res.juli_debit,
      augIncome: res.agustus_kredit,
      augOutcome: res.agustus_debit,
      sepIncome: res.september_kredit,
      sepOutcome: res.september_debit,
      octIncome: res.oktober_kredit,
      octOutcome: res.oktober_debit,
      novIncome: res.november_kredit,
      novOutcome: res.november_debit,
      decIncome: res.desember_kredit,
      decOutcome: res.desember_debit
    })
    await console.log(this.state)
  }

  render() {

  const { janIncome, febIncome, marIncome, aprIncome, mayIncome, julIncome, junIncome, augIncome, sepIncome, octIncome, novIncome, decIncome,
    janOutcome, febOutcome, marOutcome, aprOutcome, mayOutcome, junOutcome, julOutcome, augOutcome, sepOutcome, octOutcome, novOutcome, decOutcome
  } = this.state
  console.log(janIncome, febIncome, marIncome, aprIncome, mayIncome, julIncome, junIncome, augIncome, sepIncome, octIncome, novIncome, decIncome,
    janOutcome, febOutcome, marOutcome, aprOutcome, mayOutcome, junOutcome, julOutcome, augOutcome, sepOutcome, octOutcome, novOutcome, decOutcome
  )
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
      data: [ janIncome, febIncome, marIncome, aprIncome, mayIncome, junIncome, julIncome, augIncome, sepIncome, octIncome, novIncome, decIncome,],
      color: (opacity = 1) => `rgba(77, 241, 161, ${opacity})` ,// optional
      strokeWidth: 2 // optional
    },{
      data: [ janOutcome, febOutcome, marOutcome, aprOutcome, mayOutcome, junOutcome, julOutcome, augOutcome, sepOutcome, octOutcome, novOutcome, decOutcome, ],
      color: (opacity = 1) => `rgba(242, 71, 80, ${opacity})` ,// optional
      strokeWidth: 2 ,// optional
      backgroundColor:'rgba(77, 241, 161, 1)'
    }]
  }

  const chartConfig = {
    // backgroundGradientFrom: '#fff',
    // backgroundGradientTo: '#fff',
    color: (opacity = 0.5) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3,
    decimalPlaces: 0,
    style:{
      marginLeft:100,
      paddingLeft:100
    }
  }


    return (
      <Expanses 

        data = { data }
        chartConfig = { chartConfig }
      />
    )
  }

}


const mapStateToProps = (state) => ({
  dataGrafik: state.dataGrafik
})

const mapDispatchToProps = dispatch => ({
  _getGrafik: (id) => dispatch(_getGrafik(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpansesContainer)