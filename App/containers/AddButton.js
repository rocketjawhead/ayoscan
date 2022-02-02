import React, {Component} from 'react';
import {Animated, TouchableHighlight, View, Modal, StyleSheet, Text, Button} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation'


const SIZE = 55;

class AddButton extends Component {

	constructor(props){
		super(props)
		this.state={
			modalAddIncome:false,
		}
	}

	// toOutCome(){
	// 	this.props.navigation.navigate('OutcomeContainer')
	// }

	mode = new Animated.Value(0);
	toggleView(){
			Animated.timing(this.mode, {
					toValue: this.mode._value === 0 ? 1 : 0,
					duration: 300
			}).start();
	};

	toOutcome(){
		this.props.navigation.navigate('OutcomeContainer')
		this.toggleView()
	}

	async toIncome(){
		this.props.navigation.navigate('IncomeContainer')
		this.toggleView()
	}

	async toInstallment(){
		this.props.navigation.navigate('InstallmentContainer')
		this.toggleView()
	}

	render() {

			const firstX = this.mode.interpolate({
					inputRange: [0,1],
					outputRange: [0, -20]
			});
			const firstY = this.mode.interpolate({
					inputRange: [0,1],
					outputRange: [0, -50]
			});
			const secondX = this.mode.interpolate({
					inputRange: [0,1],
					outputRange: [0, -20]
			});
			const secondY = this.mode.interpolate({
					inputRange: [0,1],
					outputRange: [0, -100]
			});
			const thirdX = this.mode.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -20]
			});
			const thirdY = this.mode.interpolate({
					inputRange: [0,1],
					outputRange: [0, -150]
			});
			const opacity = this.mode.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1]
			});
			const rotation = this.mode.interpolate({
					inputRange: [0, 1],
					outputRange: ['0deg', '45deg']
			});

			// const navigator = this.props.navigation
			// const { navigate } = this.props.navigation;

			return (
				<View style={{
						position: 'absolute',
						alignItems: 'center'
				}}>
					{/* <Button title="asd" onPress={ () => this.props.navigation.navigate('Outcomecontainer')}/> */}
						<TouchableOpacity
							onPress={ () => this.props.navigation.navigate('AddTransactionContainer')}
							underlayColor="#7F27B4"
							style={{
									alignItems: 'center',
									justifyContent: 'center',
									width: SIZE,
									height: SIZE,
									borderRadius: SIZE / 2,
									backgroundColor: '#7F27B4',
									marginBottom:heightPercentageToDP(5)
							}}
						>
								<FontAwesome5 name="plus" size={24} color="#F8F8F8"/>
							
					</TouchableOpacity>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	modalAddIncome:{
		justifyContent:'center'
	}
})

export default AddButton ;