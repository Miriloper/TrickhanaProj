import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       {/* <Text style={styles.containerText}>Hellooo</Text> */}
       <Image
                source={require("../../public/images/logoPROVIS.png")}
                style={styles.containerStuff}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    position: "relative",
    zIndex: 2
  },
  containerStuff: {
    position: "absolute",
    top: 50,
    width: 100,
    height: 100  
  }
});