import firebase from 'firebase';
import React, {Component} from 'react';
import {View} from 'react-native';

import {Spinner} from './src/components/common';
import CardSection from './src/components/CardSection';
import Button from './src/components/Button';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
