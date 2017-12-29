import React from 'react';
import {View, Text} from 'react-native';
import Button from './Button';

const Footer = () =>{
	return(
			<View>
				<Button onPress={() => console.log("pressed")}>
					Finish
				</Button>
			</View>
		)
}

export default Footer;