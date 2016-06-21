import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const BackButton = ({back}) =>
  <TouchableOpacity onPress={back} style={styles.backButton}>
    <Text style={styles.backButtonText}>Back</Text>
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