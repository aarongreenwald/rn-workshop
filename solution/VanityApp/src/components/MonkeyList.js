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
    ListView,
    TouchableHighlight
} from 'react-native';

const datasource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const ds = datasource.cloneWithRows([
  require('../../images/monkey1.jpeg'),
  require('../../images/monkey2.jpeg'),
  require('../../images/monkey3.jpeg'),
  require('../../images/monkey4.jpeg'),
  require('../../images/monkey1.jpeg'),
  require('../../images/monkey6.jpeg'),
  require('../../images/monkey7.jpeg'),
  require('../../images/monkey8.jpeg'),
  require('../../images/monkey9.jpeg')
]);

export class MonkeyList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={{flex:1}}
                    dataSource={ds}
                    renderRow={(rowData) => <TouchableHighlight onPress={()=>{this.props.onMonkeyPressed(rowData)}} style={styles.container}><Image source={rowData} /></TouchableHighlight>}
                />
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

