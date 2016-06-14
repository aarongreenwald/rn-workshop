import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ({visitorCount}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello There. My name is Aaron Greenwald.
      </Text>
      <Text>You are visitor #{visitorCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 5
  }
});