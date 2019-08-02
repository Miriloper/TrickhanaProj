import React, { Component } from "react";
import AuthServices from "../Services/Services";
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import { Colors } from "react-native/Libraries/NewAppScreen";


import CoolButton from "./CoolButton";



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthServices();
  }

  handleFormSubmit = () => {
    //handleFormSubmit = (event) => {
    //event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        console.log(response);
        this._storeData(response);
        this.setLocalCounter(1);
        //this.goToPlay();
      })
      .catch(error => console.log(error));
  };

  goToHome = (response) => {
    console.log("naranja");
    this.props.navigation.navigate('Home', {user: response});
  };

  handleNameChange = username => {
    this.setState({ username });
  };
  handlePasswordChange = password => {
    this.setState({ password });
  };

  _storeData = async user => {
    try {
      await AsyncStorage.setItem('USER', JSON.stringify(user))
      .then(this.goToHome(user));
      // Redirect to Home/Play
    } catch (error) {
      console.log('Entro en el catch')
      // Error saving data
    }
  };

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

  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            placeholder="Username"
            maxLength={20}
            //onBlur={Keyboard.dismiss}
            value={this.state.username}
            onChangeText={this.handleNameChange}
          />
          <TextInput
            placeholder="Password"
            maxLength={20}
            //onBlur={Keyboard.dismiss}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
          <View>
            <CoolButton
              onPress={this.handleFormSubmit}
              title="Login"
              color="white"
              accessibilityLabel="Log in the app"
            />
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 220
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
  errorMess: {
    color: "red"
  }
});
