import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>Hellooo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    // position: "absolute",
    // zIndex: 2
  },
});