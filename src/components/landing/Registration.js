'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import Logo from '../Logo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


class Registration extends Component {
  // Component level state used to toggle the correct form to display
  state = { registeredUser: true };

  // Helper passed to LoginForm to switch state of registeredUser when the sign up button is pressed
  handleRegisteredUser() {
    this.setState({ registeredUser: false });
  }
  // Logic to determine which form to render to the user
  renderForm() {
    if (this.state.registeredUser) {
      return (
        <LoginForm handleRegisteredUser={this.handleRegisteredUser.bind(this)} />
       );
    }

    return (
      <SignupForm />
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Logo />
        {/* Conditionally render sign up or login form */}
        {this.renderForm()}
        {/* Button to toggle registeredUser state and log in an existing user */}
      </View>
      );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -40
  }
});


export default Registration;
