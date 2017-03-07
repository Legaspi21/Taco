import React from 'react';
import { 
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';

const MenuItem = ({ title, description, imageSource }) => {
	const { 
		cardStyle, 
		cardImageStyle, 
		cardTitleStyle, 
		cardContentStyle, 
		cardMenuStyle, 
		//cardActionStyle 
	} = styles;

	return (
		<View style={cardStyle}>
			<Image source={{ uri: imageSource }} style={cardImageStyle} />	
			<Text style={cardTitleStyle}>{title}</Text>
			<Text style={cardContentStyle}>
				{description}
			</Text>
			<View style={cardMenuStyle} />
			{/*<Text style={cardActionStyle}>My Action</Text>*/}
		</View>
	);
};

const styles = StyleSheet.create({
	cardStyle: {
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
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'transparent',
  },
});

export default MenuItem;
