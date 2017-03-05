import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#256000',
		fontSize: 18,
		fontWeight: '400',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf: 'center',
		width: 175,
		backgroundColor: 'rgba(0,0,0,0)',
		borderRadius: 5,
		borderWidth: 0.2,
		borderColor: '#256000',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;
