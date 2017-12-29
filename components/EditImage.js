import React, {Component} from 'react';
import Swiper from 'react-native-deck-swiper';
import {View, Text, Image, StyleSheet, Button, Dimensions} from 'react-native';


export default class EditImage extends Component{
	constructor (props) {
	    super(props)
	    this.state = {
	      cards: this.props.navigation.state.params.images,
	      swipedAllCards: false,
	      swipeDirection: '',
	      isSwipingBack: false,
	      cardIndex: 0
	    }
  }

  renderCard = card => {   
			return(
				<View key= {card}> 
				<Image source={{uri: card}} 
					style={styles.previewImage}
					/>	
				</View>
			)
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };
  swapAgain = index => {
  	if(index == (this.state.cards.length)-1){
  		{this.swipeBack()}
  	}
  }

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  deleteImage = index =>{
  	console.log("Image delete");
  	this.props.navigation.state.params.images.splice(index,1);
  }

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={50}
          renderCard={this.renderCard} 
          swipeAnimationDuration={0}
          onSwiped = {this.swapAgain}
          disableBottomSwipe = {true}
          onSwipedTop={this.deleteImage}
          overlayLabels={{
            top: {
              title: 'Delete Image',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  previewImage:{
  	height: (Dimensions.get('window').height)-150,
	width: Dimensions.get('window').width
  }
})