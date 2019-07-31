import React, { Component } from 'react'
import AuthServices from '../Services/Services'
import { Text, StyleSheet, Button, View, FormLabel, FormInput, FormValidationMessage } from 'react-native'
//import ReactNativeComponentTree from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthServices();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <View>
        <Text> Soy el login </Text>
        <FormLabel>CUSTOM_NAME</FormLabel>
        <FormInput onChangeText={this.handleChange()}/>
        <FormValidationMessage
        style={styles.errorMess} >This field is required</FormValidationMessage>
        <Button>LOG IN</Button>
      </View>
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
  errorMess: {
    color: 'red',
  }
});


