import React,  {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screen_components/StartGameScreen'
import GameScreen from './screen_components/GameScreen'

export default function App() {

  const [userNumber, setUserNumber] = useState(); 

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)

  }

let content = <StartGameScreen/>



//rendering one of two screens 

  return (
    <View style={styles.container}>
      <Header titie="Guess a number"/>
     {content}
      <GameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, //view has all the space - takes all the sapce and width from device
  },
})
