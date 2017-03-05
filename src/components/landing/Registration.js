'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Logo from '../Logo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


class Registration extends Component {
  // Component level state used to toggle the correct form to display
  state = { registeredUser: false };

  // Logic to determine which form to render to the user
  renderForm() {
    if (this.state.registeredUser) {
      return (
        <LoginForm />
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
        {this.renderForm}
        {/* Button to toggle registeredUser state and log in an existing user */}
      </View>
      );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});


export default Registration;
