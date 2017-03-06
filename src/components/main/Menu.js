'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Menu extends Component {
  render() {
    return (
      <View>
				<Text style={styles.textStyle}>
					MENU
				</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 25
	}
});


export default Menu;
