import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,Alert} from 'react-native'
import { _getSaveBookmark } from '../actions/savebookmark'

import { StackActions, NavigationActions } from 'react-navigation'

import Bookmark from '../components/Bookmark'
import ListTrx from '../particles/ListTrx'
import ListBookmark from '../particles/ListBookmark'
import { SearchableFlatList } from 'react-native-searchable-list'
class BookmarkContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      listBookmark:'',
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.getBookmark()
  }

  async getBookmark(){
    await this.setState({loading:true})
    const data = await {
      user_id: await this.state.Session.id
    }
    // await console.log("data get Bookmark",data)
    await this.props._getSaveBookmark(data)
    const res = await this.props.dataSaveBookmark
    await this.setState({loading:false})
    await console.log("Result Bookmark container",res.Data)
    await this.setState({listBookmark:res.Data})
  }
  //end
  render() {

    return (
      <Bookmark 
        modalLoading={ this.state.loading }
        //blog
        goBack = { () => this.props.navigation.goBack() }
        dataBlogDashboard = { this.state.listBookmark }
        renderItemBlogDashboard = { ({item}) => (
          <ListBookmark 
            judul = { item.judul }
            deskripsi = { item.deskripsi }
            imageurl = { item.imageurl }
            title_category = { item.title_category }
            create_date = { item.create_date }
            toDetailBlog = { () => this.props.navigation.navigate('DetailBlogContainer',item)}
          />
        )}
        //end blog
      />
    )
  }

}

const mapStateToProps = (state) => ({
    dataSaveBookmark: state.dataSaveBookmark
})

const mapDispatchToProps = dispatch => ({
  _getSaveBookmark: (data) => dispatch(_getSaveBookmark(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(BookmarkContainer)