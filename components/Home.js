import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import Header from './Header';
import TakePictures from './TakePictures';

class Home extends Component{
	constructor(props){
		super(props)
	}
  	render(){
	return (
			<ScrollView style={{flex: 1}}>
		        <TakePictures navigation={this.props.navigation} />
	      	</ScrollView>
			)
		}
}

export default Home;