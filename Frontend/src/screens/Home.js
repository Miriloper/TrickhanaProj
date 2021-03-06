import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import { Colors } from "react-native/Libraries/NewAppScreen";

import Logo from "../components/Logo";
import CoolButton from "../components/CoolButton";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
    this.getUserLocStorage();
  }

  // componentDidMount(){

  // }

  getUserLocStorage = async () => {
    try {
      let logUser = await AsyncStorage.getItem("USER");
      let item = JSON.parse(logUser);
      console.log(logUser);
      this.setState({
        ...this.state,
        user: item
      })
      console.log('Hola ' + this.state.user.username)
      ;
    } catch (error) {
      console.log(error);
    }
  };

  logOut = async () => {
      try {
        let logUser = await AsyncStorage.removeItem('USER');
        console.log(logUser);
        this.setState({
          ...this.state,
          user: undefined
        })
        this.goToHome();
        console.log(this.state.user);
      } catch (error) {
        console.log(error);
      }
    };
  

  goToHome = () => {
    console.log("naranja");
    this.props.navigation.navigate('Home');
  };

  //   this.service
  //     .logout()
  //     .then(response => {
  //       this.setState({
  //         ...this.state,
  //         user: undefined
  //       });
  //       console.log(response);
  //       this._storeData(response);
  //       //this.goToPlay();
  //     })
  //     .catch(error => console.log(error));

  //     console.log(this.state.user)
  //     this.props.navigation.navigate("Home")
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params.user) {
      this.setState({
        ...this.state,
        user: nextProps.navigation.state.params.user
      })
    }
  }

  render() {
    if (this.state.user !== undefined && this.state.user !== null) {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic" //This property specifies how the safe area insets are used to modify the content area of the scroll view.
              style={styles.scrollView}
            >
              <Logo />

              <View style={styles.body}>
                <Text style={styles.introTitle}> TRICKHANA </Text>
                <Image
                  source={require("../../public/images/unicorn.png")}
                  style={{ width: 200, height: 200 }}
                />

                <View>
                <Text style={styles.introUser}> Hi {this.state.user.username}! </Text>
                </View>

                <View style={styles.footer}>
                  <CoolButton
                    onPress={() => this.props.navigation.navigate("Play")}
                    title="Play"
                    color="white"
                    accessibilityLabel="Go to play screen"
                  />
                  <CoolButton
                    onPress={() => this.props.navigation.navigate("Settings")}
                    title="Settings"
                    color="white"
                    accessibilityLabel="Go to settings screen"
                  />
                </View>
                <View style={styles.footer}>
                  <Button
                    onPress={() =>this.logOut()}
                    title="Logout"
                    color="#841584"
                    accessibilityLabel="Go to login screen"
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      );
    } else
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic" //This property specifies how the safe area insets are used to modify the content area of the scroll view.
              style={styles.scrollView}
            >
              <Logo />

              <View style={styles.body}>
                <Text style={styles.introTitle}> TRICKHANA </Text>
                <Image
                  source={require("../../public/images/unicorn.png")}
                  style={{ width: 200, height: 200 }}
                />
                {/* <Text> {this.state.user} </Text> */}
                <Button
                  onPress={() => this.props.navigation.navigate("Login")}
                  title="Login"
                  color="#841584"
                  accessibilityLabel="Go to login screen"
                />
                <Button
                  onPress={() => this.props.navigation.navigate("SignUp")}
                  title="Sign Up"
                  color="#841584"
                  accessibilityLabel="Go to signup screen"
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      );
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
    backgroundColor: Colors.white,
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
  introUser: {
    fontSize: 14,
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  setBut: {
    color: "white",
    backgroundColor: "#841584",
    borderRadius: 10
  }
});
