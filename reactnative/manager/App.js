import firebase from 'firebase';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGai2J_2hTHNS6fygPS9euvVyjFMn7GrE',
      authDomain: 'albums-4bfa3.firebaseapp.com',
      databaseURL: 'https://albums-4bfa3.firebaseio.com',
      projectId: 'albums-4bfa3',
      storageBucket: 'albums-4bfa3.appspot.com',
      messagingSenderId: '689491940350'
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
