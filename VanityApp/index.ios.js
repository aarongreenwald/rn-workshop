import React, { Component } from 'react';
import HideousHomePage from './src/HideousHomePage';
import {AppRegistry} from 'react-native';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from './src/reducers'

const middlewares = [
  createLogger()
];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);

const mapStateToProps = state => ({
  visitorCount: state.visitorCount
});

const App = props => <HideousHomePage {...props} />;
const ConnectedApp = connect(mapStateToProps)(App);

const VanityApp = () =>
  <Provider store={store}>
    <ConnectedApp />
  </Provider>;

AppRegistry.registerComponent('VanityApp', () => VanityApp);
