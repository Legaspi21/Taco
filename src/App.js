'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
      	<Text>Taco</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});


export default App;