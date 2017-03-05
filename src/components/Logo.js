'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View>
      	<Image
      		source={require('../img/taco-logo.png')}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Logo;