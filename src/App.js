import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
