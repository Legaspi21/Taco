'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import MenuList from './MenuList';

class Menu extends Component {
  render() {
    return (
      <View>
				<MenuList />
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
