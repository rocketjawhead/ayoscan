import React, { Component } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { _getBookmark,_addBookmark,_deleteBookmark } from '../actions/blog'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import DetailBlog from '../components/DetailBlog'
import { SearchableFlatList } from 'react-native-searchable-list'
import ListCategory from '../particles/ListCategory'
import { URL_API } from '../env'
class DetailBlogContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      Session:'',
      listBookmark:'',
      id_blog:this.props.navigation.state.params.id,
      title:this.props.navigation.state.params.judul,
      desc:this.props.navigation.state.params.deskripsi,
      imageurl:this.props.navigation.state.params.imageurl,
      title_category:this.props.navigation.state.params.title_category,
      create_date:this.props.navigation.state.params.create_date,
      infobookmark :''
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    // await this.getBookmark()
    await this.newGetBookmark()
    
  }

  async newGetBookmark() {
    const response = await fetch(`${URL_API}Blog/getBookmark`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            user_id: await this.state.Session.id,
            id_blog: this.state.id_blog,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
			  const dataRes = await response.json()
        await console.log('single result', dataRes.Data)
        await this.setState({infobookmark:dataRes.Data})
  }


  async addBookmark(){
    const response = await fetch(`${URL_API}Blog/addBookmark`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            user_id: await this.state.Session.id,
            id_blog: this.state.id_blog,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
			  const dataRes = await response.json()
        await console.log('single result added', dataRes.Data)
        await this.setState({infobookmark:dataRes.Data})
  }

  async deleteBookmark(){
    const response = await fetch(`${URL_API}Blog/deleteBookmark`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            user_id: await this.state.Session.id,
            id_blog: this.state.id_blog,
            secretkey: 'NOEL'
          })
    });
    const responseStatus = await response
			  const dataRes = await response.json()
        await console.log('single result delete', dataRes.Data)
        await this.setState({infobookmark:dataRes.Data})
  }



  render() {
    //  console.log('get id dari bookmark localstorage',this.state.listBookmark)
     console.log('get id_blog dari bookmark',this.state.infobookmark)
     console.log('this.state.id_blog = ',this.state.id_blog)
     console.log('this.state.Session.id = ',this.state.Session.id)
     return (
      <DetailBlog 
        id_blog = {this.state.id_blog}
        title = {this.state.title}
        desc = {this.state.desc}
        imageurl = {this.state.imageurl}
        title_category = {this.state.title_category}
        create_date = {this.state.create_date}
        backToHome = { () => this.props.navigation.goBack() }

        //date
        getYear = {this.state.create_date.substring(0,4)}
        getMonth = {
          this.state.create_date.substring(5,7) == "01" ? "januari" : 
          this.state.create_date.substring(5,7) == "02" ? "Februari" :
          this.state.create_date.substring(5,7) == "03" ? "Maret" :
          this.state.create_date.substring(5,7) == "04" ? "April" :
          this.state.create_date.substring(5,7) == "05" ? "Mei" :
          this.state.create_date.substring(5,7) == "06" ? "Juni" :
          this.state.create_date.substring(5,7) == "07" ? "Juli" :
          this.state.create_date.substring(5,7) == "08" ? "Agustus" :
          this.state.create_date.substring(5,7) == "09" ? "September" :
          this.state.create_date.substring(5,7) == "10" ? "Oktober" :
          this.state.create_date.substring(5,7) == "11" ? "November" :
          this.state.create_date.substring(5,7) == "12" ? "Desember" : ""
        }
        getDate = {this.state.create_date.substring(8,10)}
        //


        //bookmark
        iconBookmark = {this.state.infobookmark}
        addBookmark = { () => this.addBookmark() }
        deleteBookmark = { () => this.deleteBookmark() }
      />
    )
  }
}

// export default DetailTransactionContainer
// const mapStateToProps = (state) => ({
//   dataBookmark: state.dataBookmark
// })

// const mapDispatchToProps = dispatch => ({
//   _getBookmark: (data) => dispatch(_getBookmark(data)),
//   _addBookmark: (data) => dispatch(_addBookmark(data)),
//   _deleteBookmark: (data) => dispatch(_deleteBookmark(data)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(DetailBlogContainer)
export default DetailBlogContainer