import React, { Fragment } from "react";
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
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import CoolButton from "./CoolButton";

import AsyncStorage from "@react-native-community/async-storage";

export default class Game1 extends React.Component {
  constructor() {
    super();
    this.state = {
      passed: false
    };
  }

  setLocalCounter = async count => {
    try {
      await AsyncStorage.setItem("COUNTER", count).then(() => {
        console.log(count);
      });
      // Redirect to Home/Play
    } catch (error) {
      console.log("Entro en el catch");
      // Error saving data
    }
  };

  changeStorage = a => {
    this.setLocalCounter(a).then(this.props.gettingGame(a));
  };

  isPassed = () => {
    this.setState({
      ...this.state,
      passed: true
    });
  };

  render() {
    if (this.state.passed == false) {
      return (
        <ImageBackground
          source={require("../../public/images/iphone-calling.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Fragment>
            <StatusBar barStyle="dark-content" />

            <CoolButton
                  style={styles.smBut}
                  onPress={() => {
                    this.isPassed();
                  }}
                  title="Passed"
                  color="white"
                  accessibilityLabel="Go to passed"
                />

                
            

          </Fragment>
        </ImageBackground>
      );
    } else {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic" //This property specifies how the safe area insets are used to modify the content area of the scroll view.
              style={styles.scrollView}
            >
              <View style={styles.body}>
                <Text style={styles.introTitle}> </Text>
              </View>

              <CoolButton
                onPress={() => {
                  this.changeStorage(2);
                }}
                title="NEXT"
                color="white"
                accessibilityLabel="Go to next level"
              />
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      );
    }
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    // backgroundColor: 'transparent',
    backgroundColor: "white",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    paddingTop: 170
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    paddingBottom: 20,
    fontFamily: "Avenir"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  smBut: {
    maxHeight: 20,
    maxWidth: 20,
    position: 'absolute'
  }
});


        // <SafeAreaView>
        //       <ScrollView
        //         contentInsetAdjustmentBehavior="automatic" //This property specifies how the safe area insets are used to modify the content area of the scroll view.
        //         style={styles.scrollView}
        //       >
        //         {/* <View style={styles.body}> */}

        //         <CoolButton
        //           style={styles.smBut}
        //           onPress={() => {
        //             this.isPassed();
        //           }}
        //           title="Passed"
        //           color="white"
        //           accessibilityLabel="Go to passed"
        //         />
        //         {/* <Text style={styles.introTitle}> TRICKHANA GAME 1</Text> */}
        //         {/* </View> */}
        //         {/* <ImageBackground source={{uri: 'https://todaslasplantas.com/4255-large_default/amapola-artificial-70cm.jpg'}} style={{width: '100%', height: '100%'}}>
        //     </ImageBackground> */}
        //       </ScrollView>
        //     </SafeAreaView>

