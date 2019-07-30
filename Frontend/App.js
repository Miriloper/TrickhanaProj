/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import * as screen from './src/screens/index';


import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: screen.Home },
  Login: {screen: screen.Login},
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
