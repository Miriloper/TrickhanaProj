/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import * as screen from './src/screens/index';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Image,
//   StatusBar,
//   Button
// } from 'react-native';

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: screen.Home },
  Play: { screen: screen.Play },
  Settings: { screen: screen.Settings }
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//     justifyContent: "center",
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     paddingTop: 220
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   introTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//     paddingBottom: 20,
//     fontFamily: "Avenir"
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

