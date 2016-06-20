import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import HideousHomePage from './src/components/HideousHomePage';
import MonkeyList from './src/components/MonkeyList';
import Monkey from './src/components/Monkey';
import {store, mapStateToProps} from './src/store';


const renderScene = (route, navigator, props) => {
  props = {
    ...props,
    back: () => {
      if (route.index > 0) {
        navigator.pop();
      }
    }
  };
  switch (route.name) {
    case 'monkey-list':
      return <MonkeyList
        {...props}
        navigateToMonkey={monkey => {
          navigator.push({
            name: 'monkey',
            index: route.index + 1,
            passProps: {monkey}
          });
        }}
      />;
    case 'monkey':
      return <Monkey {...props} {...route.passProps} />;
    default:
      return <HideousHomePage
        {...props}
        navigateToMonkeyList={() => {
          navigator.push({
            name: 'monkey-list',
            index: route.index + 1,
          });
        }}
      />
  }
};

const App = props =>  <Navigator
  initialRoute={{name: 'home', index: 0}}
  renderScene={(route, navigator) => renderScene(route, navigator, props)}
/>;

const ConnectedApp = connect(mapStateToProps)(App);

const VanityApp = () =>
  <Provider store={store}>
    <ConnectedApp />
  </Provider>;

AppRegistry.registerComponent('VanityApp', () => VanityApp);
