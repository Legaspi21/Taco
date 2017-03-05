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
	onLoginButtonPress() {
		console.log('pressed the button');
	}

	onSignupButtonPress() {
		console.log('pressed the button');
	}

  render() {
    return (
      <View style={styles.containerStyle} >
				<Text style={styles.headerText} >login</Text>
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
					<Button onPress={this.onLoginButtonPress.bind(this)}>
						login
					</Button>
				</View>
				<Text style={styles.signUpText} >Don't have an account yet?</Text>
				<View style={styles.buttonStyle} >
					<Button onPress={this.onSignupButtonPress.bind(this)}>
						sign up
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
	},
	signUpText: {
		marginTop: 10,
		color: '#a51b00',
		fontWeight: '300'
	}
});


export default LoginForm;
