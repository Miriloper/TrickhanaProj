/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


// {
//   "name": "Trickhana",
//   "version": "0.0.1",
//   "private": true,
//   "scripts": {
//     "start": "react-native start",
//     "test": "jest",
//     "lint": "eslint ."
//   },
//   "dependencies": {
//     "react": "16.8.6",
//     "react-native": "^0.60.4",
//     "react-native-cli": "^2.0.1",
//     "react-native-gesture-handler": "^1.3.0",
//     "react-navigation": "^3.11.1"
//   },
//   "devDependencies": {
//     "@babel/core": "7.5.5",
//     "@babel/runtime": "7.5.5",
//     "@react-native-community/eslint-config": "0.0.3",
//     "babel-jest": "24.8.0",
//     "eslint": "6.1.0",
//     "jest": "24.8.0",
//     "metro-react-native-babel-preset": "0.54.1",
//     "react-test-renderer": "16.8.6"
//   },
//   "jest": {
//     "preset": "react-native"
//   }
// }
