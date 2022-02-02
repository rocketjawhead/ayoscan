import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron 
  .configure({name:'BusinessBank', port:9090, enabled: true, host:'192.168.43.40'})
  .useReactNative()
  .use(reactotronRedux())
  .connect() 

export default reactotron