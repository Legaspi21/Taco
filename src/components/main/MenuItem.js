import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button, Icon, Input, Item, Text as TextBase } from 'native-base';
import { 
	View,
	Image,
	Text,
	StyleSheet,
	LayoutAnimation,
	TouchableWithoutFeedback
} from 'react-native';
import { 
	quantityChanged
} from '../../actions';

class MenuItem extends Component {
	state = { expanded: false, cartClicked: false }
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	onQuantityTextChange({ quantity, title, price }) {
		this.props.quantityChanged({ quantity, title, price });
	}

	handleImageCartPress() {
		this.setState({ cartClicked: true });
		this.selectExpanded();
	}
	
	selectExpanded() {
		this.setState({ expanded: !this.state.expanded });
	}

	formatPrice(price) {
		return price / 100;
	}

	renderQuantityField() {
		const { title, price } = this.props;

		if (this.state.cartClicked) {
			return (
				<Item>
					<Icon active name='cart' />
					<Input 
						placeholder='How many?' 
						onChangeText={(quantity) => this.onQuantityTextChange({ quantity, title, price })} 
					/>
				</Item>
			);
		}
	}

	renderDescription() {
		const { cardContentStyle } = styles;
		const { description, price } = this.props;

		if (this.state.expanded) {
			return (
				<View>
					<TextBase note>{`$${this.formatPrice(price)}`}</TextBase>
					<Text style={cardContentStyle}>
						{description}
					</Text>
				</View>
			);
		}
	}

	render() {
	const { 
		cardStyle, 
		cardImageStyle, 
		cardTitleStyle, 
		// cardContentStyle, 
		cardMenuStyle, 
		//cardActionStyle 
	} = styles;

	const { title, imageSource } = this.props;

	return (
		<TouchableWithoutFeedback onPress={() => this.selectExpanded()}>
			
			<View style={cardStyle}>
				<Image source={{ uri: imageSource }} style={cardImageStyle} />	
				<Text style={cardTitleStyle}>{title}</Text>
				{this.renderQuantityField()}
				{this.renderDescription()}
				{/*<Text style={cardContentStyle}>
					{description}
				</Text>*/}
				<View style={cardMenuStyle}>
					<Button small light onPress={() => this.handleImageCartPress()}>
						<Icon style={{ fontSize: 18 }} name="cart" />
					</Button>
				</View>
				{/*<Text style={cardActionStyle}>My Action</Text>*/}
			</View>
		</TouchableWithoutFeedback>
	);
}
}

const styles = StyleSheet.create({
	cardStyle: {
		flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
	cardTitleStyle: {
    position: 'absolute',
    top: 120,
    left: 10,
    backgroundColor: 'transparent',
    padding: 12,
    fontSize: 26,
    color: '#fff',
    fontWeight: '600',
    textShadowColor: '#e58004',
    textShadowOffset: { width: 2, height: 1 }
  },
  cardImageStyle: {
    height: 170,
    resizeMode: 'cover',
    opacity: 0.7
  },
  cardContentStyle: {
    padding: 15,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  cardActionStyle: {
    borderStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    padding: 15,
  },
  cardMenuStyle: {
		flexGrow: 1,
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'transparent',
  },

});

export default connect(null, { 
	quantityChanged
})(MenuItem);
