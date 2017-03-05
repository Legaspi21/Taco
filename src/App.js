'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  View
} from 'react-native';
import Registration from './components/landing/Registration';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBJbWx594dBJUSIgU_b42gMsOjRtksocOQ',
    authDomain: 'taco-76170.firebaseapp.com',
    databaseURL: 'https://taco-76170.firebaseio.com',
    storageBucket: 'taco-76170.appspot.com',
    messagingSenderId: '864262350636'
  };
  firebase.initializeApp(config);
  }
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
