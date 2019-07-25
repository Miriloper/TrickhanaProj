/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Header,
  Image,
  StatusBar,
} from 'react-native';

import {

  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Intro from './src/components/Intro';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header
            <Intro>
          /> */}

          <Intro></Intro>
         
          <View style={styles.body}>
            <Text style={styles.introTitle}> TRICKHANA </Text>
            <Image 
            source={require("./public/images/unicorn.png")}
            style={{width: 200, height: 200}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

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
    paddingTop: 220
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    paddingBottom: 20,
    fontFamily: "Avenir"
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

export default App;


