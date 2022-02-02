import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, Alert } from 'react-native'
import { _getInstallment, _addListInstallment } from '../actions/installment'

import Installment from '../components/Installment'
import ListInstallment from '../particles/ListInstallment'

import ListCategory from '../particles/ListCategory'

import CategoryIstallment from '../js/CategoryIstallment'
class InstallmentContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      Session:'',
      title:'',
      category:'',
      amount:'',
      tenor:'',
      paymentDate:'',
      note:'',
      month:'',
      listInstallment:[],
      modalVisible:false,
      errorTitle:false,
      errorTenor:false,
      errorAmount:false,
      errorDate:false
    }
  }

  async componentDidMount(){
    this.getMonth()
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getInstallment()
  }

  getMonth(){
    var name = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des']
    var today = new Date();
    var month = today.getMonth()+1
    this.setState({month: name[month]})
  }

  async getInstallment(){
    const id  = await this.state.Session.id
    await this.props._getInstallment(id)
    const res = await this.props.dataInstallment
    await this.setState({listInstallment: res.Data})
  }

  async validation(type){
    if(type == 'title'){
      if( this.state.title == '' ){
        this.setState({errorTitle:true})
      }
    }else if(type == 'amount'){
      if( this.state.amount == '' ){
        this.setState({errorAmount: true})
      }
    }else if(type == 'date'){
      if( this.state.paymentDate == '' ){
        this.setState({errorDate:true})
      }
    }else if(type == 'tenor'){
      if(this.state.tenor == ''){
        this.setState({errorTenor: true})
      }
    }
  }

  async saveInstallment(){
    const { tenor, paymentDate, title, amount, note, category } = await this.state
    const id = this.state.Session.id
    const data = { tenor, paymentDate, title, amount, note, category, id }
    await this.props._addListInstallment(data)
    const res = await this.props.dataAddInstallment 
    if(res.Status == 'Success'){
      this.getInstallment()
      Alert.alert('Informasi', 'Berhasil menambahkan cicilan')
      this.setState({modalVisible: false})
    }else{
      Alert.alert('Informasi', res.Message)
    }
  }
  
  render() {
    return (
      <Installment 
        modalVisible = { this.state.modalVisible }
        closeModal = { () => this.setState({modalVisible: false}) }

        onChangeTitle = { (title) => this.setState({title}) }
        valueTitle = { this.state.title }
        onChangeAmount = { (amount) => this.setState({amount}) }
        valueAmount = { this.state.amount }
        onChangeTenor = { (tenor) => this.setState({tenor}) }
        valueTenor = { this.state.tenor }
        onChangePaymentDate = { (paymentDate) => this.setState({paymentDate}) }
        valuePaymentDate = { this.state.paymentDate }
        onChangeNote = { (note) => this.setState({note}) }
        valueNote = { this.state.note } 
        checkTitle = { () => this.validation('title') }
        checkAmount = { () => this.validation('amount') }
        checkDate = { () => this.validation('date') }
        checkTenor = { () => this.validation('tenor') }
        errorAmount = { this.state.errorAmount }
        errorTenor = { this.state.errorTenor }
        errorDate = { this.state.errorDate }
        errorTitle = { this.state.errorTitle }
        saveInstallment = { () => this.saveInstallment() }

        valueCategory = { this.state.category }
        openCategory = { () => this.setState({openCategory: true}) }
        isOpenListCategories = { this.state.openCategory }

        dataCategoryInstallment = { CategoryIstallment }
        renderItemCategoryInstallment = { ({item}) => (
          <ListCategory 
            title = { item.Name }
            selectCategory = { () => this.setState({category:item.Name, openCategory:false}) }
          />
        )}
        // onChangeTitle = { (title) => this.setState({title}) }
        // valueTitle = { this.state.title }
        // onChangeAmount = { (amount) => this.setState({amount}) }
        // valueAmount = { this.state.amount }
        // onChangeCategories = { }
        openModal = { () => this.setState({modalVisible: true })}
        data = { this.state.listInstallment }
        renderItem = { ({item}) => (
          <ListInstallment 
            title = { item.judul_cicilan }
            amount = { item.jumlah_bayar }
            tenor = { item.sisa_bayar }
            paymentDate = { item.tgl_bayar_bulan }
            month = { this.state.month }
          />
        )}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  dataInstallment: state.dataInstallment,
  dataAddInstallment: state.dataAddInstallment
})

const mapDispatchToProps = (dispatch) => ({
  _getInstallment: (id) => dispatch(_getInstallment(id)),
  _addListInstallment: (data) => dispatch(_addListInstallment(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(InstallmentContainer)