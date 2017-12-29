'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRScanner extends Component {
  onSuccess(e) {
  	console.log("scanning", e.data);
   this.props.navigation.navigate('Camera', {type: 'reset', data: e.data})
  }

  render() {
  	console.log("props11", this.props)
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        showMarker = {true}
        style={{flex:1}}
        reactivate ={false}
        topContent={(
         	<View>
           	<Image source={require('./../images/header-logo.png')}  />
           	</View>
        )}
        
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  }
});