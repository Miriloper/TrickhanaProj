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


const AppNavigator = createStackNavigator({
  Home: { screen: screen.Home },
  Login: {screen: screen.Login},
  SignUp: {screen: screen.SignUp},
  Play: { screen: screen.Play },
  Settings: { screen: screen.Settings }
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />
  }
}

  // constructor(props) {
  //   super(props);
  //   //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
  //   // this.state = { loggedInUser: null };
  //   this.service = new AuthServices();
  //}

  // getUser = (userObj) => {
  //   this.setState({
  //     loggedInUser: userObj
  //   });
  // };

  // componentDidMount() {
  //   this.fetchUser();
  // }

  // logout = () => {
  //   this.service.logout().then(() => {
  //     this.setState({ loggedInUser: null });
  //   });
  // };

  // //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  // fetchUser() {
  //   if (this.state.loggedInUser === null) {
  //     //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
  //     return this.service
  //       .loggedin()
  //       .then(response => {
  //         this.setState({
  //           loggedInUser: response
  //         });
  //       })
  //       .catch(err => {
  //         this.setState({
  //           loggedInUser: false
  //         });
  //       });
  //   }
  // }

//   render() {
//     //return <AppContainer getUser={this.getUser}/>
//   }
// }
