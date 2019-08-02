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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from "@react-native-community/async-storage";

import Game1 from '../components/Game1';
import Game2 from '../components/Game2';
import Game3 from '../components/Game3';
import Game4 from '../components/Game4';
import Game5 from '../components/Game5';
import FinishLine from '../components/FinishLine';


export default class Play extends React.Component {

  constructor() {
    super();
    this.state = {
      counterGame: 1,
      // actualGame: 'Game1',
      // gameScreen: undefined
    };
  }

  componentDidMount(){
    this.getActualGame()
  }


  getActualGame = async () => {
    try {
      let countCloud = await AsyncStorage.getItem("COUNTER");
      let pepe
      console.log(countCloud)
      if (pepe = (countCloud == null) ? 1 : countCloud) {
        console.log(pepe)
        this.setState({
          ...this.state,
          counterGame: pepe
        })
      }
      ;
    } catch (error) {
      console.log(error);
    }
    
  }

  getGame = (a) => {
    
    this.setState({
      ...this.state,
      counterGame: a
    })
    console.log(this.state.counterGame)
    //this.forceUpdate();
  }

  render() {
      if (this.state.counterGame == 1)
      return <Game1 gettingGame={this.getGame}></Game1>
      else if (this.state.counterGame == 2)
      return <Game2 gettingGame={this.getGame}></Game2>
      else if (this.state.counterGame == 3)
      return <Game3 gettingGame={this.getGame}></Game3>
      else if (this.state.counterGame == 4)
      return <Game4 gettingGame={this.getGame}></Game4>
      else if (this.state.counterGame == 5)
      return <Game5 gettingGame={this.getGame}></Game5>
      else if (this.state.counterGame == 6)
      return <FinishLine></FinishLine>
    }





  // componentDidMount(){
  //   this.getGame()
  // }

  // getGame = () => {
  //   let result = '<Game' + this.state.counterGame + '>'
  //   let resultTun = result.replace(/"/g, '')
  //   console.log(resultTun)
  //    this.setState({
  //     ...this.state,
  //     actualGame: result,
  //     gameScreen: resultTun
  //   })
  //   return resultTun
  // }

  // render() {
  //     // this.getGame()
  //     return this.state.gameScreen
 
  //   }

  
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

