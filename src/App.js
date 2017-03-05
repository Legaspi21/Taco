'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Registration from './components/landing/Registration';

class App extends Component {
  render() {
    return (
        <View style={styles.containerStyle}>
          <Registration />
        </View>
    );
  }
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});


export default App;
