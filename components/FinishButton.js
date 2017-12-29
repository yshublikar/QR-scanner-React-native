import React, {Component} from 'react';
import {
	View, 
	StyleSheet, 
	Image, 
	TouchableHighlight, 
	Alert,
	} from 'react-native';

export default class FinishButton extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
	        <View style={styles.finishButton}>
	           <TouchableHighlight
	            onPress={this.finishCapture.bind(this)}
	            underlayColor="#192424"
	          >
	            <Image source={require('./../images/finish.png')} style={styles.finishImage}/>
	          </TouchableHighlight>
	        </View>
	      )
		}

		finishCapture(){
       
		    console.log("called API")
		    if(this.props.photos && this.props.photos.length> 0){
		      var data = new FormData();
		      this.props.photos.map((image) =>{
		        data.append('picture', {uri: image, name: image, type: 'image/jpg'});  
		      })
		      var xhr = new XMLHttpRequest();
		      xhr.withCredentials = true;

		      xhr.open("POST", "http://192.168.0.110:6060/upload");
		      xhr.setRequestHeader("cache-control", "no-cache");
		      xhr.onload = function () { 
		      	if(xhr.status == 200){
		      		Alert.alert(
			    	  'Success',
					  'Your Document added successfully',
					  [
					    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
					  ],
					  { cancelable: true }
					);
		      	}else{
		      		Alert.alert(
			    	  'Warring',
					  'Something went wrong',
					  [
					    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
					  ],
					  { cancelable: true }
					);
		      	}
		      }
		      	
		      xhr.send(data);
		    }else{
		    	Alert.alert(
		    	  'Warning',
				  'You need atleast single picture to proceed',
				  [
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				  ],
				  { cancelable: true }
				)
		    }

		   
		}
}

const styles = StyleSheet.create({
	finishButton: {
    marginTop: 15,
    marginRight: 5
  },
  finishImage: {
    width: 40,
    height: 40
  }
});