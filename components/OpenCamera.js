import React, { Component } from 'react';
import {  View, StyleSheet} from 'react-native';
import ClickPhoto from './ClickPhoto';


export default class OpenCamera extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log("inside Camera", this.props.navigation.state.params)
    return (
     <View style={styles.container}>
        <ClickPhoto navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});