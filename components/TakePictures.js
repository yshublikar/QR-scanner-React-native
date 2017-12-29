import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { Button } from 'react-native-elements'


export default class TakePictures extends Component{
	render(){
		return(
				<Card>
					<CardSection>
						<View style={styles.logoStyle}>
							<Image source={require('./../images/header-logo.png')}  />
						</View>
					</CardSection>
					<CardSection>
						<View style={styles.bgStyle}>
							<Image source={require('./../images/home-back-image.png')}  style={styles.bgImage} />
						</View>
					</CardSection>
					<CardSection>
						<View style={styles.scanButton}>
							<Button
							  raised
							  backgroundColor= '#055b78'
							  title='Scan Documents'
							  onPress={() =>
							  this.props.navigation.navigate('QRScanner', { })} />
						</View>
					</CardSection>
				</Card>
			)
	}
}

const styles ={
	CameraImageStyle :{
		height: 100,
		width: 100
	},
	viewStyle:{
    	justifyContent: 'flex-end',
    	alignItems: 'center',
	},
	logoStyle:{
		justifyContent: 'center',
        alignItems: 'center',
	},
	bgStyle:{
		marginTop: 60,
		opacity: 0.4,
		alignItems: 'center',	
	},
	bgImage:{
		height: (Dimensions.get('window').height)-350,
		width: Dimensions.get('window').width
	},
	scanButton:{
		marginTop: 120,
		marginBottom: 4,
	}

}

