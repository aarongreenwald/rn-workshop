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
    TouchableHighlight
} from 'react-native';

export class HideousHomePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.onButtonPress}>
                    <Text>Go to monkey list...</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Back!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

