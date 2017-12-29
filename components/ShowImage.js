import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class ShowImage extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		console.log("path", this.props);
		return (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: this.props.path }}
            style={styles.previewImage}
          />
          <View style={styles.countStyle}>
            <Text style={styles.countText}>{this.props.count}</Text>
          </View>
        </View>
      )
	}
}

const styles = StyleSheet.create({
	imageContainer: {
	    marginTop: 15,
	    marginLeft: 20,
      marginRight: 10,
  },
    previewImage: {
    height: 50,
    width: 50,
  },
    countStyle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: -10,
    marginLeft: 35
  },
  countText: {
    marginTop: 1,
    marginLeft: 5,
    zIndex: 100
  }
})