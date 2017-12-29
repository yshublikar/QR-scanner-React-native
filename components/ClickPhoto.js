import React, {Component} from 'react';
import {View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Image,
ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Camera from 'react-native-camera';
import ShowImage from './ShowImage';
import FinishButton from './FinishButton';



export default class ClickPhoto extends Component {
	constructor(props) {
		super(props);
		console.log("data#######", this.props)
	  	this.state = {
	      path: [],
	    };
	}
	RenderEditImage(event){
    	this.props.navigation.navigate('EditImage', {images: this.state.path })
  	}

	render(){
		return (
	      <View>
		      <Camera
		        ref={(cam) => {
		          this.camera = cam;
		        }}
		        style={styles.preview}
		        aspect={Camera.constants.Aspect.fill}
		        captureTarget={Camera.constants.CaptureTarget.disk}
		      >
		      <View style={styles.footerStyle}>
		      	<Grid>
		      		<Col Size= {25}>
			          {(this.state.path && this.state.path.length>0) ? 
			            <TouchableOpacity onPress={this.RenderEditImage.bind(this)}>
			            <ShowImage count={this.state.path.length} path={this.state.path[this.state.path.length-1]} /> 
			            </TouchableOpacity>
			            : null
			          }
			        </Col>
			        <Col Size= {50}>
				        <View style={styles.camButton}>
				          <TouchableHighlight
				            style={styles.capture}
				            onPress={this.takePicture.bind(this)}
				            underlayColor="rgba(255, 255, 255, 0.5)"
				          >
				            <Image source={require('./../images/camera.png')} style={styles.camImage}/>
				          </TouchableHighlight>
				        </View>
			        </Col>
			        <Col Size= {25}>
			        	<View style={styles.FinishButtonStyle}>
			       			<FinishButton photos={this.state.path}/>
			       		</View>
			        </Col>
		        </Grid>
		      </View>
		      </Camera>
	      </View>
    	);
	}

	takePicture() {
	    this.camera.capture()
	      .then((data) => {
	        console.log(data);
	        var newImage = this.state.path
	        console.log("new Image ", data)
	        newImage.push(data.path)
	        this.setState({ path: newImage })
	      })
	      .catch(err => console.error(err));
	}
}

const styles = StyleSheet.create({
	preview: {
	    flex: 1,
	    justifyContent: 'flex-end',
	    height: Dimensions.get('window').height,
	    width: Dimensions.get('window').width
  },
  	footerStyle: {
	    backgroundColor: '#192424',
	    flexDirection: 'row',
	    height: 80,
	    width: Dimensions.get('window').width,
	    position: 'absolute',
  },
    camButton: {
	    flex: 1,
	    marginTop: 5,
	    marginBottom: 5,
	    alignItems: 'center',
  },
    capture: {
	    width: 70,
	    height: 70,
	    borderRadius: 35,
	    borderWidth: 5,
	    borderColor: '#FFF',
	    marginBottom: 70,
  },
    camImage: {
	    width: 50, 
	    height: 50,
	    marginLeft: 5,
	    marginTop: 3,
  },
  FinishButtonStyle: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'flex-end'
  }
})