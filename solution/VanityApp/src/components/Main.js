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
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight
} from 'react-native';
import MarqueeLabel from '@remobile/react-native-marquee-label';
import {connect} from 'react-redux';
import {store, mapStateToProps} from '../store';
import VisitorCount from '../components/VisitorCount'
const VisitorCountViewContainer = connect(mapStateToProps)(VisitorCount);

export class Main extends Component {

    render() {
        return (
            <Image style={styles.bg} source={require('../../images/bg.jpg')}>
                <Text style={styles.text}>Hi Main scene!</Text>
                <MarqueeLabel style={styles.marqueeLabel}
                              text="I am a funky marquee, funky marquee I am. If you want me to funk like a marq', all you need is to ask!"
                              marqueeType="MLContinuous"
                              scrollDuration={3.0}
                              fadeLength={0.0}
                              leadingBuffer={0.0}
                              trailingBuffer={50}
                              textColor='red'
                              font={{fontSize:20, fontWeight: 0.4}}
                />
                <VisitorCountViewContainer store={store}/>
                <TouchableHighlight style={{top:20}} onPress={this.props.onButtonPress}>
                    <Text>Go to monkeys!</Text>
                </TouchableHighlight>
            </Image>
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
        height: 30
    }

});
