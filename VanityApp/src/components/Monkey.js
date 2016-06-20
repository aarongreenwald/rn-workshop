import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, PanResponder, Animated} from 'react-native';
import BackButton from './BackButton';

export default class Monkey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previousMonkeyPosition: {
        left: 0,
        top: 0
      }
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => this.setState({
        monkeyPosition: {
          ...this.state.monkeyPosition,
          opacity: .5
        }
      }),
      onPanResponderMove: (e, gestureState) => this.setState({
        monkeyPosition: {
          ...this.state.monkeyPosition,
          left: this.state.previousMonkeyPosition.left + gestureState.dx,
          top: this.state.previousMonkeyPosition.top + gestureState.dy
        }
      }),
      onPanResponderRelease: this.stopPanResponder.bind(this),
      onPanResponderTerminate: this.stopPanResponder.bind(this),
    });
  }

  componentDidMount() {

    this.setState({
      monkeyPosition: {}
    });
  }

  stopPanResponder(e, gestureState) {
    this.setState({
      previousMonkeyPosition: {
        left: this.state.previousMonkeyPosition.left + gestureState.dx,
        top: this.state.previousMonkeyPosition.top + gestureState.dy
      },
      monkeyPosition: {
        ...this.state.monkeyPosition,
        opacity: 1
      }
    });
  }


  render() {
    let {monkey, back} = this.props;
    return (
      <View style={styles.container}>
        <BackButton back={back} />
        <Animated.Image source={monkey}
               style={[styles.monkey, this.state.monkeyPosition]}
               {...this.panResponder.panHandlers}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  monkey: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 120,
    height: 120
  }
});