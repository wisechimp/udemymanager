import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectID: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderID: MESSAGING_SENDER_ID
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
