// auth/Signup.js
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
//import ReactNativeComponentTree from 'react-native';

import { Colors } from "react-native/Libraries/NewAppScreen";

import CoolButton from "./CoolButton";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthServices();
  }

  handleFormSubmit = event => {
    // handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        console.log("patata");
        console.log(response);
        this.setState({
          username: "",
          password: ""
        });
        this.goToLogin();
      })
      .catch(error => console.log(error));
  };

  goToLogin = () => {
    console.log("naranja");
    this.props.navigation.navigate("Login");
  };

  handleNameChange = username => {
    this.setState({ username });
  };
  handlePasswordChange = password => {
    this.setState({ password });
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
              title="Sign Up"
              color="white"
              accessibilityLabel="Sign up in the app"
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
