import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ListView} from 'react-native';
import BackButton from './BackButton';


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
  require('../../images/monkey9.jpeg'),

]);

const renderRow = (image, navigateToMonkey) =>
  <TouchableOpacity
    style={styles.row}
    onPress={() => navigateToMonkey(image)}>
    <Image source={image} style={styles.image}/>
  </TouchableOpacity>;

const MonkeyList = ({back, navigateToMonkey}) =>
  <View style={styles.container}>
    <BackButton back={back}/>
    <ListView dataSource={ds} renderRow={image => renderRow(image, navigateToMonkey)} />
  </View>
;

export default MonkeyList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(123, 101, 200, .7)'
  },
  row: {
    margin: 5
  },
  image: {
    height: 200,
    width: 200
  }
});