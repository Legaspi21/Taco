'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { MKTextField, MKColor } from 'react-native-material-kit';
import { connect } from 'react-redux';
import { 
	emailChanged, 
	passwordChanged, 
	firstNameChanged, 
	lastNameChanged,
	createAccount 
} from '../../actions';
import Button from '../common/Button';

class SignupForm extends Component {
	onButtonPress() {
		const { first_name, last_name, email, password } = this.props;

		this.props.createAccount({ first_name, last_name, email, password });
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onFirstNameChange(text) {
		this.props.firstNameChanged(text);
	}

	onLastNameChange(text) {
		this.props.lastNameChanged(text);
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
					onChangeText={this.onFirstNameChange.bind(this)}
					value={this.props.first_name}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='last name'
					style={styles.textfield}
					onChangeText={this.onLastNameChange.bind(this)}
					value={this.props.last_name}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='email'
					style={styles.textfield}
					onChangeText={this.onEmailChange.bind(this)}
					value={this.props.email}
				/>
				<MKTextField 
					tintColor={MKColor.Lime}
					textInputStyle={{ color: MKColor.Orange, flex: 1 }}
					placeholder='password'
					style={styles.textfield}
					onChangeText={this.onPasswordChange.bind(this)}
					value={this.props.password}
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
		justifyContent: 'center'
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

const mapStateToProps = ({ auth }) => {
	const { first_name, last_name, email, password, error, loading } = auth;

	return { first_name, last_name, email, password, error, loading };
}; 

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	firstNameChanged, 
	lastNameChanged, 
	createAccount 
})(SignupForm);
