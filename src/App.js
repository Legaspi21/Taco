'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
