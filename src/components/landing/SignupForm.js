'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { MKTextField, MKColor } from 'react-native-material-kit';
import Button from '../common/Button';

class LoginForm extends Component {
	onButtonPress() {
		console.log('pressed the button')
	}

  render() {
    return (
      <View style={styles.containerStyle} >
				<Text style={styles.headerText} >sign up</Text>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='first name'
					style={styles.textfield}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='last name'
					style={styles.textfield}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='email'
					style={styles.textfield}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='password'
					style={styles.textfield}
					password
				/>
				<View style={styles.buttonStyle} >
					<Button onPress={this.onButtonPress.bind(this)}>
						submit
					</Button>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	textfield: {
		height: 28,
		width: 230,
		marginBottom: 10
	},
	containerStyle: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontSize: 30,
		color: '#f46542',
		fontWeight: '700',
		marginBottom: 30
	},
	buttonStyle: {
		marginTop: 5
	}
});

export default LoginForm;
