
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initilizeApp({
      apiKey: 'AIzaSyDjfYHYmQdUS9eOCP0u-e4fZ4iuQ1zjnLk',
      authDomain: 'authentication-a0030.firebaseapp.com',
      databaseURL: 'https://authentication-a0030.firebaseio.com',
      projectId: 'authentication-a0030',
      storageBucket: 'authentication-a0030.appspot.com',
      messagingSenderId: '357482291032'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentification" />
          <Text>An App!</Text>

      </View>
    );
  }
}

export default App;
