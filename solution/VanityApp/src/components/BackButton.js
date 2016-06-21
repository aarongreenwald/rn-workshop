import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';

const BackButton = ({back}) =>
  <TouchableOpacity onPress={back} style={styles.backButton}>
    <CustomText style={styles.backButtonText}>Back</CustomText>
  </TouchableOpacity>
;

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    padding: 10
  },
  backButtonText: {
    color: '#44e',
    fontSize: 16
  }
});