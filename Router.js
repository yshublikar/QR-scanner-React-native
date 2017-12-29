import React from 'react';
import {Image} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import QRScanner from './components/QRScanner';
import Home from './components/Home';
import OpenCamera from './components/OpenCamera';
import EditImage from './components/EditImage';
import temp from './components/temp';

const Navigation = StackNavigator({
  Home: {
  	screen: Home,
  	navigationOptions: {
      title: 'RaterSpot Scanner',
      /*headerLeft: (<Image source={require('./images/header-logo.png')} />),*/
      headerStyle: { backgroundColor: '#F8F8F8', elevation: null },
  	},
  },
  Camera: {
  	screen: OpenCamera,
  	navigationOptions: {
  		title: 'Camera',
  	}
  },
  QRScanner: {
  	screen: QRScanner,
  	navigationOptions: {
  		title: 'QR Code Scanner',
  	}
  },
  EditImage: {
    screen: EditImage,
    navigationOptions: {
      title: 'Edit Image',
    }
  }, 
  temp: {
    screen: temp,
    navigationOptions: {
      title: 'Show Image',
    }
  }
});


export default Navigation;





