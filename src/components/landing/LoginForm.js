'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { MKTextField, MKColor, MKSpinner } from 'react-native-material-kit';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import Button from '../common/Button';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLoginButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	onSignupButtonPress() {
		this.props.handleRegisteredUser();
	}

	renderButton() {
		if (this.props.loading) {
			return <MKSpinner style={styles.spinnerStyle} />;
		}

		return (
			<Button onPress={this.onLoginButtonPress.bind(this)}>
				login
			</Button>
		);
	}

	renderError() {
		if (this.props.error) {
			return (
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
			);
		}

		return (
			<Text style={styles.signUpText}>
				Don't have an account yet?
			</Text>
		);
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
					onTextChange={this.onEmailChange.bind(this)}
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
					{this.renderButton()}
				</View>
				{this.renderError()}
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
	},
	signUpText: {
		marginTop: 10,
		color: '#a51b00',
		fontWeight: '300'
	},
	spinnerStyle: {
		width: 22,
    height: 22
	},
	errorTextStyle: {
		marginTop: 10,
		color: '#a51b00',
		fontWeight: '300'
	}
});

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
