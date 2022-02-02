import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getCategoryProfil } from '../actions/category'

import { StackActions, NavigationActions } from 'react-navigation'

import Category from '../components/Category'
import ListCategoryProfil from '../particles/ListCategoryProfil'
import { SearchableFlatList } from 'react-native-searchable-list'

class CategoryContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listCategory:'',
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await console.log('ini ewal',this.state.Session.ewalletcode)
    await this.getCategoryProfil()
  }

  async getCategoryProfil(){
    await this.setState({loading: true})
    const id = await this.state.Session.ewalletcode
    await this.props._getCategoryProfil(id)
    const res = await this.props.dataCategory
    await this.setState({loading: false})
    await this.setState({ 
      listCategory: res.Data
     })
     await console.log('ini data category',res)
  }
  //end
  render() {

    return (
      <Category 
        modalLoading={ this.state.loading }
        addCategory = { () => this.props.navigation.navigate('AddCategoryContainer')}
        //blog
        goBack = { () => this.props.navigation.goBack() }
        dataCategory= { this.state.listCategory }
        renderItemCategory= { ({item}) => (
          <ListCategoryProfil 
            id = {item.id }
            id_icon = {item.id_icon }
            title = { item.judul_kategori }
            tipe_kategori = { item.tipe_kategori }
            imageurl = { item.imageurl }
            toDetailcategory = { () => this.props.navigation.navigate('DetailCategoryContainer',item)}
          />
        )}
        //end blog
      />
    )
  }

}

const mapStateToProps = (state) => ({
    dataCategory : state.dataCategory
})

const mapDispatchToProps = dispatch => ({
  _getCategoryProfil: (id) => dispatch(_getCategoryProfil(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryContainer)