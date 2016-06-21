import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = props => <Text {...props} style={[props.style, styles.customText]}/>;
export default CustomText;

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Bradley Hand'
  }
});