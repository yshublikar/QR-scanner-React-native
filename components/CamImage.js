import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CamImage = ({onPress, children}) =>{
	return (
			<TouchableOpacity onPress={onPress}>
				{children}
			</TouchableOpacity>
		)
}

export default CamImage;