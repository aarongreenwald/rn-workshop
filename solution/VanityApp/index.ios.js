/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
    TouchableHighlight
} from 'react-native';
import {Main} from './src/components/Main'
import {HideousHomePage} from './src/components/HideousHomePage'
import {MonkeyList} from './src/components/MonkeyList'
import {Monkey} from './src/components/Monkey'

class VanityApp extends Component {

  render() {
    return (
    <Navigator
        initialRoute={{index: 0}}
        renderScene={(route, navigator) => {
          switch (route.index) {
            case 0:
              return <Main onButtonPress={() => {
                 navigator.push({index: 1})
              }}/>;
          case 1:
            return <HideousHomePage onButtonPress={() => {
                 navigator.push({index: 2})
              }} onBack={()=>{navigator.pop();}} />
;         case 2:
            return <MonkeyList onMonkeyPressed={(monkeyImage) => {
              navigator.push({index: 3, monkey: monkeyImage})
              }
            } onBack={()=>{navigator.pop();}} />;
          case 3:
            return <Monkey monkey={route.monkey} onBack={()=>{navigator.pop();}} />;
          }
        }
    }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    flex: 1,
    // resizeMode: 'cover',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  marqueeLabel: {
    backgroundColor: '#FFFFE0',
    alignSelf: "stretch",
    height:30
  }

});

AppRegistry.registerComponent('VanityApp', () => VanityApp);
