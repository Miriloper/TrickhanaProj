import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

//import CoolButton from "./CoolButton";

import AsyncStorage from "@react-native-community/async-storage";

export default class FinishLine extends React.Component {

  setLocalCounter = async count => {
    try {
      await AsyncStorage.setItem('COUNTER', 1)
      .then(() => {console.log(count)});
      // Redirect to Home/Play
    } catch (error) {
      console.log('Entro en el catch')
      // Error saving data
    }
  };

  componentWillMount () {
    this.changeStorage(1)
  }

  changeStorage = (a) => {

    this.setLocalCounter(a)

      }

  render() {

    return (
      <ImageBackground source={require('../../public/images/goodJob.gif')} style={{width: '100%', height: '100%'}}>
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic" //This property specifies how the safe area insets are used to modify the content area of the scroll view.
          style={styles.scrollView}>
         
          {/* <View style={styles.body}>
            <Text style={styles.introTitle}> YOU WIN</Text>
          </View> */}

        </ScrollView>
      </SafeAreaView>
    </Fragment>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    paddingTop: 170
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    padding: 20,
    fontFamily: "Avenir",
    maxHeight: 60
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

