import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {store, mapStateToProps} from './store';
import {Router, Route, hashHistory} from 'react-router'
import {HideousHomePage} from './components/HideousHomePage';
import {MonkeyList} from './components/MonkeyList';
import {Monkey} from './components/Monkey';

require('normalize.css/normalize.css');
require('styles/App.scss');

const ConnectedHideousHomePage = connect(mapStateToProps)(HideousHomePage);
const ConnectedMonkeyList = connect(mapStateToProps)(MonkeyList);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ConnectedHideousHomePage} />
      <Route path="/monkeys" component={ConnectedMonkeyList} />
      <Route path="/monkeys/:index" component={Monkey} />
    </Router>
  </Provider>,
  document.getElementById('app')
);

