import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View,TouchableOpacity,Image,Text} from 'react-native'
import { _getTrx, _getDefisit, _getRemainSaldo,  } from '../actions/home'
import { _getPromo,  } from '../actions/promo'
import { _getBlog, _getBlogSlider } from '../actions/blog'
import { _addUserActivity,  } from '../actions/useractivity'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import News from '../components/News'
import ListTrx from '../particles/ListTrx'
import ListPromo from '../particles/ListPromo'
import ListBlog from '../particles/ListBlog'
import { SearchableFlatList } from 'react-native-searchable-list'
import { URL_API_BLOG_ASSETS } from '../env'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
// import { SearchableFlatList } from 'react-native-searchable-list'

class NewsContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      loading:false,
      Session:'',
      dataPromo:'',
      promo:'',
      dataBlog:'',
      blog:'',
      position: 1,
      interval: null,
      listBlog:[],
      dataBlogSlider:'',
      listBlogSlider:'',
      Slider: [],
      listBlogTesting:[],
      title_category:'',
      judul:'',
      RefreshNews:false,
      
      
    }
  }

  async componentDidMount(){
    await AsyncStorage.getItem('session').then((keyValue) => {
      this.setState({'Session': JSON.parse(keyValue)})
      }, (error) => {
      console.log(error) //Display error
    })
    await this.saveUserActivity()
    await this.getPromo()
    await this.getBlog()
    await this.getBlogSlider()
    // await this.getBlogTesting()
  }

  async _doRefresh() {
    await this.setState({ RefreshNews: true });
    await this.getBlog()
    await this.getPromo()
    await this.getBlogSlider()
    await this.setState({ RefreshNews: false })
  }


  //new function
  async getPromo(){
    //const secretkey = 'NOEL'
    await this.props._getPromo()
    const res = await this.props.dataPromo
    await this.setState({listPromo: res.Data})
  }

  async getBlog(){
    //const secretkey = 'NOEL'
    await this.setState({loading: true})
    await this.props._getBlog()
    const res = await this.props.dataBlog
    await this.setState({loading: false})
    await this.setState({listBlog: res.Data})
  }


  async getBlogSlider(){
    //const secretkey = 'NOEL'
    await this.setState({loading: true})
    await this.props._getBlogSlider()
    const res = await this.props.dataBlogSlider
    await this.setState({loading: false})
    await this.setState({Slider:res.Data})
    
  }

  async getBlogTesting(){
    //const secretkey = 'NOEL'
    await this.props._getBlog()
    const res = await this.props.dataBlog
    await this.setState({listBlogTesting: res.Data})
  }

  async saveUserActivity(){
    const data = await {
      user_id: await this.state.Session.id,
      title_page: 'NEWS',
      id_blog: '',
      id_ref_source: '',
      
    }
    await this.props._addUserActivity(data)
    const res = await this.props.dataUserActivity
    await console.log("USER ACTIVITY NEWS",res.Data)
  }

  
  //end
  renderImage(x) {
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailBlogContainer',x)}>
          <Image
            source={{ uri: URL_API_BLOG_ASSETS+x.imageurl }}
            style={{
              width: wp("90%"),
              height: hp("20%"),
              marginTop: wp("5%"),
              borderRadius: 10,
              alignSelf: "center"
            }}
          />
          <View style={{position:'absolute',flex: 1,
  justifyContent: 'center',width:wp("90%"),height: hp("7%"),opacity: 0.7,
  backgroundColor: 'black',
  alignItems: 'center',backgroundColor:'#666',marginLeft:widthPercentageToDP(5),marginRight:widthPercentageToDP(5),marginTop:widthPercentageToDP(28)}}>
            <Text style={{alignContent:'center',marginLeft:widthPercentageToDP(5),color:'#fff',fontWeight:'bold'}}>{x.judul.substring(0,45)}</Text>
          </View>
        
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const SliderImage = this.state.Slider;
    return (
      
      <News 
      modalLoading={ this.state.loading }
      //refresh
      _doRefresh={() => this._doRefresh()}
      _onRefresh={this.state.RefreshNews}
      //end refresh
        fullname = {this.state.Session.fullname}

        //slider
        renderImage={SliderImage.map(x => this.renderImage(x))}
        dataSlider={SliderImage}
        // promo
        data = { this.state.listPromo }
        renderItem = { ({item}) => (
          <ListPromo 
            id = { item.id }
            title = { item.title_promo.substring(0,85) }
            gambar = { item.imageurl }
            desc_promo = { item.desc_promo }
            validfrom = { item.validFrom }
            validto = { item.validTo }
            title_merchant = { item.title_merchant }
            title_category = { item.title_category }
            toDetailPromo = { () => this.props.navigation.navigate('PromoContainer',item)}
          />
        )}
        // end promo

        //blog
        dataBlog = { this.state.listBlog }
        renderItemBlog = { ({item}) => (
          <ListBlog 
            judul = { item.judul.substring(0,70) }
            deskripsi = { item.deskripsi }
            imageurl = { item.imageurl }
            title_category = { item.title_category }
            toDetailBlog = { () => this.props.navigation.navigate('DetailBlogContainer',item)}
          />
        )}
        //end blog

        //test
        onChangeTitle = { (judul) => this.setState({judul})}
        valueTitle = { this.state.title_cjudulategory }

          renderListBlogSearch = { 
          <SearchableFlatList 
            data = { this.state.listBlog }
            searchTerm = { this.state.judul }
            searchAttribute = {"judul"}
            ignoreCase={true}
            renderItem={ ({item}) => (
              <ListBlog 
                judul = { item.judul.substring(0,70) }
                deskripsi = { item.deskripsi }
                imageurl = { item.imageurl }
                title_category = { item.title_category }
                toDetailBlog = { () => this.props.navigation.navigate('DetailBlogContainer',item)}
              />
            )}
          />
        }
        //

        



      />
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.loading,
  dataTrx: state.dataTrx,
  dataPromo: state.dataPromo,
  dataBlog: state.dataBlog,
  dataRemaining: state.dataRemaining,
  dataDefisit: state.dataDefisit,
  dataBlogSlider: state.dataBlogSlider,
  dataUserActivity: state.dataUserActivity
})

const mapDispatchToProps = dispatch => ({
  _getTrx: (id) => dispatch(_getTrx(id)),
  _getRemainSaldo: (id) => dispatch(_getRemainSaldo(id)),
  _getDefisit: (id) => dispatch(_getDefisit(id)),
  _getPromo: (id) => dispatch(_getPromo()),
  _getBlog: (id) => dispatch(_getBlog()),
  _getBlogSlider: (id) => dispatch(_getBlogSlider()),
  _addUserActivity: (data) => dispatch(_addUserActivity(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewsContainer)