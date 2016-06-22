/**
 * Created by MLmediapps on 21/06/2016.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    PanResponder,
    Animated
} from 'react-native';

export class Monkey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),//Step 1
            isDragging: false
        };
        this.panResponder = PanResponder.create({    //Step 2
            onPanResponderGrant: (evt, gestureState) => {
                this.setState({isDragging: true})
            },
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan.x,
                dy: this.state.pan.y
            }]),
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(            //Step 1
                    this.state.pan,         //Step 2
                    {toValue: {x: 0, y: 0}}     //Step 3
                ).start();
                this.setState({isDragging: false})
            } //Step 4
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View {...this.panResponder.panHandlers} style={this.state.pan.getLayout()}>
                    <Image source={this.props.monkey}/>
                </Animated.View>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Back!</Text>
                </TouchableHighlight>
                <Text>{this.state.isDragging ? "DRAGGING!" : "NOT DRAGGIN"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

