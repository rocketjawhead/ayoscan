// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
/** @format **/
import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './App/reducers'
import {name as appName} from './app.json'
import Reactotron from './ReactotronConfig'
import AppNavigator from './AppNavigator';

// const store = Reactotron.createStore(appReducers, applyMiddleware(thunk))
const store = createStore(rootReducers, compose(applyMiddleware(thunk), Reactotron.createEnhancer()))


const App = () => (
	<Provider store={store}>
    <AppNavigator />
	</Provider> 
)

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);





